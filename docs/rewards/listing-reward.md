---
title: Listing Rewards
sidebar_position: 2
---

LooksRare’s Listing Rewards program enables NFT collectors and traders to earn LOOKS tokens just by listing NFTs for sale on LooksRare.

Traders receive points for their eligible listings every 10 minutes, which are converted into LOOKS once daily.

Read the introductory [listing rewards blog post](https://docs.looksrare.org/blog/looksrare-listing-rewards-list-nfts-earn-looks) for more info about the program.

:::info Updated 11/06/2022

Having assessed the performance of the Listing Rewards Program in the current market conditions, LooksRare will:

- continue with the base 100,000 LOOKS per day allocated from volume rewards;
- halt the additional 100,000 LOOKS per day added to Listing Rewards from LooksRare Treasury until further notice, starting 2022/06/13 9:00 AM (UTC);
- adjust the list of collections eligible for listing rewards at any given time to be the top 15 collections by 24 hour rolling trading volume (previously top 25)

**Specific time and dates:**

2022/06/12 9:00 AM (UTC) to 2022/06/13 9:00 AM (UTC): Final period with 200,000 LOOKS for Listing Rewards

2022/06/13 9:00 AM (UTC) to 2022/06/14 9:00 AM (UTC): First period with 100,000 LOOKS for Listing Rewards
:::

## What are the criteria for listings to earn points?

Users will receive Listing Reward points **every 10 minutes** for all items that they have listed for sale on LooksRare that meet these criteria:

- The listed NFT is from one of the top 15 eligible collections ranked by rolling 24 hour volume (ranking updates every 10 minutes)
- The listing is an active and executable order
- The listing price is **within 1.4x** of the global collection floor price (the lowest floor price on either OpenSea or LooksRare)
- Listings must be live for a minimum of 10 minutes in order to start accumulating points
- Listings must not expire within 1 hour of each snapshot in order to qualify for points for that snapshot

## Which collections are eligible?

In addition to the below criteria for individual listings, the collections must meet these criteria to be eligible for listing rewards.

- Total item count of 100,000 or fewer
- Greater than 0% royalties
- Conform to ERC-721 token standard. Unfortunately, ERC-1155s and other standards introduce too many complications in the calculation methodology.

Note: Collections identified to be artificially increasing trading volume for the sole purpose of increasing their collection volume rank will have their eligibility removed. The eligibility of creator portal contracts from various marketplaces has also been removed.

## When are points counted and distributed?

Users receive points every 10 minutes for listings that meet the criteria above.

Each day’s points will start being counted from 9:00 AM (UTC) and run for 144 snapshots every 10 minutes until 9:00 AM (UTC) the next day.

At the end of each day, each user’s total points balance will be used to determine their LOOKS rewards for that day. This is calculated as: (Alice’s total points for the day / All users' points for the day) \* Total LOOKS allocated for listing rewards.

Each day’s LOOKS rewards will be claimable at 11:00 AM (UTC), at the same time as the trading rewards claim.

## How are points calculated?

The amount of points that users will receive for each listing are relative to the floor multiple at the time of each snapshot. The formula is as follows:

- Listed price is ≤ 1.1x floor price = 10x points
- Listed price is > 1.1x but ≤ 1.2x floor price = 4x points
- Listed price is > 1.2x but ≤ 1.3x floor price = 2x points
- Listed price is > 1.3x but ≤ 1.4x floor price = 1x points

For example, if Azuki is the Rank 1 Collection by 24hr rolling volume (200 base points per listing) and the the floor price of Azuki is 30 ETH, a user that lists at 32 ETH will receive 2,000 points at each snapshot and a user that lists at 34 ETH will receive 800 points at each snapshot.

Every 10 minutes, LooksRare will update the collection leaderboard on the listing rewards page to show the Top 15 ranked eligible collections by rolling 24 hour global volume (OpenSea + LooksRare). The corresponding points per item listed in each collection will be applied based on the respective collection rank.

| Collections ranked by rolling 24 hour volume | Base Points per item listed at every 10 minute snapshot |
| -------------------------------------------- | ------------------------------------------------------- |
| Rank 1 Collection                            | 200                                                     |
| Rank 2 Collection                            | 150                                                     |
| Rank 3 Collection                            | 120                                                     |
| Rank 4 Collection                            | 100                                                     |
| Rank 5 Collection                            | 80                                                      |
| Rank 6 Collection                            | 70                                                      |
| Rank 7 Collection                            | 60                                                      |
| Rank 8 Collection                            | 50                                                      |
| Rank 9 Collection                            | 45                                                      |
| Rank 10 Collection                           | 40                                                      |
| Rank 11 Collection                           | 38                                                      |
| Rank 12 Collection                           | 36                                                      |
| Rank 13 Collection                           | 34                                                      |
| Rank 14 Collection                           | 32                                                      |
| Rank 15 Collection                           | 30                                                      |
| Rank ≥16 Collection                          | 0                                                       |

## Example

The Top 15 ranked ERC721 collections are listed on the [listing rewards](https://looksrare.org/rewards/trading) page. For the purposes of this example, the top 5 ranked projects by volume at **10:00 AM (UTC)** are listed below, and 100,000 LOOKS are allocated to daily listing rewards.

This means that at exactly 10:00 AM (UTC), each BAYC NFT listed at 150 ETH or below on LooksRare will earn their owners **200 points**.

| Rank | Collection           | 24 Hour Rolling Volume (ETH) | Current Floor Price (ETH) | Listing Price (ETH) to be eligible for points (≤1.4x floor) | Points per item listed at every 10 minute snapshot |
| ---- | -------------------- | ---------------------------- | ------------------------- | ----------------------------------------------------------- | -------------------------------------------------- |
| 1    | Bored Ape Yacht Club | 3,096                        | 100                       | ≤140                                                        | 200                                                |
| 2    | Azuki                | 2,390                        | 16                        | ≤22.4                                                       | 150                                                |
| 3    | Clone X              | 2,032                        | 14                        | ≤19.6                                                       | 120                                                |
| 4    | Doodles              | 1,066                        | 12                        | ≤16.8                                                       | 100                                                |
| 5    | Cool Cats            | 941                          | 10                        | ≤14                                                         | 80                                                 |
| 6    | ...                  | ...                          | ...                       | ...                                                         | ...                                                |

As an example if at 9:58 AM (UTC), Bob, a LooksRare user, listed 3 BAYC for 120 ETH, 2 Azuki for 25 ETH, and 10 Cool Cats for 11 ETH each, Bob would earn (3 x 200 x 4) + (10 x 80 x 10) = **10,400 points at the 10:00 AM (UTC) snapshot**. Note that the 2 Azukis did not earn points for this snapshot as they were listed above 1.4x floor price. Also note that the listed BAYC received a multiple boost of 4x points for being listed at 1.2x floor price, while the listed Cool Cats received a multiple boost of 10x points for being listed at 1.1x floor price.

If the floor price and volume rankings do not change for the **next 10 minutes**, Bob will earn **another** 10,400 points at the 10:10 AM (UTC) snapshot.

---

**At 11:00 AM (UTC)**, Bob decides to come back and check how his listing rewards are going. He notices that the rankings have changed due to some sales that occurred in the past hour. The Azuki collection has increased in volume to be the number 1 ranked collection and every listed Azuki within 1.4x of the floor price at this snapshot will now earn at least 200 points for their owners. Similarly, Cool Cats increased in volume to be rank #4 and owners will now earn at least 100 points for each listed Cool Cat. As both BAYC and Doodles were pushed down in rank, they will earn less per NFT listed in this snapshot.

| Rank | Collection           | 24 Hour Rolling Volume (ETH) | Current Floor Price (ETH) | Listing Price (ETH) to be eligible for points (≤1.4x floor) | Base Points per item listed at every 10 minute snapshot |
| ---- | -------------------- | ---------------------------- | ------------------------- | ----------------------------------------------------------- | ------------------------------------------------------- |
| 1    | **Azuki**            | 3,255                        | 18                        | ≤25.2                                                       | 200                                                     |
| 2    | Bored Ape Yacht Club | 3,096                        | 100                       | ≤140                                                        | 150                                                     |
| 3    | Clone X              | 2,032                        | 14                        | ≤19.6                                                       | 120                                                     |
| 4    | **Cool Cats**        | 1,120                        | 10                        | ≤14                                                         | 100                                                     |
| 5    | Doodles              | 1,066                        | 12                        | ≤16.8                                                       | 80                                                      |
| 6    | ...                  | ...                          | ...                       | ...                                                         | ...                                                     |

For the 11:00 AM (UTC) snapshot, Bob will receive (2 x 200 x 1) + (3 x 150 x 4) + (10 x 100 x 10) = **12,200 points**. Note that because the Azuki floor increased to 18 ETH at the time of this snapshot, Bob’s original listings of 25 ETH are now within the 1.4x floor price range, and will thus earn points at a 1x points multiple.

---

At **9:00 AM (UTC)** the next morning, Bob sees that he has accumulated a total of 150,000 points for the previous day, as well as 30,000,000 being the combined number of points from all users the previous day. Bob is now able to see that his rewards for the previous day are 500 LOOKS, calculated by (150,000 / 30,000,000) \* 100,000.
