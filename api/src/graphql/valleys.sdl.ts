import { valleys, valley } from 'src/services/valleys'

export const Query = {
  valley: (_obj, { unique_sample_number }) => valley(unique_sample_number),
}


export const schema = gql`
  type Valley {
    unique_sample_number: Int
    sample_id: String
    TEC: Float
    pH: Float
    EC: Float
    Sulfur: BigInt
    Phosphorus: BigInt
    Olsen_P: BigInt
    Calcium: BigInt
    Magnesium: BigInt
    Potassium: BigInt
    Sodium: BigInt
    Boron: Float
    Iron: BigInt
    Manganese: BigInt
    Copper: Float
    Zinc: Float
    Aluminum: BigInt
    Total_Carbon__: Float
    Total_Nitrogen__: Float
    C_N_Ratio: Float
  }






# this is where I am querying the database for everything
  type Query {
    valleys: [Valley!]! @requireAuth
    valley(unique_sample_number: Int): Valley @requireAuth
    # valley(pH: Float): Valley @requireAuth
  }









  type QueryvalleyArgs {
  unique_sample_number: Int
  }

  input CreateValleyInput {
    sample_id: String
    TEC: Float
    pH: Float
    EC: Float
    Sulfur: BigInt
    Phosphorus: BigInt
    Olsen_P: BigInt
    Calcium: BigInt
    Magnesium: BigInt
    Potassium: BigInt
    Sodium: BigInt
    Boron: Float
    Iron: BigInt
    Manganese: BigInt
    Copper: Float
    Zinc: Float
    Aluminum: BigInt
    Total_Carbon__: Float
    Total_Nitrogen__: Float
    C_N_Ratio: Float
  }

  input UpdateValleyInput {
    sample_id: String
    TEC: Float
    pH: Float
    EC: Float
    Sulfur: BigInt
    Phosphorus: BigInt
    Olsen_P: BigInt
    Calcium: BigInt
    Magnesium: BigInt
    Potassium: BigInt
    Sodium: BigInt
    Boron: Float
    Iron: BigInt
    Manganese: BigInt
    Copper: Float
    Zinc: Float
    Aluminum: BigInt
    Total_Carbon__: Float
    Total_Nitrogen__: Float
    C_N_Ratio: Float
  }

  type Mutation {
    createValley(input: CreateValleyInput!): Valley! @requireAuth
    updateValley(
      unique_sample_number: Int!
      input: UpdateValleyInput!
    ): Valley! @requireAuth
    deleteValley(unique_sample_number: Int!): Valley! @requireAuth
  }
`
export type QueryvalleyArgs = {}
