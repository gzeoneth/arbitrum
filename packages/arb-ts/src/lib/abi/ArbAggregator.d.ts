/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from 'ethers'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'
import type { TypedEventFilter, TypedEvent, TypedListener } from './common'

interface ArbAggregatorInterface extends ethers.utils.Interface {
  functions: {
    'getDefaultAggregator()': FunctionFragment
    'getFeeCollector(address)': FunctionFragment
    'getPreferredAggregator(address)': FunctionFragment
    'getTxBaseFee(address)': FunctionFragment
    'setDefaultAggregator(address)': FunctionFragment
    'setFeeCollector(address,address)': FunctionFragment
    'setPreferredAggregator(address)': FunctionFragment
    'setTxBaseFee(address,uint256)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'getDefaultAggregator',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'getFeeCollector',
    values: [string]
  ): string
  encodeFunctionData(
    functionFragment: 'getPreferredAggregator',
    values: [string]
  ): string
  encodeFunctionData(functionFragment: 'getTxBaseFee', values: [string]): string
  encodeFunctionData(
    functionFragment: 'setDefaultAggregator',
    values: [string]
  ): string
  encodeFunctionData(
    functionFragment: 'setFeeCollector',
    values: [string, string]
  ): string
  encodeFunctionData(
    functionFragment: 'setPreferredAggregator',
    values: [string]
  ): string
  encodeFunctionData(
    functionFragment: 'setTxBaseFee',
    values: [string, BigNumberish]
  ): string

  decodeFunctionResult(
    functionFragment: 'getDefaultAggregator',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'getFeeCollector',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'getPreferredAggregator',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'getTxBaseFee',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'setDefaultAggregator',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'setFeeCollector',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'setPreferredAggregator',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'setTxBaseFee',
    data: BytesLike
  ): Result

  events: {}
}

export class ArbAggregator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this

  listeners(eventName?: string): Array<Listener>
  off(eventName: string, listener: Listener): this
  on(eventName: string, listener: Listener): this
  once(eventName: string, listener: Listener): this
  removeListener(eventName: string, listener: Listener): this
  removeAllListeners(eventName?: string): this

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>

  interface: ArbAggregatorInterface

  functions: {
    getDefaultAggregator(overrides?: CallOverrides): Promise<[string]>

    getFeeCollector(
      aggregator: string,
      overrides?: CallOverrides
    ): Promise<[string]>

    getPreferredAggregator(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[string, boolean]>

    getTxBaseFee(
      aggregator: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>

    setDefaultAggregator(
      newDefault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setFeeCollector(
      aggregator: string,
      newFeeCollector: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setPreferredAggregator(
      prefAgg: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    setTxBaseFee(
      aggregator: string,
      feeInL1Gas: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>
  }

  getDefaultAggregator(overrides?: CallOverrides): Promise<string>

  getFeeCollector(
    aggregator: string,
    overrides?: CallOverrides
  ): Promise<string>

  getPreferredAggregator(
    addr: string,
    overrides?: CallOverrides
  ): Promise<[string, boolean]>

  getTxBaseFee(
    aggregator: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>

  setDefaultAggregator(
    newDefault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  setFeeCollector(
    aggregator: string,
    newFeeCollector: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  setPreferredAggregator(
    prefAgg: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  setTxBaseFee(
    aggregator: string,
    feeInL1Gas: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  callStatic: {
    getDefaultAggregator(overrides?: CallOverrides): Promise<string>

    getFeeCollector(
      aggregator: string,
      overrides?: CallOverrides
    ): Promise<string>

    getPreferredAggregator(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[string, boolean]>

    getTxBaseFee(
      aggregator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    setDefaultAggregator(
      newDefault: string,
      overrides?: CallOverrides
    ): Promise<void>

    setFeeCollector(
      aggregator: string,
      newFeeCollector: string,
      overrides?: CallOverrides
    ): Promise<void>

    setPreferredAggregator(
      prefAgg: string,
      overrides?: CallOverrides
    ): Promise<void>

    setTxBaseFee(
      aggregator: string,
      feeInL1Gas: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>
  }

  filters: {}

  estimateGas: {
    getDefaultAggregator(overrides?: CallOverrides): Promise<BigNumber>

    getFeeCollector(
      aggregator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getPreferredAggregator(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getTxBaseFee(
      aggregator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    setDefaultAggregator(
      newDefault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    setFeeCollector(
      aggregator: string,
      newFeeCollector: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    setPreferredAggregator(
      prefAgg: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    setTxBaseFee(
      aggregator: string,
      feeInL1Gas: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>
  }

  populateTransaction: {
    getDefaultAggregator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getFeeCollector(
      aggregator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getPreferredAggregator(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getTxBaseFee(
      aggregator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    setDefaultAggregator(
      newDefault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setFeeCollector(
      aggregator: string,
      newFeeCollector: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setPreferredAggregator(
      prefAgg: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    setTxBaseFee(
      aggregator: string,
      feeInL1Gas: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>
  }
}
