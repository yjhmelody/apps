// Copyright 2017-2020 @polkadot/app-bounties authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BountyIndex } from '@polkadot/types/interfaces';

import { useMemo } from 'react';

import { useApi, useCall } from '@polkadot/react-hooks';

export default function useCounter (): number {
  const { api, isApiReady } = useApi();
  const bounties = useCall<BountyIndex>(isApiReady && (api.query.bounties || api.query.treasury)?.bountyCount);

  return useMemo(
    () => bounties?.toNumber() || 0,
    [bounties]
  );
}
