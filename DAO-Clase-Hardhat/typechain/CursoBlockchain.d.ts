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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface CursoBlockchainInterface extends ethers.utils.Interface {
  functions: {
    "calificarAlumno(address,uint16)": FunctionFragment;
    "calificarAlumnoM(address,uint16)": FunctionFragment;
    "certificadoNFT()": FunctionFragment;
    "checkIfAlumnoExists(address)": FunctionFragment;
    "checkIfAlumnoExistsM(address)": FunctionFragment;
    "claimMoney()": FunctionFragment;
    "consultarCalificacion(address)": FunctionFragment;
    "consultarCalificacionM(address)": FunctionFragment;
    "consultarMiCalificacion()": FunctionFragment;
    "editAddressAlumno(address,address)": FunctionFragment;
    "editAlumnoAddress(uint8,address)": FunctionFragment;
    "eliminarAlumno(address)": FunctionFragment;
    "entryReward()": FunctionFragment;
    "findAlumnoPosition(address)": FunctionFragment;
    "getAlumnoByOrden(uint8)": FunctionFragment;
    "getAlumnos()": FunctionFragment;
    "getNumAlumnos()": FunctionFragment;
    "getNumAlumnosM()": FunctionFragment;
    "listaAlumnos(uint256)": FunctionFragment;
    "maxAlumnos()": FunctionFragment;
    "moneda()": FunctionFragment;
    "numAlumnos()": FunctionFragment;
    "owner()": FunctionFragment;
    "profesor()": FunctionFragment;
    "registroAlumno()": FunctionFragment;
    "registroAlumnoM(string)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setEntryReward(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "calificarAlumno",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calificarAlumnoM",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "certificadoNFT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "checkIfAlumnoExists",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "checkIfAlumnoExistsM",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimMoney",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "consultarCalificacion",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "consultarCalificacionM",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "consultarMiCalificacion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "editAddressAlumno",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "editAlumnoAddress",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "eliminarAlumno",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "entryReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "findAlumnoPosition",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAlumnoByOrden",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAlumnos",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNumAlumnos",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNumAlumnosM",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "listaAlumnos",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "maxAlumnos",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "moneda", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "numAlumnos",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "profesor", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "registroAlumno",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "registroAlumnoM",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setEntryReward",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "calificarAlumno",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calificarAlumnoM",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "certificadoNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkIfAlumnoExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkIfAlumnoExistsM",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimMoney", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "consultarCalificacion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "consultarCalificacionM",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "consultarMiCalificacion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "editAddressAlumno",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "editAlumnoAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "eliminarAlumno",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "entryReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "findAlumnoPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAlumnoByOrden",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAlumnos", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getNumAlumnos",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNumAlumnosM",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "listaAlumnos",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maxAlumnos", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "moneda", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "numAlumnos", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "profesor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registroAlumno",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registroAlumnoM",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEntryReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export class CursoBlockchain extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: CursoBlockchainInterface;

  functions: {
    calificarAlumno(
      alumno: string,
      nota: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    calificarAlumnoM(
      alumno: string,
      nota: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    certificadoNFT(overrides?: CallOverrides): Promise<[string]>;

    checkIfAlumnoExists(
      alumno: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    checkIfAlumnoExistsM(
      alumnoAddr: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    claimMoney(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    consultarCalificacion(
      alumno: string,
      overrides?: CallOverrides
    ): Promise<[number]>;

    consultarCalificacionM(
      alumno: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    consultarMiCalificacion(overrides?: CallOverrides): Promise<[number]>;

    editAddressAlumno(
      oldAddr: string,
      newAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    editAlumnoAddress(
      position: BigNumberish,
      newValue: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    eliminarAlumno(
      alumno: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    entryReward(overrides?: CallOverrides): Promise<[BigNumber]>;

    findAlumnoPosition(
      alumno: string,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getAlumnoByOrden(
      position: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getAlumnos(overrides?: CallOverrides): Promise<[string[]]>;

    getNumAlumnos(overrides?: CallOverrides): Promise<[BigNumber]>;

    getNumAlumnosM(overrides?: CallOverrides): Promise<[BigNumber]>;

    listaAlumnos(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    maxAlumnos(overrides?: CallOverrides): Promise<[number]>;

    moneda(overrides?: CallOverrides): Promise<[string]>;

    numAlumnos(overrides?: CallOverrides): Promise<[number]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    profesor(overrides?: CallOverrides): Promise<[string]>;

    registroAlumno(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registroAlumnoM(
      nick: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setEntryReward(
      newEntryReward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  calificarAlumno(
    alumno: string,
    nota: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  calificarAlumnoM(
    alumno: string,
    nota: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  certificadoNFT(overrides?: CallOverrides): Promise<string>;

  checkIfAlumnoExists(
    alumno: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  checkIfAlumnoExistsM(
    alumnoAddr: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  claimMoney(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  consultarCalificacion(
    alumno: string,
    overrides?: CallOverrides
  ): Promise<number>;

  consultarCalificacionM(
    alumno: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  consultarMiCalificacion(overrides?: CallOverrides): Promise<number>;

  editAddressAlumno(
    oldAddr: string,
    newAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  editAlumnoAddress(
    position: BigNumberish,
    newValue: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  eliminarAlumno(
    alumno: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  entryReward(overrides?: CallOverrides): Promise<BigNumber>;

  findAlumnoPosition(
    alumno: string,
    overrides?: CallOverrides
  ): Promise<number>;

  getAlumnoByOrden(
    position: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getAlumnos(overrides?: CallOverrides): Promise<string[]>;

  getNumAlumnos(overrides?: CallOverrides): Promise<BigNumber>;

  getNumAlumnosM(overrides?: CallOverrides): Promise<BigNumber>;

  listaAlumnos(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  maxAlumnos(overrides?: CallOverrides): Promise<number>;

  moneda(overrides?: CallOverrides): Promise<string>;

  numAlumnos(overrides?: CallOverrides): Promise<number>;

  owner(overrides?: CallOverrides): Promise<string>;

  profesor(overrides?: CallOverrides): Promise<string>;

  registroAlumno(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registroAlumnoM(
    nick: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setEntryReward(
    newEntryReward: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    calificarAlumno(
      alumno: string,
      nota: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    calificarAlumnoM(
      alumno: string,
      nota: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    certificadoNFT(overrides?: CallOverrides): Promise<string>;

    checkIfAlumnoExists(
      alumno: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    checkIfAlumnoExistsM(
      alumnoAddr: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    claimMoney(overrides?: CallOverrides): Promise<boolean>;

    consultarCalificacion(
      alumno: string,
      overrides?: CallOverrides
    ): Promise<number>;

    consultarCalificacionM(
      alumno: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    consultarMiCalificacion(overrides?: CallOverrides): Promise<number>;

    editAddressAlumno(
      oldAddr: string,
      newAddr: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    editAlumnoAddress(
      position: BigNumberish,
      newValue: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    eliminarAlumno(alumno: string, overrides?: CallOverrides): Promise<boolean>;

    entryReward(overrides?: CallOverrides): Promise<BigNumber>;

    findAlumnoPosition(
      alumno: string,
      overrides?: CallOverrides
    ): Promise<number>;

    getAlumnoByOrden(
      position: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getAlumnos(overrides?: CallOverrides): Promise<string[]>;

    getNumAlumnos(overrides?: CallOverrides): Promise<BigNumber>;

    getNumAlumnosM(overrides?: CallOverrides): Promise<BigNumber>;

    listaAlumnos(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    maxAlumnos(overrides?: CallOverrides): Promise<number>;

    moneda(overrides?: CallOverrides): Promise<string>;

    numAlumnos(overrides?: CallOverrides): Promise<number>;

    owner(overrides?: CallOverrides): Promise<string>;

    profesor(overrides?: CallOverrides): Promise<string>;

    registroAlumno(overrides?: CallOverrides): Promise<boolean>;

    registroAlumnoM(nick: string, overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setEntryReward(
      newEntryReward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;
  };

  estimateGas: {
    calificarAlumno(
      alumno: string,
      nota: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    calificarAlumnoM(
      alumno: string,
      nota: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    certificadoNFT(overrides?: CallOverrides): Promise<BigNumber>;

    checkIfAlumnoExists(
      alumno: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkIfAlumnoExistsM(
      alumnoAddr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimMoney(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    consultarCalificacion(
      alumno: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    consultarCalificacionM(
      alumno: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    consultarMiCalificacion(overrides?: CallOverrides): Promise<BigNumber>;

    editAddressAlumno(
      oldAddr: string,
      newAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    editAlumnoAddress(
      position: BigNumberish,
      newValue: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    eliminarAlumno(
      alumno: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    entryReward(overrides?: CallOverrides): Promise<BigNumber>;

    findAlumnoPosition(
      alumno: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAlumnoByOrden(
      position: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAlumnos(overrides?: CallOverrides): Promise<BigNumber>;

    getNumAlumnos(overrides?: CallOverrides): Promise<BigNumber>;

    getNumAlumnosM(overrides?: CallOverrides): Promise<BigNumber>;

    listaAlumnos(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxAlumnos(overrides?: CallOverrides): Promise<BigNumber>;

    moneda(overrides?: CallOverrides): Promise<BigNumber>;

    numAlumnos(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    profesor(overrides?: CallOverrides): Promise<BigNumber>;

    registroAlumno(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registroAlumnoM(
      nick: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setEntryReward(
      newEntryReward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    calificarAlumno(
      alumno: string,
      nota: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    calificarAlumnoM(
      alumno: string,
      nota: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    certificadoNFT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    checkIfAlumnoExists(
      alumno: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkIfAlumnoExistsM(
      alumnoAddr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimMoney(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    consultarCalificacion(
      alumno: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    consultarCalificacionM(
      alumno: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    consultarMiCalificacion(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    editAddressAlumno(
      oldAddr: string,
      newAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    editAlumnoAddress(
      position: BigNumberish,
      newValue: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    eliminarAlumno(
      alumno: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    entryReward(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    findAlumnoPosition(
      alumno: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAlumnoByOrden(
      position: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAlumnos(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNumAlumnos(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getNumAlumnosM(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    listaAlumnos(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxAlumnos(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    moneda(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numAlumnos(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    profesor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registroAlumno(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registroAlumnoM(
      nick: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setEntryReward(
      newEntryReward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
