export const LATIN_CHARSET = `
0123456789
-
abcdefghijklmnopqrstuvwxyz
ÄäÀàÁáÂâÃãÅåǍǎĄąĂăÆæĀā
ÇçĆćĈĉČč
ĎđĐďð
ÈèÉéÊêËëĚěĘęĖėĒē
ĜĝĢģĞğ
Ĥĥ
ÌìÍíÎîÏïıĪīĮį
Ĵĵ
Ķķ
ĹĺĻļŁłĽľ
ÑñŃńŇňŅņ
ÖöÒòÓóÔôÕõŐőØøŒœ
ŔŕŘř
ẞßŚśŜŝŞşŠšȘș
ŤťŢţÞþȚț
ÜüÙùÚúÛûŰűŨũŲųŮůŪū
Ŵŵ
ÝýŸÿŶŷ
ŹźŽžŻż`
  .replace(/\n/g, '')
  .split('')

export const SPECIAL_CHARSET = '¿÷≥≤µ˜∫√≈æ…¬˚˙©"+-_!@#$%?&*()~`/\\[]{}:;<>='.split('').map(c => `\\${c}`)
