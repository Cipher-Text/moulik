import type { Config } from 'tailwindcss';
export default { content: ['./src/**/*.{ts,tsx}'], theme: { extend: { colors: { forest:'#183d32', leaf:'#52775b', cream:'#f7f4eb', saffron:'#d8a740', clay:'#bd674b', ink:'#26352d' }, fontFamily: { sans:['var(--font-bangla)','Noto Sans Bengali','sans-serif'] } } }, plugins: [] } satisfies Config;
