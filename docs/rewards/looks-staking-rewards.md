---
title: Looks Staking Rewards
sidebar_position: 4
---

## Stake LOOKS, Earn LOOKS

When you stake LOOKS, you also earn additional LOOKS on top of the trading fee rewards received in WETH. Staked LOOKS tokens are auto-compounded for users that wish to just leave their LOOKS tokens staked.

## How many LOOKS tokens are allocated to LOOKS stakers?

LOOKS staking rewards will be earned over 4 phases with differing reward rates, based on a schedule of 6,500 Ethereum blocks per day.

| Phase | Length                      | LOOKS Per Block | LOOKS Per Day |
| ----- | --------------------------- | --------------- | ------------- |
| A     | 195,000 blocks (30 days)    | 189.00 LOOKS    | 1,228,500.00  |
| B     | 585,000 blocks (90 days)    | 89.775 LOOKS    | 583,537.50    |
| C     | 1,560,000 blocks (240 days) | 35.4375 LOOKS   | 230,343.75    |
| D     | 2,346,250 blocks (361 days) | 18.90 LOOKS     | 122,850.00    |

## How are the LOOKS rewards calculated?

User A’s LOOKS staking rewards per block are calculated by:

$$
\frac{\text{LOOKS staked by User A}}{\text{Total amount of staked LOOKS​}} \times{\text{ LOOKS per block}}
$$

**Example**

- User A stakes 10,000 LOOKS during Phase A
- The total amount of staked LOOKS is now 1,000,000 LOOKS

Based on the above, User A would receive:

$$
\frac{10,000}{1,000,000​} \times{189} = 1.89 \text{ LOOKS per block}
$$

## What does auto-compounding mean?

Pending rewards are often required to be manually staked by users to increase their share of staked tokens. However this wastes both gas and opportunity cost. As such, LooksRare has enabled auto-compounding for all users that stake LOOKS. This means that LOOKS rewards received from the staked LOOKS balance are automatically re-staked into the pool (or compounded) to increase the amount of LOOKS staked.

When users unstake their LOOKS tokens, the amount of compounded rewards and the original staked amount will be withdrawn to the user’s wallet.
