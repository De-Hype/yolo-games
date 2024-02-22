import { gql } from "@apollo/client";

export const LOAD_USERS_DATA = gql`
  query {
    diceOutcomes {
      id
      wager
      playerAddress
      tokenAddress
      createdAt
      numGames
      payouts
      multiplier
      isOver
      diceGameOutcomes
    }
    coinFlipOutcomes {
      id
      playerAddress: playerAddress
      wager
      createdAt
      tokenAddress
      payout
      coinflipGameOutcomes
      payouts
      numGames
    }
  }
`;
