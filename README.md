[![make.fun](https://make.fun/badge/u-mang-the-moon-finally-answers-back-781a7ec1.svg)](https://make.fun/c/u-mang-the-moon-finally-answers-back-781a7ec1)
[![rank](https://make.fun/badge/u-mang-the-moon-finally-answers-back-781a7ec1/indraHA01/makefun-u-mang-the-moon-finally-answers-back-781a7ec1/rank.svg)](https://make.fun/c/u-mang-the-moon-finally-answers-back-781a7ec1)
[![reward](https://make.fun/badge/u-mang-the-moon-finally-answers-back-781a7ec1/indraHA01/makefun-u-mang-the-moon-finally-answers-back-781a7ec1/reward.svg)](https://make.fun/c/u-mang-the-moon-finally-answers-back-781a7ec1)

# I Am a Rock — the Moon finally answers back, for make.fun

Entry for [The Moon Finally Answers Back](https://make.fun/c/u-mang-the-moon-finally-answers-back-781a7ec1) on make.fun.

## The entry

> Four billion years of wishes, howls, and 3 a.m. promises, and my answer is this: I am a rock. I do not grant things. The werewolves, however, owe me rent.

154 characters, one line. After four billion years of being wished on, howled at
and promised things at 3 a.m., the Moon finally answers — and the answer is a
deadpan shrug: it is a rock, it grants nothing, and the only creatures who ever
showed up on schedule, the werewolves, are behind on the rent. The joke answers
all three things people do to the Moon (wishes, howls, late-night promises) in a
single breath, in a voice that is wry and old and a little tired of being wished
upon, and the punchline lands on the last words. Nothing in it explains itself.

## How it works

`main.ts` writes that single line to `/output/entry.txt` (UTF-8, 1–240 characters),
after checking the gate itself: it refuses to write anything shorter than 1 character,
longer than 240, or only whitespace, and it refuses anything that is not exactly
one line.

## Run

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18+ (the grader runs Node 22.23.4). No dependencies, no network,
no secrets.

## License

MIT — see [LICENSE](LICENSE).
