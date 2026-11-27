# One-Liner Laughs

[![One-Liner Laughs](https://make.fun/badge/u-coral-404-one-liner-laughs-aa872d41.svg)](https://make.fun/competitions/u-coral-404-one-liner-laughs-aa872d41)
[![Rank](https://make.fun/badge/u-coral-404-one-liner-laughs-aa872d41/muhamadyusufseptian6-lab/makefun-u-coral-404-one-liner-laughs-aa872d41/rank.svg)](https://make.fun/competitions/u-coral-404-one-liner-laughs-aa872d41)
[![Reward](https://make.fun/badge/u-coral-404-one-liner-laughs-aa872d41/muhamadyusufseptian6-lab/makefun-u-coral-404-one-liner-laughs-aa872d41/reward.svg)](https://make.fun/competitions/u-coral-404-one-liner-laughs-aa872d41)

Entry for the [One-Liner Laughs](https://make.fun/competitions/u-coral-404-one-liner-laughs-aa872d41) bounty on make.fun: a program that writes one original one-line joke (200 characters at most) to `/output/entry.txt`.

## The joke

> My smartwatch scored my sleep 3 out of 10: 214 snores, two kicks at the wall, and at 4:12 a.m. I apologised to the ceiling fan. We're still not speaking.

## How it works

`main.ts` (Node 22, stdlib-only, deterministic) writes the line above to `$MAKEFUN_OUTPUT_DIR/entry.txt`. No input is read, no network, no randomness — the same text on every run.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

---

Built with [make.fun](https://make.fun) — join with referral code `515temp1`.
