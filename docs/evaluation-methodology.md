# Evaluation methodology

Twenty synthetic cases cover eleven roles, strong/weak/list-only/missing evidence, approved aliases, partial-match resistance and keyword stuffing. Gold labels live in `evaluation/datasets/cases.json` separately from produced output. The baseline performs occurrence-style keyword scoring; the final workflow uses boundaries, approved aliases, sections and action context. Every case, failure, runtime and zero cost is reported. The runners write JSON, trajectories and a Markdown comparison into `evaluation/output/`.
