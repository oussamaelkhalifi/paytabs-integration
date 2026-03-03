const fs = require('fs');
const path = require('path');
const { withDangerousMod } = require('@expo/config-plugins');

function ensurePickFirst(contents) {
  if (/pickFirst\s+'\*\*\/\*\\.so'/.test(contents) || /pickFirst\s+"\*\*\/\*\.so"/.test(contents) || /pickFirst\s+'\*\*\/\*\.so'/.test(contents)) {
    return contents;
  }

  // Try to append inside existing packagingOptions block that already contains jniLibs
  const packagingWithJniRegex = /(packagingOptions\s*\{[\s\S]*?jniLibs\s*\{[\s\S]*?\}\s*\})/;
  if (packagingWithJniRegex.test(contents)) {
    return contents.replace(packagingWithJniRegex, (match) => {
      if (/pickFirst/.test(match)) return match;
      return match + "\n    packagingOptions {\n        pickFirst '**/*.so'\n    }";
    });
  }

  // Otherwise try to insert packagingOptions before androidResources or before the end of android block
  const beforeAndroidResources = /(android\s*\{[\s\S]*?)(\n\s*androidResources\s*\{)/;
  if (beforeAndroidResources.test(contents)) {
    return contents.replace(beforeAndroidResources, (m, g1, g2) => {
      return g1 + "\n    packagingOptions {\n        pickFirst '**/*.so'\n    }\n" + g2;
    });
  }

  // Fallback: insert right after the opening android { if present
  const androidOpen = /(android\s*\{)/;
  if (androidOpen.test(contents)) {
    return contents.replace(androidOpen, "$1\n    packagingOptions {\n        pickFirst '**/*.so'\n    }");
  }

  // As a last resort, append comment + block
  return contents + "\n// Added by withPickFirstSo plugin\nandroid {\n    packagingOptions {\n        pickFirst '**/*.so'\n    }\n}\n";
}

module.exports = function withPickFirstSo(config) {
  return withDangerousMod(config, [
    'android',
    async (config) => {
      const buildGradlePath = path.join(config.modRequest.projectRoot, 'android', 'app', 'build.gradle');
      try {
        let contents = fs.readFileSync(buildGradlePath, 'utf8');
        const updated = ensurePickFirst(contents);
        if (updated !== contents) {
          fs.writeFileSync(buildGradlePath, updated);
        }
      } catch (e) {
        // ignore if file not present during some flows
        console.warn('withPickFirstSo: could not modify build.gradle', e.message);
      }
      return config;
    }
  ]);
};
