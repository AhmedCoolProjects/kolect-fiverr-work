---
title: Platform Fee
sidebar_position: 1
---

> **TLDR**: LOOKS token stakers earn 100% of the trading fees on LooksRare.

LooksRare collects a basic sales fee of 2% (in WETH) on all NFT sales excluding private sales.

All the WETH collected from these fees are consolidated at the end of each recurring 6,500 Ethereum block period (roughly 24 hours) and then **distributed to LOOKS stakers in a linear format per block over the next 6,500 block period.**

## How often can I claim my WETH rewards?

Any time you want. There’s no limit on the number of times you can claim your rewards each day, but just be cautious of the gas fees you are paying to claim.

## What happens if I forget to claim my WETH rewards for today?

No need to worry. As long as your LOOKS remain staked it will continue to accumulate even if you don’t claim every day. You can leave it until gas fees are low or you’ve accumulated enough to make it worth claiming.

## Why don’t private sales count to volume calculations for fee sharing?

Unlike other marketplaces, LooksRare doesn’t take a fee on private sales, so the volume generated by private sales doesn’t contribute anything to the WETH that’s earned by LOOKS stakers.

## Active and Passive Staking

The rewards for each day are calculated at the end of the previous period, then split between Active and Passive stakers before they're distributed.

> The main difference between Active and Passive stakers is that **LOOKS in passive staking do NOT earn additional LOOKS while staked.**

**Active stakers** are the majority of stakers, whose staked LOOKS tokens are fully unlocked.

**Passive stakers** are stakers whose LOOKS tokens are locked for trading but unlocked for staking: namely Team, Treasury and Strategic sale tokens (which unlock over time - [read more](/about/looks-tokenomics)).

At the start of each 6,500 block period, a portion of the WETH fees collected from the previous 6,500 blocks are sent to the Passive Staking address. The amount is calculated as:

$$
\frac{a}{b}\times{c}
$$

Where

- a = Total amount of LOOKS staked passively at start of period
- b = Total amount of LOOKS staked at start of period (passive + active)
- c = Amount of WETH fees from previous 6,500 blocks

The remaining WETH is then sent to the Active Staking Pool.

## How is WETH fee sharing calculated for Active LOOKS stakers?

For each 6,500 block period, the amount of WETH rewards to be distributed in each block to active stakers is calculated by:

$$
\frac{\text{Total WETH collected as fees in the prior 6500 block period}}{6500}
$$

Each user’s amount of staked LOOKS at each block is then compared against the total amount of LOOKS staked at each block, with this being done at every block within the 6,500 block period to find the total amount of WETH rewards received.

**Example**

- Let’s assume LooksRare processes 10,000 WETH of non-private sale volume in the first 6,500 blocks after launch, collecting total fees of 200 WETH.
- At block #6500, User A stakes 10,000 LOOKS in preparation to start earning WETH at block #6501.
- At block #6501,
  - The amount of passive tokens staked is 10% of the total amount of tokens staked, meaning 20 WETH is sent to the passive staking address.
  - The remaining 180 WETH is put into the active LOOKS staking pool, with 0.027692 WETH to be earned per block for 6,500 blocks (180 / 6,500).
  - The total amount of LOOKS staked from ALL users is 1,000,000 LOOKS.
  - This means that User A will be allocated:
    $$
    \frac{10,000}{1,000,000}\times{0.027692} = 0.00027692\text{ WETH}
    $$
    at block #6501.
- At block #6502,

  - Assuming User A’s stake does not change, but the total amount of LOOKS staked from all users increases to 1,500,000 LOOKS, then User A will be allocated:
    $$
     \frac{10,000}{1,500,000}\times{0.027692} = 0.00018641\text{ WETH}
    $$
    at block #6502.

- This calculation each block will then continue for another 6,498 blocks (since our example covers a 6,500 block period), with 0.027692 WETH as the amount to be earned per block.
- The WETH fees generated from trades on the LooksRare platform in the 6,500-block period between block #6501 and block #13000 will then be used as the rewards to be distributed linearly over the next period, which will be from block #13001 and #19500.
