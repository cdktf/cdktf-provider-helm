/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHelmTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Kubernetes api versions used for Capabilities.APIVersions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#api_versions DataHelmTemplate#api_versions}
  */
  readonly apiVersions?: string[];
  /**
  * If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#atomic DataHelmTemplate#atomic}
  */
  readonly atomic?: boolean | cdktf.IResolvable;
  /**
  * Chart name to be installed. A path may be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#chart DataHelmTemplate#chart}
  */
  readonly chart: string;
  /**
  * List of rendered CRDs from the chart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#crds DataHelmTemplate#crds}
  */
  readonly crds?: string[];
  /**
  * Create the namespace if it does not exist. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#create_namespace DataHelmTemplate#create_namespace}
  */
  readonly createNamespace?: boolean | cdktf.IResolvable;
  /**
  * Run helm dependency update before installing the chart. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#dependency_update DataHelmTemplate#dependency_update}
  */
  readonly dependencyUpdate?: boolean | cdktf.IResolvable;
  /**
  * Add a custom description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#description DataHelmTemplate#description}
  */
  readonly description?: string;
  /**
  * Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#devel DataHelmTemplate#devel}
  */
  readonly devel?: boolean | cdktf.IResolvable;
  /**
  * If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema.Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#disable_openapi_validation DataHelmTemplate#disable_openapi_validation}
  */
  readonly disableOpenapiValidation?: boolean | cdktf.IResolvable;
  /**
  * Prevent hooks from running.Defaults to `300` seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#disable_webhooks DataHelmTemplate#disable_webhooks}
  */
  readonly disableWebhooks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#id DataHelmTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Include CRDs in the templated output
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#include_crds DataHelmTemplate#include_crds}
  */
  readonly includeCrds?: boolean | cdktf.IResolvable;
  /**
  * Set .Release.IsUpgrade instead of .Release.IsInstall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#is_upgrade DataHelmTemplate#is_upgrade}
  */
  readonly isUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Location of public keys used for verification. Used only if `verify` is true. Defaults to `/.gnupg/pubring.gpg` in the location set by `home`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#keyring DataHelmTemplate#keyring}
  */
  readonly keyring?: string;
  /**
  * Kubernetes version used for Capabilities.KubeVersion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#kube_version DataHelmTemplate#kube_version}
  */
  readonly kubeVersion?: string;
  /**
  * Concatenated rendered chart templates. This corresponds to the output of the `helm template` command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#manifest DataHelmTemplate#manifest}
  */
  readonly manifest?: string;
  /**
  * Map of rendered chart templates indexed by the template name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#manifests DataHelmTemplate#manifests}
  */
  readonly manifests?: { [key: string]: string };
  /**
  * Release name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#name DataHelmTemplate#name}
  */
  readonly name: string;
  /**
  * Namespace to install the release into. Defaults to `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#namespace DataHelmTemplate#namespace}
  */
  readonly namespace?: string;
  /**
  * Rendered notes if the chart contains a `NOTES.txt`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#notes DataHelmTemplate#notes}
  */
  readonly notes?: string;
  /**
  * Pass credentials to all domains. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#pass_credentials DataHelmTemplate#pass_credentials}
  */
  readonly passCredentials?: boolean | cdktf.IResolvable;
  /**
  * If set, render subchart notes along with the parent. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#render_subchart_notes DataHelmTemplate#render_subchart_notes}
  */
  readonly renderSubchartNotes?: boolean | cdktf.IResolvable;
  /**
  * Re-use the given name, even if that name is already used. This is unsafe in production. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#replace DataHelmTemplate#replace}
  */
  readonly replace?: boolean | cdktf.IResolvable;
  /**
  * Repository where to locate the requested chart. If is a URL the chart is installed without installing the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#repository DataHelmTemplate#repository}
  */
  readonly repository?: string;
  /**
  * The Repositories CA File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#repository_ca_file DataHelmTemplate#repository_ca_file}
  */
  readonly repositoryCaFile?: string;
  /**
  * The repositories cert file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#repository_cert_file DataHelmTemplate#repository_cert_file}
  */
  readonly repositoryCertFile?: string;
  /**
  * The repositories cert key file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#repository_key_file DataHelmTemplate#repository_key_file}
  */
  readonly repositoryKeyFile?: string;
  /**
  * Password for HTTP basic authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#repository_password DataHelmTemplate#repository_password}
  */
  readonly repositoryPassword?: string;
  /**
  * Username for HTTP basic authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#repository_username DataHelmTemplate#repository_username}
  */
  readonly repositoryUsername?: string;
  /**
  * When upgrading, reset the values to the ones built into the chart.Defaults to `false`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#reset_values DataHelmTemplate#reset_values}
  */
  readonly resetValues?: boolean | cdktf.IResolvable;
  /**
  * When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored. Defaults to `false`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#reuse_values DataHelmTemplate#reuse_values}
  */
  readonly reuseValues?: boolean | cdktf.IResolvable;
  /**
  * Only show manifests rendered from the given templates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#show_only DataHelmTemplate#show_only}
  */
  readonly showOnly?: string[];
  /**
  * If set, no CRDs will be installed. By default, CRDs are installed if not already present. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#skip_crds DataHelmTemplate#skip_crds}
  */
  readonly skipCrds?: boolean | cdktf.IResolvable;
  /**
  * If set, tests will not be rendered. By default, tests are rendered. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#skip_tests DataHelmTemplate#skip_tests}
  */
  readonly skipTests?: boolean | cdktf.IResolvable;
  /**
  * Time in seconds to wait for any individual kubernetes operation. Defaults to `300` seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#timeout DataHelmTemplate#timeout}
  */
  readonly timeout?: number;
  /**
  * Validate your manifests against the Kubernetes cluster you are currently pointing at. This is the same validation performed on an install
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#validate DataHelmTemplate#validate}
  */
  readonly validate?: boolean | cdktf.IResolvable;
  /**
  * List of values in raw yaml format to pass to helm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#values DataHelmTemplate#values}
  */
  readonly values?: string[];
  /**
  * Verify the package before installing it.Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#verify DataHelmTemplate#verify}
  */
  readonly verify?: boolean | cdktf.IResolvable;
  /**
  * Specify the exact chart version to install. If this is not specified, the latest version is installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#version DataHelmTemplate#version}
  */
  readonly version?: string;
  /**
  * Will wait until all resources are in a ready state before marking the release as successful.Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#wait DataHelmTemplate#wait}
  */
  readonly wait?: boolean | cdktf.IResolvable;
  /**
  * postrender block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#postrender DataHelmTemplate#postrender}
  */
  readonly postrender?: DataHelmTemplatePostrender;
  /**
  * set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#set DataHelmTemplate#set}
  */
  readonly set?: DataHelmTemplateSet[] | cdktf.IResolvable;
  /**
  * set_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#set_list DataHelmTemplate#set_list}
  */
  readonly setList?: DataHelmTemplateSetListStruct[] | cdktf.IResolvable;
  /**
  * set_sensitive block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#set_sensitive DataHelmTemplate#set_sensitive}
  */
  readonly setSensitive?: DataHelmTemplateSetSensitive[] | cdktf.IResolvable;
  /**
  * set_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#set_string DataHelmTemplate#set_string}
  */
  readonly setString?: DataHelmTemplateSetString[] | cdktf.IResolvable;
}
export interface DataHelmTemplatePostrender {
  /**
  * The command binary path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#binary_path DataHelmTemplate#binary_path}
  */
  readonly binaryPath: string;
}

export function dataHelmTemplatePostrenderToTerraform(struct?: DataHelmTemplatePostrenderOutputReference | DataHelmTemplatePostrender): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binary_path: cdktf.stringToTerraform(struct!.binaryPath),
  }
}


export function dataHelmTemplatePostrenderToHclTerraform(struct?: DataHelmTemplatePostrenderOutputReference | DataHelmTemplatePostrender): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binary_path: {
      value: cdktf.stringToHclTerraform(struct!.binaryPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHelmTemplatePostrenderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataHelmTemplatePostrender | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binaryPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryPath = this._binaryPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHelmTemplatePostrender | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._binaryPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._binaryPath = value.binaryPath;
    }
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
export interface DataHelmTemplateSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#name DataHelmTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#type DataHelmTemplate#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#value DataHelmTemplate#value}
  */
  readonly value: string;
}

export function dataHelmTemplateSetToTerraform(struct?: DataHelmTemplateSet | cdktf.IResolvable): any {
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


export function dataHelmTemplateSetToHclTerraform(struct?: DataHelmTemplateSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHelmTemplateSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHelmTemplateSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataHelmTemplateSet | cdktf.IResolvable | undefined) {
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

export class DataHelmTemplateSetList extends cdktf.ComplexList {
  public internalValue? : DataHelmTemplateSet[] | cdktf.IResolvable

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
  public get(index: number): DataHelmTemplateSetOutputReference {
    return new DataHelmTemplateSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHelmTemplateSetListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#name DataHelmTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#value DataHelmTemplate#value}
  */
  readonly value: string[];
}

export function dataHelmTemplateSetListStructToTerraform(struct?: DataHelmTemplateSetListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function dataHelmTemplateSetListStructToHclTerraform(struct?: DataHelmTemplateSetListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHelmTemplateSetListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHelmTemplateSetListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataHelmTemplateSetListStruct | cdktf.IResolvable | undefined) {
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

export class DataHelmTemplateSetListStructList extends cdktf.ComplexList {
  public internalValue? : DataHelmTemplateSetListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataHelmTemplateSetListStructOutputReference {
    return new DataHelmTemplateSetListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHelmTemplateSetSensitive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#name DataHelmTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#type DataHelmTemplate#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#value DataHelmTemplate#value}
  */
  readonly value: string;
}

export function dataHelmTemplateSetSensitiveToTerraform(struct?: DataHelmTemplateSetSensitive | cdktf.IResolvable): any {
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


export function dataHelmTemplateSetSensitiveToHclTerraform(struct?: DataHelmTemplateSetSensitive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHelmTemplateSetSensitiveOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHelmTemplateSetSensitive | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataHelmTemplateSetSensitive | cdktf.IResolvable | undefined) {
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

export class DataHelmTemplateSetSensitiveList extends cdktf.ComplexList {
  public internalValue? : DataHelmTemplateSetSensitive[] | cdktf.IResolvable

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
  public get(index: number): DataHelmTemplateSetSensitiveOutputReference {
    return new DataHelmTemplateSetSensitiveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHelmTemplateSetString {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#name DataHelmTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#value DataHelmTemplate#value}
  */
  readonly value: string;
}

export function dataHelmTemplateSetStringToTerraform(struct?: DataHelmTemplateSetString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataHelmTemplateSetStringToHclTerraform(struct?: DataHelmTemplateSetString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHelmTemplateSetStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHelmTemplateSetString | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataHelmTemplateSetString | cdktf.IResolvable | undefined) {
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

export class DataHelmTemplateSetStringList extends cdktf.ComplexList {
  public internalValue? : DataHelmTemplateSetString[] | cdktf.IResolvable

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
  public get(index: number): DataHelmTemplateSetStringOutputReference {
    return new DataHelmTemplateSetStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template helm_template}
*/
export class DataHelmTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "helm_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHelmTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHelmTemplate to import
  * @param importFromId The id of the existing DataHelmTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHelmTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "helm_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/helm/2.14.1/docs/data-sources/template helm_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHelmTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataHelmTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'helm_template',
      terraformGeneratorMetadata: {
        providerName: 'helm',
        providerVersion: '2.14.1',
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
    this._apiVersions = config.apiVersions;
    this._atomic = config.atomic;
    this._chart = config.chart;
    this._crds = config.crds;
    this._createNamespace = config.createNamespace;
    this._dependencyUpdate = config.dependencyUpdate;
    this._description = config.description;
    this._devel = config.devel;
    this._disableOpenapiValidation = config.disableOpenapiValidation;
    this._disableWebhooks = config.disableWebhooks;
    this._id = config.id;
    this._includeCrds = config.includeCrds;
    this._isUpgrade = config.isUpgrade;
    this._keyring = config.keyring;
    this._kubeVersion = config.kubeVersion;
    this._manifest = config.manifest;
    this._manifests = config.manifests;
    this._name = config.name;
    this._namespace = config.namespace;
    this._notes = config.notes;
    this._passCredentials = config.passCredentials;
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
    this._showOnly = config.showOnly;
    this._skipCrds = config.skipCrds;
    this._skipTests = config.skipTests;
    this._timeout = config.timeout;
    this._validate = config.validate;
    this._values = config.values;
    this._verify = config.verify;
    this._version = config.version;
    this._wait = config.wait;
    this._postrender.internalValue = config.postrender;
    this._set.internalValue = config.set;
    this._setList.internalValue = config.setList;
    this._setSensitive.internalValue = config.setSensitive;
    this._setString.internalValue = config.setString;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_versions - computed: false, optional: true, required: false
  private _apiVersions?: string[]; 
  public get apiVersions() {
    return this.getListAttribute('api_versions');
  }
  public set apiVersions(value: string[]) {
    this._apiVersions = value;
  }
  public resetApiVersions() {
    this._apiVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionsInput() {
    return this._apiVersions;
  }

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

  // crds - computed: true, optional: true, required: false
  private _crds?: string[]; 
  public get crds() {
    return this.getListAttribute('crds');
  }
  public set crds(value: string[]) {
    this._crds = value;
  }
  public resetCrds() {
    this._crds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crdsInput() {
    return this._crds;
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

  // include_crds - computed: false, optional: true, required: false
  private _includeCrds?: boolean | cdktf.IResolvable; 
  public get includeCrds() {
    return this.getBooleanAttribute('include_crds');
  }
  public set includeCrds(value: boolean | cdktf.IResolvable) {
    this._includeCrds = value;
  }
  public resetIncludeCrds() {
    this._includeCrds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCrdsInput() {
    return this._includeCrds;
  }

  // is_upgrade - computed: false, optional: true, required: false
  private _isUpgrade?: boolean | cdktf.IResolvable; 
  public get isUpgrade() {
    return this.getBooleanAttribute('is_upgrade');
  }
  public set isUpgrade(value: boolean | cdktf.IResolvable) {
    this._isUpgrade = value;
  }
  public resetIsUpgrade() {
    this._isUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUpgradeInput() {
    return this._isUpgrade;
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

  // kube_version - computed: false, optional: true, required: false
  private _kubeVersion?: string; 
  public get kubeVersion() {
    return this.getStringAttribute('kube_version');
  }
  public set kubeVersion(value: string) {
    this._kubeVersion = value;
  }
  public resetKubeVersion() {
    this._kubeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeVersionInput() {
    return this._kubeVersion;
  }

  // manifest - computed: true, optional: true, required: false
  private _manifest?: string; 
  public get manifest() {
    return this.getStringAttribute('manifest');
  }
  public set manifest(value: string) {
    this._manifest = value;
  }
  public resetManifest() {
    this._manifest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestInput() {
    return this._manifest;
  }

  // manifests - computed: true, optional: true, required: false
  private _manifests?: { [key: string]: string }; 
  public get manifests() {
    return this.getStringMapAttribute('manifests');
  }
  public set manifests(value: { [key: string]: string }) {
    this._manifests = value;
  }
  public resetManifests() {
    this._manifests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestsInput() {
    return this._manifests;
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

  // notes - computed: true, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
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

  // show_only - computed: false, optional: true, required: false
  private _showOnly?: string[]; 
  public get showOnly() {
    return this.getListAttribute('show_only');
  }
  public set showOnly(value: string[]) {
    this._showOnly = value;
  }
  public resetShowOnly() {
    this._showOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showOnlyInput() {
    return this._showOnly;
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

  // skip_tests - computed: false, optional: true, required: false
  private _skipTests?: boolean | cdktf.IResolvable; 
  public get skipTests() {
    return this.getBooleanAttribute('skip_tests');
  }
  public set skipTests(value: boolean | cdktf.IResolvable) {
    this._skipTests = value;
  }
  public resetSkipTests() {
    this._skipTests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipTestsInput() {
    return this._skipTests;
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

  // validate - computed: false, optional: true, required: false
  private _validate?: boolean | cdktf.IResolvable; 
  public get validate() {
    return this.getBooleanAttribute('validate');
  }
  public set validate(value: boolean | cdktf.IResolvable) {
    this._validate = value;
  }
  public resetValidate() {
    this._validate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate;
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

  // postrender - computed: false, optional: true, required: false
  private _postrender = new DataHelmTemplatePostrenderOutputReference(this, "postrender");
  public get postrender() {
    return this._postrender;
  }
  public putPostrender(value: DataHelmTemplatePostrender) {
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
  private _set = new DataHelmTemplateSetList(this, "set", true);
  public get set() {
    return this._set;
  }
  public putSet(value: DataHelmTemplateSet[] | cdktf.IResolvable) {
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
  private _setList = new DataHelmTemplateSetListStructList(this, "set_list", false);
  public get setList() {
    return this._setList;
  }
  public putSetList(value: DataHelmTemplateSetListStruct[] | cdktf.IResolvable) {
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
  private _setSensitive = new DataHelmTemplateSetSensitiveList(this, "set_sensitive", true);
  public get setSensitive() {
    return this._setSensitive;
  }
  public putSetSensitive(value: DataHelmTemplateSetSensitive[] | cdktf.IResolvable) {
    this._setSensitive.internalValue = value;
  }
  public resetSetSensitive() {
    this._setSensitive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setSensitiveInput() {
    return this._setSensitive.internalValue;
  }

  // set_string - computed: false, optional: true, required: false
  private _setString = new DataHelmTemplateSetStringList(this, "set_string", true);
  public get setString() {
    return this._setString;
  }
  public putSetString(value: DataHelmTemplateSetString[] | cdktf.IResolvable) {
    this._setString.internalValue = value;
  }
  public resetSetString() {
    this._setString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setStringInput() {
    return this._setString.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apiVersions),
      atomic: cdktf.booleanToTerraform(this._atomic),
      chart: cdktf.stringToTerraform(this._chart),
      crds: cdktf.listMapper(cdktf.stringToTerraform, false)(this._crds),
      create_namespace: cdktf.booleanToTerraform(this._createNamespace),
      dependency_update: cdktf.booleanToTerraform(this._dependencyUpdate),
      description: cdktf.stringToTerraform(this._description),
      devel: cdktf.booleanToTerraform(this._devel),
      disable_openapi_validation: cdktf.booleanToTerraform(this._disableOpenapiValidation),
      disable_webhooks: cdktf.booleanToTerraform(this._disableWebhooks),
      id: cdktf.stringToTerraform(this._id),
      include_crds: cdktf.booleanToTerraform(this._includeCrds),
      is_upgrade: cdktf.booleanToTerraform(this._isUpgrade),
      keyring: cdktf.stringToTerraform(this._keyring),
      kube_version: cdktf.stringToTerraform(this._kubeVersion),
      manifest: cdktf.stringToTerraform(this._manifest),
      manifests: cdktf.hashMapper(cdktf.stringToTerraform)(this._manifests),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      notes: cdktf.stringToTerraform(this._notes),
      pass_credentials: cdktf.booleanToTerraform(this._passCredentials),
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
      show_only: cdktf.listMapper(cdktf.stringToTerraform, false)(this._showOnly),
      skip_crds: cdktf.booleanToTerraform(this._skipCrds),
      skip_tests: cdktf.booleanToTerraform(this._skipTests),
      timeout: cdktf.numberToTerraform(this._timeout),
      validate: cdktf.booleanToTerraform(this._validate),
      values: cdktf.listMapper(cdktf.stringToTerraform, false)(this._values),
      verify: cdktf.booleanToTerraform(this._verify),
      version: cdktf.stringToTerraform(this._version),
      wait: cdktf.booleanToTerraform(this._wait),
      postrender: dataHelmTemplatePostrenderToTerraform(this._postrender.internalValue),
      set: cdktf.listMapper(dataHelmTemplateSetToTerraform, true)(this._set.internalValue),
      set_list: cdktf.listMapper(dataHelmTemplateSetListStructToTerraform, true)(this._setList.internalValue),
      set_sensitive: cdktf.listMapper(dataHelmTemplateSetSensitiveToTerraform, true)(this._setSensitive.internalValue),
      set_string: cdktf.listMapper(dataHelmTemplateSetStringToTerraform, true)(this._setString.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_versions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apiVersions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      atomic: {
        value: cdktf.booleanToHclTerraform(this._atomic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      chart: {
        value: cdktf.stringToHclTerraform(this._chart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crds: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._crds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      create_namespace: {
        value: cdktf.booleanToHclTerraform(this._createNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dependency_update: {
        value: cdktf.booleanToHclTerraform(this._dependencyUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      devel: {
        value: cdktf.booleanToHclTerraform(this._devel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_openapi_validation: {
        value: cdktf.booleanToHclTerraform(this._disableOpenapiValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_webhooks: {
        value: cdktf.booleanToHclTerraform(this._disableWebhooks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_crds: {
        value: cdktf.booleanToHclTerraform(this._includeCrds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_upgrade: {
        value: cdktf.booleanToHclTerraform(this._isUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      keyring: {
        value: cdktf.stringToHclTerraform(this._keyring),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kube_version: {
        value: cdktf.stringToHclTerraform(this._kubeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manifest: {
        value: cdktf.stringToHclTerraform(this._manifest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manifests: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._manifests),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pass_credentials: {
        value: cdktf.booleanToHclTerraform(this._passCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      render_subchart_notes: {
        value: cdktf.booleanToHclTerraform(this._renderSubchartNotes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replace: {
        value: cdktf.booleanToHclTerraform(this._replace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_ca_file: {
        value: cdktf.stringToHclTerraform(this._repositoryCaFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_cert_file: {
        value: cdktf.stringToHclTerraform(this._repositoryCertFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_key_file: {
        value: cdktf.stringToHclTerraform(this._repositoryKeyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_password: {
        value: cdktf.stringToHclTerraform(this._repositoryPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_username: {
        value: cdktf.stringToHclTerraform(this._repositoryUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reset_values: {
        value: cdktf.booleanToHclTerraform(this._resetValues),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reuse_values: {
        value: cdktf.booleanToHclTerraform(this._reuseValues),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_only: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._showOnly),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      skip_crds: {
        value: cdktf.booleanToHclTerraform(this._skipCrds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_tests: {
        value: cdktf.booleanToHclTerraform(this._skipTests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      validate: {
        value: cdktf.booleanToHclTerraform(this._validate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      values: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._values),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      verify: {
        value: cdktf.booleanToHclTerraform(this._verify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait: {
        value: cdktf.booleanToHclTerraform(this._wait),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      postrender: {
        value: dataHelmTemplatePostrenderToHclTerraform(this._postrender.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHelmTemplatePostrenderList",
      },
      set: {
        value: cdktf.listMapperHcl(dataHelmTemplateSetToHclTerraform, true)(this._set.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataHelmTemplateSetList",
      },
      set_list: {
        value: cdktf.listMapperHcl(dataHelmTemplateSetListStructToHclTerraform, true)(this._setList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHelmTemplateSetListStructList",
      },
      set_sensitive: {
        value: cdktf.listMapperHcl(dataHelmTemplateSetSensitiveToHclTerraform, true)(this._setSensitive.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataHelmTemplateSetSensitiveList",
      },
      set_string: {
        value: cdktf.listMapperHcl(dataHelmTemplateSetStringToHclTerraform, true)(this._setString.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataHelmTemplateSetStringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
