# Case Structure Notes

## Public Case Structure

Reference model for the public layer of portfolio cases:

1. Company / project title
2. Role
3. Period
4. Short summary of the project itself
5. Results
6. Tasks

The public case should stay simple and readable. The strongest version is:
- short summary about the project, not necessarily about the company;
- `Results` written as short bullet points;
- `Tasks` written as concise nouns / activity labels;
- optional deeper context lives in `/workflow`.

## Results Block

Rules for `Results`:
- use short bullet points;
- begin with a verb;
- mention the metric or business effect early;
- then specify what exactly improved and where;
- keep the list around 5-7 points.

Examples of tone:
- increased conversion to purchase by `X%` through redesign of the final funnel steps;
- reduced bounce rate on key checkout surfaces;
- decreased the number of user errors in service selection scenarios;
- simplified the path from product page to checkout;
- accelerated agreement cycles through interactive prototypes.

## Tasks Block

Rules for `Tasks`:
- keep it flatter and simpler than results;
- use nouns or short activity labels instead of long explanations;
- avoid turning this block into achievements;
- this is a compact scan of what work was actually done.

Examples:
- benchmarking
- user flows
- prototyping
- interface design
- corner cases
- stakeholder alignment
- handoff to development
- design review

## Layering

Public case:
- concise, polished, recruiter-friendly

Workflow case:
- intermediate steps
- alternatives
- hypotheses
- rejected variants
- tradeoffs
- team alignment
- implementation notes

Evidence / archive:
- chats
- logs
- raw notes
- intermediate artifacts

## Current Decision

Public cases stay on:
- `/projects/ecommerce-redesign`
- `/projects/partners`

Workflow layer stays on:
- `/projects/ecommerce-redesign/workflow`
- `/projects/partners/workflow`
