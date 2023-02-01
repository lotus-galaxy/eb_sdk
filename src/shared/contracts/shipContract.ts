const contract = {
  abi: [
    {
      inputs: [],
      name: 'InvalidConsiderationsAmount',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      name: 'OrderInvalid',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'enum TradeshipCrates.ItemType',
          name: '',
          type: 'uint8',
        },
      ],
      name: 'UnsupportedItemType',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'enum TradeshipCrates.OrderType',
          name: '',
          type: 'uint8',
        },
      ],
      name: 'UnsupportedOrderType',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'previousAdmin',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'newAdmin',
          type: 'address',
        },
      ],
      name: 'AdminChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'beacon',
          type: 'address',
        },
      ],
      name: 'BeaconUpgraded',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint8',
          name: 'version',
          type: 'uint8',
        },
      ],
      name: 'Initialized',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'orderHash',
          type: 'bytes32',
        },
      ],
      name: 'OrderCancelled',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'orderHash',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'filler',
          type: 'address',
        },
      ],
      name: 'OrderFilled',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'previousAdminRole',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'newAdminRole',
          type: 'bytes32',
        },
      ],
      name: 'RoleAdminChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
      ],
      name: 'RoleGranted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
      ],
      name: 'RoleRevoked',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'implementation',
          type: 'address',
        },
      ],
      name: 'Upgraded',
      type: 'event',
    },
    {
      inputs: [],
      name: 'DEFAULT_ADMIN_ROLE',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'expire',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'feeAmount',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'feeToken',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'filler',
              type: 'address',
            },
            {
              internalType: 'bytes[]',
              name: 'sigs',
              type: 'bytes[]',
            },
          ],
          internalType: 'struct TradeshipCrates.Approval',
          name: '_approval',
          type: 'tuple',
        },
      ],
      name: '_hashApproval',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'offerer',
              type: 'address',
            },
            {
              components: [
                {
                  internalType: 'enum TradeshipCrates.ItemType',
                  name: 'itemType',
                  type: 'uint8',
                },
                {
                  internalType: 'address',
                  name: 'token',
                  type: 'address',
                },
                {
                  internalType: 'uint256',
                  name: 'identifierOrCriteria',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'startAmount',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'endAmount',
                  type: 'uint256',
                },
              ],
              internalType: 'struct TradeshipCrates.OfferItem[]',
              name: 'offerings',
              type: 'tuple[]',
            },
            {
              components: [
                {
                  internalType: 'enum TradeshipCrates.ItemType',
                  name: 'itemType',
                  type: 'uint8',
                },
                {
                  internalType: 'address',
                  name: 'token',
                  type: 'address',
                },
                {
                  internalType: 'uint256',
                  name: 'identifierOrCriteria',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'startAmount',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'endAmount',
                  type: 'uint256',
                },
              ],
              internalType: 'struct TradeshipCrates.OfferItem[]',
              name: 'considerations',
              type: 'tuple[]',
            },
            {
              internalType: 'enum TradeshipCrates.OrderType',
              name: 'orderType',
              type: 'uint8',
            },
            {
              internalType: 'uint256',
              name: 'startAt',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'endAt',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'salt',
              type: 'uint256',
            },
          ],
          internalType: 'struct TradeshipCrates.Order',
          name: '_order',
          type: 'tuple',
        },
      ],
      name: '_hashOrder',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'offerer',
              type: 'address',
            },
            {
              components: [
                {
                  internalType: 'enum TradeshipCrates.ItemType',
                  name: 'itemType',
                  type: 'uint8',
                },
                {
                  internalType: 'address',
                  name: 'token',
                  type: 'address',
                },
                {
                  internalType: 'uint256',
                  name: 'identifierOrCriteria',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'startAmount',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'endAmount',
                  type: 'uint256',
                },
              ],
              internalType: 'struct TradeshipCrates.OfferItem[]',
              name: 'offerings',
              type: 'tuple[]',
            },
            {
              components: [
                {
                  internalType: 'enum TradeshipCrates.ItemType',
                  name: 'itemType',
                  type: 'uint8',
                },
                {
                  internalType: 'address',
                  name: 'token',
                  type: 'address',
                },
                {
                  internalType: 'uint256',
                  name: 'identifierOrCriteria',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'startAmount',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'endAmount',
                  type: 'uint256',
                },
              ],
              internalType: 'struct TradeshipCrates.OfferItem[]',
              name: 'considerations',
              type: 'tuple[]',
            },
            {
              internalType: 'enum TradeshipCrates.OrderType',
              name: 'orderType',
              type: 'uint8',
            },
            {
              internalType: 'uint256',
              name: 'startAt',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'endAt',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'salt',
              type: 'uint256',
            },
          ],
          internalType: 'struct TradeshipCrates.Order[]',
          name: '_orders',
          type: 'tuple[]',
        },
      ],
      name: 'cancelOrders',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'domainSeparator',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: 'address',
              name: 'offerer',
              type: 'address',
            },
            {
              components: [
                {
                  internalType: 'enum TradeshipCrates.ItemType',
                  name: 'itemType',
                  type: 'uint8',
                },
                {
                  internalType: 'address',
                  name: 'token',
                  type: 'address',
                },
                {
                  internalType: 'uint256',
                  name: 'identifierOrCriteria',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'startAmount',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'endAmount',
                  type: 'uint256',
                },
              ],
              internalType: 'struct TradeshipCrates.OfferItem[]',
              name: 'offerings',
              type: 'tuple[]',
            },
            {
              components: [
                {
                  internalType: 'enum TradeshipCrates.ItemType',
                  name: 'itemType',
                  type: 'uint8',
                },
                {
                  internalType: 'address',
                  name: 'token',
                  type: 'address',
                },
                {
                  internalType: 'uint256',
                  name: 'identifierOrCriteria',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'startAmount',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'endAmount',
                  type: 'uint256',
                },
              ],
              internalType: 'struct TradeshipCrates.OfferItem[]',
              name: 'considerations',
              type: 'tuple[]',
            },
            {
              internalType: 'enum TradeshipCrates.OrderType',
              name: 'orderType',
              type: 'uint8',
            },
            {
              internalType: 'uint256',
              name: 'startAt',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'endAt',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'salt',
              type: 'uint256',
            },
          ],
          internalType: 'struct TradeshipCrates.Order[]',
          name: '_orders',
          type: 'tuple[]',
        },
        {
          components: [
            {
              internalType: 'uint256',
              name: 'expire',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'feeAmount',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'feeToken',
              type: 'address',
            },
            {
              internalType: 'address',
              name: 'filler',
              type: 'address',
            },
            {
              internalType: 'bytes[]',
              name: 'sigs',
              type: 'bytes[]',
            },
          ],
          internalType: 'struct TradeshipCrates.Approval',
          name: '_approval',
          type: 'tuple',
        },
        {
          internalType: 'bytes',
          name: '_serverSig',
          type: 'bytes',
        },
      ],
      name: 'fillOrders',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
      ],
      name: 'getRoleAdmin',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'grantRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'hasRole',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address payable',
          name: '_port',
          type: 'address',
        },
        {
          internalType: 'address payable',
          name: '_stakerAddress',
          type: 'address',
        },
      ],
      name: 'initialize',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'portContract',
      outputs: [
        {
          internalType: 'contract IPort',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'proxiableUUID',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'renounceRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'revokeRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'stakerAddress',
      outputs: [
        {
          internalType: 'address payable',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes4',
          name: 'interfaceId',
          type: 'bytes4',
        },
      ],
      name: 'supportsInterface',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newImplementation',
          type: 'address',
        },
      ],
      name: 'upgradeTo',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newImplementation',
          type: 'address',
        },
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
      ],
      name: 'upgradeToAndCall',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
  ],
};

export default contract;
