// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

// structs need to be in order
/* eslint-disable sort-keys */
/* eslint-disable camelcase */

export default {
  Address: 'MultiAddress',
  LookupSource: 'MultiAddress',
  CeremonyPhaseType: {
    _enum: [
      'Registering',
      'Assigning',
      'Attesting'
    ]
  },
  CeremonyIndexType: 'u32',
  CurrencyIdentifier: 'Hash',
  CurrencyCeremony: {
    cid: 'CurrencyIdentifier',
    cindex: 'CeremonyIndexType'
  },
  Location: {
    lat: 'i64',
    lon: 'i64'
  },
  CurrencyPropertiesType: {
    name_utf8: 'Text',
    demurrage_per_block: 'i128'
  },
  ShardIdentifier: 'Hash',
  Request: {
    shard: 'ShardIdentifier',
    cyphertext: 'Vec<u8>'
  },
  Enclave: {
    pubkey: 'AccountId',
    mrenclave: 'Hash',
    timestamp: 'u64',
    url: 'Text'
  }
};
