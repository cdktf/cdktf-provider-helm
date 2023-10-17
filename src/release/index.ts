/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReleaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#atomic Release#atomic}
  */
  readonly atomic?: boolean | cdktf.IResolvable;
  /**
  * Chart name to be installed. A path may be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#chart Release#chart}
  */
  readonly chart: string;
  /**
  * Allow deletion of new resources created in this upgrade when upgrade fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#cleanup_on_fail Release#cleanup_on_fail}
  */
  readonly cleanupOnFail?: boolean | cdktf.IResolvable;
  /**
  * Create the namespace if it does not exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#create_namespace Release#create_namespace}
  */
  readonly createNamespace?: boolean | cdktf.IResolvable;
  /**
  * Run helm dependency update before installing the chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#dependency_update Release#dependency_update}
  */
  readonly dependencyUpdate?: boolean | cdktf.IResolvable;
  /**
  * Add a custom description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#description Release#description}
  */
  readonly description?: string;
  /**
  * Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#devel Release#devel}
  */
  readonly devel?: boolean | cdktf.IResolvable;
  /**
  * Prevent CRD hooks from, running, but run other hooks.  See helm install --no-crd-hook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#disable_crd_hooks Release#disable_crd_hooks}
  */
  readonly disableCrdHooks?: boolean | cdktf.IResolvable;
  /**
  * If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#disable_openapi_validation Release#disable_openapi_validation}
  */
  readonly disableOpenapiValidation?: boolean | cdktf.IResolvable;
  /**
  * Prevent hooks from running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#disable_webhooks Release#disable_webhooks}
  */
  readonly disableWebhooks?: boolean | cdktf.IResolvable;
  /**
  * Force resource update through delete/recreate if needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#force_update Release#force_update}
  */
  readonly forceUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#id Release#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Location of public keys used for verification. Used only if `verify` is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#keyring Release#keyring}
  */
  readonly keyring?: string;
  /**
  * Run helm lint when planning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#lint Release#lint}
  */
  readonly lint?: boolean | cdktf.IResolvable;
  /**
  * Limit the maximum number of revisions saved per release. Use 0 for no limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#max_history Release#max_history}
  */
  readonly maxHistory?: number;
  /**
  * Release name. The length must not be longer than 53 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#name Release#name}
  */
  readonly name: string;
  /**
  * Namespace to install the release into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#namespace Release#namespace}
  */
  readonly namespace?: string;
  /**
  * Pass credentials to all domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#pass_credentials Release#pass_credentials}
  */
  readonly passCredentials?: boolean | cdktf.IResolvable;
  /**
  * Perform pods restart during upgrade/rollback
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#recreate_pods Release#recreate_pods}
  */
  readonly recreatePods?: boolean | cdktf.IResolvable;
  /**
  * If set, render subchart notes along with the parent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#render_subchart_notes Release#render_subchart_notes}
  */
  readonly renderSubchartNotes?: boolean | cdktf.IResolvable;
  /**
  * Re-use the given name, even if that name is already used. This is unsafe in production
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#replace Release#replace}
  */
  readonly replace?: boolean | cdktf.IResolvable;
  /**
  * Repository where to locate the requested chart. If is a URL the chart is installed without installing the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#repository Release#repository}
  */
  readonly repository?: string;
  /**
  * The Repositories CA File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#repository_ca_file Release#repository_ca_file}
  */
  readonly repositoryCaFile?: string;
  /**
  * The repositories cert file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#repository_cert_file Release#repository_cert_file}
  */
  readonly repositoryCertFile?: string;
  /**
  * The repositories cert key file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#repository_key_file Release#repository_key_file}
  */
  readonly repositoryKeyFile?: string;
  /**
  * Password for HTTP basic authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#repository_password Release#repository_password}
  */
  readonly repositoryPassword?: string;
  /**
  * Username for HTTP basic authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#repository_username Release#repository_username}
  */
  readonly repositoryUsername?: string;
  /**
  * When upgrading, reset the values to the ones built into the chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#reset_values Release#reset_values}
  */
  readonly resetValues?: boolean | cdktf.IResolvable;
  /**
  * When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#reuse_values Release#reuse_values}
  */
  readonly reuseValues?: boolean | cdktf.IResolvable;
  /**
  * If set, no CRDs will be installed. By default, CRDs are installed if not already present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#skip_crds Release#skip_crds}
  */
  readonly skipCrds?: boolean | cdktf.IResolvable;
  /**
  * Time in seconds to wait for any individual kubernetes operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#timeout Release#timeout}
  */
  readonly timeout?: number;
  /**
  * List of values in raw yaml format to pass to helm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#values Release#values}
  */
  readonly values?: string[];
  /**
  * Verify the package before installing it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#verify Release#verify}
  */
  readonly verify?: boolean | cdktf.IResolvable;
  /**
  * Specify the exact chart version to install. If this is not specified, the latest version is installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#version Release#version}
  */
  readonly version?: string;
  /**
  * Will wait until all resources are in a ready state before marking the release as successful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#wait Release#wait}
  */
  readonly wait?: boolean | cdktf.IResolvable;
  /**
  * If wait is enabled, will wait until all Jobs have been completed before marking the release as successful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#wait_for_jobs Release#wait_for_jobs}
  */
  readonly waitForJobs?: boolean | cdktf.IResolvable;
  /**
  * postrender block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#postrender Release#postrender}
  */
  readonly postrender?: ReleasePostrender;
  /**
  * set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#set Release#set}
  */
  readonly set?: ReleaseSet[] | cdktf.IResolvable;
  /**
  * set_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#set_list Release#set_list}
  */
  readonly setList?: ReleaseSetListStruct[] | cdktf.IResolvable;
  /**
  * set_sensitive block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#set_sensitive Release#set_sensitive}
  */
  readonly setSensitive?: ReleaseSetSensitive[] | cdktf.IResolvable;
}
export interface ReleaseMetadata {
}

export function releaseMetadataToTerraform(struct?: ReleaseMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class ReleaseMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ReleaseMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_version - computed: true, optional: false, required: false
  public get appVersion() {
    return this.getStringAttribute('app_version');
  }

  // chart - computed: true, optional: false, required: false
  public get chart() {
    return this.getStringAttribute('chart');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getStringAttribute('values');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class ReleaseMetadataList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ReleaseMetadataOutputReference {
    return new ReleaseMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReleasePostrender {
  /**
  * an argument to the post-renderer (can specify multiple)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#args Release#args}
  */
  readonly args?: string[];
  /**
  * The command binary path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#binary_path Release#binary_path}
  */
  readonly binaryPath: string;
}

export function releasePostrenderToTerraform(struct?: ReleasePostrenderOutputReference | ReleasePostrender): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    binary_path: cdktf.stringToTerraform(struct!.binaryPath),
  }
}

export class ReleasePostrenderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReleasePostrender | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._binaryPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryPath = this._binaryPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleasePostrender | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._binaryPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._binaryPath = value.binaryPath;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // binary_path - computed: false, optional: false, required: true
  private _binaryPath?: string; 
  public get binaryPath() {
    return this.getStringAttribute('binary_path');
  }
  public set binaryPath(value: string) {
    this._binaryPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryPathInput() {
    return this._binaryPath;
  }
}
export interface ReleaseSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#name Release#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#type Release#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#value Release#value}
  */
  readonly value: string;
}

export function releaseSetToTerraform(struct?: ReleaseSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class ReleaseSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ReleaseSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ReleaseSetList extends cdktf.ComplexList {
  public internalValue? : ReleaseSet[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ReleaseSetOutputReference {
    return new ReleaseSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReleaseSetListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#name Release#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#value Release#value}
  */
  readonly value: string[];
}

export function releaseSetListStructToTerraform(struct?: ReleaseSetListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}

export class ReleaseSetListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ReleaseSetListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseSetListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ReleaseSetListStructList extends cdktf.ComplexList {
  public internalValue? : ReleaseSetListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ReleaseSetListStructOutputReference {
    return new ReleaseSetListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReleaseSetSensitive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#name Release#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#type Release#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#value Release#value}
  */
  readonly value: string;
}

export function releaseSetSensitiveToTerraform(struct?: ReleaseSetSensitive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class ReleaseSetSensitiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ReleaseSetSensitive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReleaseSetSensitive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ReleaseSetSensitiveList extends cdktf.ComplexList {
  public internalValue? : ReleaseSetSensitive[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ReleaseSetSensitiveOutputReference {
    return new ReleaseSetSensitiveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release helm_release}
*/
export class Release extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "helm_release";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Release resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Release to import
  * @param importFromId The id of the existing Release that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Release to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "helm_release", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs/resources/release helm_release} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReleaseConfig
  */
  public constructor(scope: Construct, id: string, config: ReleaseConfig) {
    super(scope, id, {
      terraformResourceType: 'helm_release',
      terraformGeneratorMetadata: {
        providerName: 'helm',
        providerVersion: '2.11.0',
        providerVersionConstraint: '~> 2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._atomic = config.atomic;
    this._chart = config.chart;
    this._cleanupOnFail = config.cleanupOnFail;
    this._createNamespace = config.createNamespace;
    this._dependencyUpdate = config.dependencyUpdate;
    this._description = config.description;
    this._devel = config.devel;
    this._disableCrdHooks = config.disableCrdHooks;
    this._disableOpenapiValidation = config.disableOpenapiValidation;
    this._disableWebhooks = config.disableWebhooks;
    this._forceUpdate = config.forceUpdate;
    this._id = config.id;
    this._keyring = config.keyring;
    this._lint = config.lint;
    this._maxHistory = config.maxHistory;
    this._name = config.name;
    this._namespace = config.namespace;
    this._passCredentials = config.passCredentials;
    this._recreatePods = config.recreatePods;
    this._renderSubchartNotes = config.renderSubchartNotes;
    this._replace = config.replace;
    this._repository = config.repository;
    this._repositoryCaFile = config.repositoryCaFile;
    this._repositoryCertFile = config.repositoryCertFile;
    this._repositoryKeyFile = config.repositoryKeyFile;
    this._repositoryPassword = config.repositoryPassword;
    this._repositoryUsername = config.repositoryUsername;
    this._resetValues = config.resetValues;
    this._reuseValues = config.reuseValues;
    this._skipCrds = config.skipCrds;
    this._timeout = config.timeout;
    this._values = config.values;
    this._verify = config.verify;
    this._version = config.version;
    this._wait = config.wait;
    this._waitForJobs = config.waitForJobs;
    this._postrender.internalValue = config.postrender;
    this._set.internalValue = config.set;
    this._setList.internalValue = config.setList;
    this._setSensitive.internalValue = config.setSensitive;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // atomic - computed: false, optional: true, required: false
  private _atomic?: boolean | cdktf.IResolvable; 
  public get atomic() {
    return this.getBooleanAttribute('atomic');
  }
  public set atomic(value: boolean | cdktf.IResolvable) {
    this._atomic = value;
  }
  public resetAtomic() {
    this._atomic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atomicInput() {
    return this._atomic;
  }

  // chart - computed: false, optional: false, required: true
  private _chart?: string; 
  public get chart() {
    return this.getStringAttribute('chart');
  }
  public set chart(value: string) {
    this._chart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chartInput() {
    return this._chart;
  }

  // cleanup_on_fail - computed: false, optional: true, required: false
  private _cleanupOnFail?: boolean | cdktf.IResolvable; 
  public get cleanupOnFail() {
    return this.getBooleanAttribute('cleanup_on_fail');
  }
  public set cleanupOnFail(value: boolean | cdktf.IResolvable) {
    this._cleanupOnFail = value;
  }
  public resetCleanupOnFail() {
    this._cleanupOnFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupOnFailInput() {
    return this._cleanupOnFail;
  }

  // create_namespace - computed: false, optional: true, required: false
  private _createNamespace?: boolean | cdktf.IResolvable; 
  public get createNamespace() {
    return this.getBooleanAttribute('create_namespace');
  }
  public set createNamespace(value: boolean | cdktf.IResolvable) {
    this._createNamespace = value;
  }
  public resetCreateNamespace() {
    this._createNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createNamespaceInput() {
    return this._createNamespace;
  }

  // dependency_update - computed: false, optional: true, required: false
  private _dependencyUpdate?: boolean | cdktf.IResolvable; 
  public get dependencyUpdate() {
    return this.getBooleanAttribute('dependency_update');
  }
  public set dependencyUpdate(value: boolean | cdktf.IResolvable) {
    this._dependencyUpdate = value;
  }
  public resetDependencyUpdate() {
    this._dependencyUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyUpdateInput() {
    return this._dependencyUpdate;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // devel - computed: false, optional: true, required: false
  private _devel?: boolean | cdktf.IResolvable; 
  public get devel() {
    return this.getBooleanAttribute('devel');
  }
  public set devel(value: boolean | cdktf.IResolvable) {
    this._devel = value;
  }
  public resetDevel() {
    this._devel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get develInput() {
    return this._devel;
  }

  // disable_crd_hooks - computed: false, optional: true, required: false
  private _disableCrdHooks?: boolean | cdktf.IResolvable; 
  public get disableCrdHooks() {
    return this.getBooleanAttribute('disable_crd_hooks');
  }
  public set disableCrdHooks(value: boolean | cdktf.IResolvable) {
    this._disableCrdHooks = value;
  }
  public resetDisableCrdHooks() {
    this._disableCrdHooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCrdHooksInput() {
    return this._disableCrdHooks;
  }

  // disable_openapi_validation - computed: false, optional: true, required: false
  private _disableOpenapiValidation?: boolean | cdktf.IResolvable; 
  public get disableOpenapiValidation() {
    return this.getBooleanAttribute('disable_openapi_validation');
  }
  public set disableOpenapiValidation(value: boolean | cdktf.IResolvable) {
    this._disableOpenapiValidation = value;
  }
  public resetDisableOpenapiValidation() {
    this._disableOpenapiValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOpenapiValidationInput() {
    return this._disableOpenapiValidation;
  }

  // disable_webhooks - computed: false, optional: true, required: false
  private _disableWebhooks?: boolean | cdktf.IResolvable; 
  public get disableWebhooks() {
    return this.getBooleanAttribute('disable_webhooks');
  }
  public set disableWebhooks(value: boolean | cdktf.IResolvable) {
    this._disableWebhooks = value;
  }
  public resetDisableWebhooks() {
    this._disableWebhooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWebhooksInput() {
    return this._disableWebhooks;
  }

  // force_update - computed: false, optional: true, required: false
  private _forceUpdate?: boolean | cdktf.IResolvable; 
  public get forceUpdate() {
    return this.getBooleanAttribute('force_update');
  }
  public set forceUpdate(value: boolean | cdktf.IResolvable) {
    this._forceUpdate = value;
  }
  public resetForceUpdate() {
    this._forceUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpdateInput() {
    return this._forceUpdate;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // keyring - computed: false, optional: true, required: false
  private _keyring?: string; 
  public get keyring() {
    return this.getStringAttribute('keyring');
  }
  public set keyring(value: string) {
    this._keyring = value;
  }
  public resetKeyring() {
    this._keyring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyringInput() {
    return this._keyring;
  }

  // lint - computed: false, optional: true, required: false
  private _lint?: boolean | cdktf.IResolvable; 
  public get lint() {
    return this.getBooleanAttribute('lint');
  }
  public set lint(value: boolean | cdktf.IResolvable) {
    this._lint = value;
  }
  public resetLint() {
    this._lint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lintInput() {
    return this._lint;
  }

  // manifest - computed: true, optional: false, required: false
  public get manifest() {
    return this.getStringAttribute('manifest');
  }

  // max_history - computed: false, optional: true, required: false
  private _maxHistory?: number; 
  public get maxHistory() {
    return this.getNumberAttribute('max_history');
  }
  public set maxHistory(value: number) {
    this._maxHistory = value;
  }
  public resetMaxHistory() {
    this._maxHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHistoryInput() {
    return this._maxHistory;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new ReleaseMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // pass_credentials - computed: false, optional: true, required: false
  private _passCredentials?: boolean | cdktf.IResolvable; 
  public get passCredentials() {
    return this.getBooleanAttribute('pass_credentials');
  }
  public set passCredentials(value: boolean | cdktf.IResolvable) {
    this._passCredentials = value;
  }
  public resetPassCredentials() {
    this._passCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passCredentialsInput() {
    return this._passCredentials;
  }

  // recreate_pods - computed: false, optional: true, required: false
  private _recreatePods?: boolean | cdktf.IResolvable; 
  public get recreatePods() {
    return this.getBooleanAttribute('recreate_pods');
  }
  public set recreatePods(value: boolean | cdktf.IResolvable) {
    this._recreatePods = value;
  }
  public resetRecreatePods() {
    this._recreatePods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recreatePodsInput() {
    return this._recreatePods;
  }

  // render_subchart_notes - computed: false, optional: true, required: false
  private _renderSubchartNotes?: boolean | cdktf.IResolvable; 
  public get renderSubchartNotes() {
    return this.getBooleanAttribute('render_subchart_notes');
  }
  public set renderSubchartNotes(value: boolean | cdktf.IResolvable) {
    this._renderSubchartNotes = value;
  }
  public resetRenderSubchartNotes() {
    this._renderSubchartNotes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renderSubchartNotesInput() {
    return this._renderSubchartNotes;
  }

  // replace - computed: false, optional: true, required: false
  private _replace?: boolean | cdktf.IResolvable; 
  public get replace() {
    return this.getBooleanAttribute('replace');
  }
  public set replace(value: boolean | cdktf.IResolvable) {
    this._replace = value;
  }
  public resetReplace() {
    this._replace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // repository_ca_file - computed: false, optional: true, required: false
  private _repositoryCaFile?: string; 
  public get repositoryCaFile() {
    return this.getStringAttribute('repository_ca_file');
  }
  public set repositoryCaFile(value: string) {
    this._repositoryCaFile = value;
  }
  public resetRepositoryCaFile() {
    this._repositoryCaFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryCaFileInput() {
    return this._repositoryCaFile;
  }

  // repository_cert_file - computed: false, optional: true, required: false
  private _repositoryCertFile?: string; 
  public get repositoryCertFile() {
    return this.getStringAttribute('repository_cert_file');
  }
  public set repositoryCertFile(value: string) {
    this._repositoryCertFile = value;
  }
  public resetRepositoryCertFile() {
    this._repositoryCertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryCertFileInput() {
    return this._repositoryCertFile;
  }

  // repository_key_file - computed: false, optional: true, required: false
  private _repositoryKeyFile?: string; 
  public get repositoryKeyFile() {
    return this.getStringAttribute('repository_key_file');
  }
  public set repositoryKeyFile(value: string) {
    this._repositoryKeyFile = value;
  }
  public resetRepositoryKeyFile() {
    this._repositoryKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryKeyFileInput() {
    return this._repositoryKeyFile;
  }

  // repository_password - computed: false, optional: true, required: false
  private _repositoryPassword?: string; 
  public get repositoryPassword() {
    return this.getStringAttribute('repository_password');
  }
  public set repositoryPassword(value: string) {
    this._repositoryPassword = value;
  }
  public resetRepositoryPassword() {
    this._repositoryPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryPasswordInput() {
    return this._repositoryPassword;
  }

  // repository_username - computed: false, optional: true, required: false
  private _repositoryUsername?: string; 
  public get repositoryUsername() {
    return this.getStringAttribute('repository_username');
  }
  public set repositoryUsername(value: string) {
    this._repositoryUsername = value;
  }
  public resetRepositoryUsername() {
    this._repositoryUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUsernameInput() {
    return this._repositoryUsername;
  }

  // reset_values - computed: false, optional: true, required: false
  private _resetValues?: boolean | cdktf.IResolvable; 
  public get resetValues() {
    return this.getBooleanAttribute('reset_values');
  }
  public set resetValues(value: boolean | cdktf.IResolvable) {
    this._resetValues = value;
  }
  public resetResetValues() {
    this._resetValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetValuesInput() {
    return this._resetValues;
  }

  // reuse_values - computed: false, optional: true, required: false
  private _reuseValues?: boolean | cdktf.IResolvable; 
  public get reuseValues() {
    return this.getBooleanAttribute('reuse_values');
  }
  public set reuseValues(value: boolean | cdktf.IResolvable) {
    this._reuseValues = value;
  }
  public resetReuseValues() {
    this._reuseValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseValuesInput() {
    return this._reuseValues;
  }

  // skip_crds - computed: false, optional: true, required: false
  private _skipCrds?: boolean | cdktf.IResolvable; 
  public get skipCrds() {
    return this.getBooleanAttribute('skip_crds');
  }
  public set skipCrds(value: boolean | cdktf.IResolvable) {
    this._skipCrds = value;
  }
  public resetSkipCrds() {
    this._skipCrds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCrdsInput() {
    return this._skipCrds;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetTfValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // verify - computed: false, optional: true, required: false
  private _verify?: boolean | cdktf.IResolvable; 
  public get verify() {
    return this.getBooleanAttribute('verify');
  }
  public set verify(value: boolean | cdktf.IResolvable) {
    this._verify = value;
  }
  public resetVerify() {
    this._verify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // wait - computed: false, optional: true, required: false
  private _wait?: boolean | cdktf.IResolvable; 
  public get wait() {
    return this.getBooleanAttribute('wait');
  }
  public set wait(value: boolean | cdktf.IResolvable) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }

  // wait_for_jobs - computed: false, optional: true, required: false
  private _waitForJobs?: boolean | cdktf.IResolvable; 
  public get waitForJobs() {
    return this.getBooleanAttribute('wait_for_jobs');
  }
  public set waitForJobs(value: boolean | cdktf.IResolvable) {
    this._waitForJobs = value;
  }
  public resetWaitForJobs() {
    this._waitForJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForJobsInput() {
    return this._waitForJobs;
  }

  // postrender - computed: false, optional: true, required: false
  private _postrender = new ReleasePostrenderOutputReference(this, "postrender");
  public get postrender() {
    return this._postrender;
  }
  public putPostrender(value: ReleasePostrender) {
    this._postrender.internalValue = value;
  }
  public resetPostrender() {
    this._postrender.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postrenderInput() {
    return this._postrender.internalValue;
  }

  // set - computed: false, optional: true, required: false
  private _set = new ReleaseSetList(this, "set", true);
  public get set() {
    return this._set;
  }
  public putSet(value: ReleaseSet[] | cdktf.IResolvable) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }

  // set_list - computed: false, optional: true, required: false
  private _setList = new ReleaseSetListStructList(this, "set_list", false);
  public get setList() {
    return this._setList;
  }
  public putSetList(value: ReleaseSetListStruct[] | cdktf.IResolvable) {
    this._setList.internalValue = value;
  }
  public resetSetList() {
    this._setList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setListInput() {
    return this._setList.internalValue;
  }

  // set_sensitive - computed: false, optional: true, required: false
  private _setSensitive = new ReleaseSetSensitiveList(this, "set_sensitive", true);
  public get setSensitive() {
    return this._setSensitive;
  }
  public putSetSensitive(value: ReleaseSetSensitive[] | cdktf.IResolvable) {
    this._setSensitive.internalValue = value;
  }
  public resetSetSensitive() {
    this._setSensitive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setSensitiveInput() {
    return this._setSensitive.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      atomic: cdktf.booleanToTerraform(this._atomic),
      chart: cdktf.stringToTerraform(this._chart),
      cleanup_on_fail: cdktf.booleanToTerraform(this._cleanupOnFail),
      create_namespace: cdktf.booleanToTerraform(this._createNamespace),
      dependency_update: cdktf.booleanToTerraform(this._dependencyUpdate),
      description: cdktf.stringToTerraform(this._description),
      devel: cdktf.booleanToTerraform(this._devel),
      disable_crd_hooks: cdktf.booleanToTerraform(this._disableCrdHooks),
      disable_openapi_validation: cdktf.booleanToTerraform(this._disableOpenapiValidation),
      disable_webhooks: cdktf.booleanToTerraform(this._disableWebhooks),
      force_update: cdktf.booleanToTerraform(this._forceUpdate),
      id: cdktf.stringToTerraform(this._id),
      keyring: cdktf.stringToTerraform(this._keyring),
      lint: cdktf.booleanToTerraform(this._lint),
      max_history: cdktf.numberToTerraform(this._maxHistory),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      pass_credentials: cdktf.booleanToTerraform(this._passCredentials),
      recreate_pods: cdktf.booleanToTerraform(this._recreatePods),
      render_subchart_notes: cdktf.booleanToTerraform(this._renderSubchartNotes),
      replace: cdktf.booleanToTerraform(this._replace),
      repository: cdktf.stringToTerraform(this._repository),
      repository_ca_file: cdktf.stringToTerraform(this._repositoryCaFile),
      repository_cert_file: cdktf.stringToTerraform(this._repositoryCertFile),
      repository_key_file: cdktf.stringToTerraform(this._repositoryKeyFile),
      repository_password: cdktf.stringToTerraform(this._repositoryPassword),
      repository_username: cdktf.stringToTerraform(this._repositoryUsername),
      reset_values: cdktf.booleanToTerraform(this._resetValues),
      reuse_values: cdktf.booleanToTerraform(this._reuseValues),
      skip_crds: cdktf.booleanToTerraform(this._skipCrds),
      timeout: cdktf.numberToTerraform(this._timeout),
      values: cdktf.listMapper(cdktf.stringToTerraform, false)(this._values),
      verify: cdktf.booleanToTerraform(this._verify),
      version: cdktf.stringToTerraform(this._version),
      wait: cdktf.booleanToTerraform(this._wait),
      wait_for_jobs: cdktf.booleanToTerraform(this._waitForJobs),
      postrender: releasePostrenderToTerraform(this._postrender.internalValue),
      set: cdktf.listMapper(releaseSetToTerraform, true)(this._set.internalValue),
      set_list: cdktf.listMapper(releaseSetListStructToTerraform, true)(this._setList.internalValue),
      set_sensitive: cdktf.listMapper(releaseSetSensitiveToTerraform, true)(this._setSensitive.internalValue),
    };
  }
}
