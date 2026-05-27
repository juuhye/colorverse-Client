/**
 * script/build-tokens.mjs — Tailwind CSS v4 완벽 대응 빌드 스크립트
 *
 * 모든 단색(color)과 그라데이션(gradient)을 Tailwind v4의 @theme 블록 내부
 * CSS 변수로 귀속시켜, 유틸리티 클래스 없이 오직 테마 변수로만 제어합니다.
 */

import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// 1. 원본 디자인 토큰 JSON 가져오기
const tokenData = JSON.parse(
  readFileSync(join(root, "design-tokens.tokens.json"), "utf-8"),
);

const colors = tokenData.color || {};
const gradients = tokenData.gradient || {};

// ── Helpers ───────────────────────────────────────────────────────────────────

/** 8자리 Hex(#ffffffff)를 6자리(#ffffff)로 자르고 투명도 처리 */
function cleanHex(val) {
  if (val === "#00000000") return "transparent";
  if (typeof val === "string" && val.startsWith("#") && val.length === 9) {
    if (val.endsWith("ff")) return val.substring(0, 7);
  }
  return val;
}

/** 알파 채널을 판단하여 rgba 등으로 그라데이션 컬러 최적화 */
function parseGradientColor(colorStr) {
  if (colorStr.endsWith("00")) return "rgba(177, 171, 255, 0)";
  if (colorStr.length === 9) return colorStr.substring(0, 7);
  return colorStr;
}

// ── Theme Generators ──────────────────────────────────────────────────────────

/** 단색 토큰 추출 (--color-명) */
function genColors() {
  return Object.keys(colors)
    .sort()
    .map((key) => {
      const val = cleanHex(colors[key].value);
      return `  --color-${key}: ${val};`;
    })
    .join("\n");
}

/** 그라데이션 토큰을 @theme 내의 --background-image-명 변수로 추출 */
function genGradientsAsTheme() {
  const lines = [];
  const sortedKeys = Object.keys(gradients).sort();

  sortedKeys.forEach((key) => {
    const item = gradients[key];

    // 예외 처리: 내부에 "0", "1" 단계를 가진 다중 객체 구조
    if (!item.value && (item["0"] || item["1"])) {
      Object.keys(item).forEach((subKey) => {
        if (subKey === "description") return;
        const subItem = item[subKey];

        // 서브 아이템이 단색 속성인 경우
        if (subItem.type === "color" && subItem.value) {
          lines.push(
            `  --background-image-${key}-${subKey}: ${cleanHex(subItem.value)};`,
          );
          return;
        }

        if (subItem.value && subItem.value.stops) {
          const stopsStr = subItem.value.stops
            .map(
              (s) =>
                `${parseGradientColor(s.color)} ${Math.round(s.position * 100)}%`,
            )
            .join(", ");
          const rotation = Math.round(subItem.value.rotation * 100) / 100;
          lines.push(
            `  --background-image-${key}-${subKey}: linear-gradient(${rotation}deg, ${stopsStr});`,
          );
        }
      });
      return;
    }

    // 일반 선형 그라데이션 처리
    if (item.value && item.value.stops) {
      const stopsStr = item.value.stops
        .map(
          (s) =>
            `${parseGradientColor(s.color)} ${Math.round(s.position * 100)}%`,
        )
        .join(", ");
      const rotation = Math.round(item.value.rotation * 100) / 100;
      lines.push(
        `  --background-image-${key}: linear-gradient(${rotation}deg, ${stopsStr});`,
      );
    }
  });

  return lines.join("\n");
}

// ── TS Dictionary Builders ─────────────────────────────────────────────────────

function extractColors() {
  const result = {};
  for (const [k, v] of Object.entries(colors)) {
    result[k] = cleanHex(v.value);
  }
  return result;
}

function extractGradients() {
  const result = {};
  for (const [k, v] of Object.entries(gradients)) {
    if (!v.value && (v["0"] || v["1"])) {
      result[k] = {};
      if (v["0"]) result[k]["0"] = v["0"].value;
      if (v["1"]) result[k]["1"] = v["1"].value;
    } else {
      result[k] = v.value;
    }
  }
  return result;
}

// ── Assemble CSS ──────────────────────────────────────────────────────────────

const css = `/* 자동생성 파일 — 직접 편집하지 마세요. npm run build:tokens 로 재생성 */

@theme {
  /* === Semantic Colors === */
${genColors()}

  /* === Gradient Theme Bridge === */
${genGradientsAsTheme()}
}
`;

const outPath = join(root, "/src/app/style/tokens.generated.css");
writeFileSync(outPath, css, "utf-8");
console.log(`✅ CSS 빌드 완료: ${outPath}`);

// ── Assemble TS ───────────────────────────────────────────────────────────────

const tokenDict = {
  color: extractColors(),
  gradient: extractGradients(),
};

const ts = `/* 자동생성 파일 — 직접 편집하지 마세요. npm run build:tokens 로 재생성 */

export const tokens = ${JSON.stringify(tokenDict, null, 2)} as const

export type Tokens = typeof tokens
`;

const tsOutPath = join(root, "/src/app/shared/tokens/tokens.generated.ts");
writeFileSync(tsOutPath, ts, "utf-8");
console.log(`✅ TS Dictionary 빌드 완료: ${tsOutPath}`);
