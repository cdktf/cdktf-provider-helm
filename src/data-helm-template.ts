// https://www.terraform.io/docs/providers/helm/d/template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHelmTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Kubernetes api versions used for Capabilities.APIVersions
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#api_versions DataHelmTemplate#api_versions}
  */
  readonly apiVersions?: string[];
  /**
  * If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#atomic DataHelmTemplate#atomic}
  */
  readonly atomic?: boolean | cdktf.IResolvable;
  /**
  * Chart name to be installed. A path may be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#chart DataHelmTemplate#chart}
  */
  readonly chart: string;
  /**
  * Create the namespace if it does not exist
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#create_namespace DataHelmTemplate#create_namespace}
  */
  readonly createNamespace?: boolean | cdktf.IResolvable;
  /**
  * Run helm dependency update before installing the chart
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#dependency_update DataHelmTemplate#dependency_update}
  */
  readonly dependencyUpdate?: boolean | cdktf.IResolvable;
  /**
  * Add a custom description
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#description DataHelmTemplate#description}
  */
  readonly description?: string;
  /**
  * Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#devel DataHelmTemplate#devel}
  */
  readonly devel?: boolean | cdktf.IResolvable;
  /**
  * If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#disable_openapi_validation DataHelmTemplate#disable_openapi_validation}
  */
  readonly disableOpenapiValidation?: boolean | cdktf.IResolvable;
  /**
  * Prevent hooks from running.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#disable_webhooks DataHelmTemplate#disable_webhooks}
  */
  readonly disableWebhooks?: boolean | cdktf.IResolvable;
  /**
  * Include CRDs in the templated output
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#include_crds DataHelmTemplate#include_crds}
  */
  readonly includeCrds?: boolean | cdktf.IResolvable;
  /**
  * Set .Release.IsUpgrade instead of .Release.IsInstall
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#is_upgrade DataHelmTemplate#is_upgrade}
  */
  readonly isUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Location of public keys used for verification. Used only if `verify` is true
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#keyring DataHelmTemplate#keyring}
  */
  readonly keyring?: string;
  /**
  * Concatenated rendered chart templates. This corresponds to the output of the `helm template` command.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#manifest DataHelmTemplate#manifest}
  */
  readonly manifest?: string;
  /**
  * Map of rendered chart templates indexed by the template name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#manifests DataHelmTemplate#manifests}
  */
  readonly manifests?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Release name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#name DataHelmTemplate#name}
  */
  readonly name: string;
  /**
  * Namespace to install the release into.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#namespace DataHelmTemplate#namespace}
  */
  readonly namespace?: string;
  /**
  * Rendered notes if the chart contains a `NOTES.txt`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#notes DataHelmTemplate#notes}
  */
  readonly notes?: string;
  /**
  * If set, render subchart notes along with the parent
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#render_subchart_notes DataHelmTemplate#render_subchart_notes}
  */
  readonly renderSubchartNotes?: boolean | cdktf.IResolvable;
  /**
  * Re-use the given name, even if that name is already used. This is unsafe in production
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#replace DataHelmTemplate#replace}
  */
  readonly replace?: boolean | cdktf.IResolvable;
  /**
  * Repository where to locate the requested chart. If is a URL the chart is installed without installing the repository.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#repository DataHelmTemplate#repository}
  */
  readonly repository?: string;
  /**
  * The Repositories CA File
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#repository_ca_file DataHelmTemplate#repository_ca_file}
  */
  readonly repositoryCaFile?: string;
  /**
  * The repositories cert file
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#repository_cert_file DataHelmTemplate#repository_cert_file}
  */
  readonly repositoryCertFile?: string;
  /**
  * The repositories cert key file
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#repository_key_file DataHelmTemplate#repository_key_file}
  */
  readonly repositoryKeyFile?: string;
  /**
  * Password for HTTP basic authentication
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#repository_password DataHelmTemplate#repository_password}
  */
  readonly repositoryPassword?: string;
  /**
  * Username for HTTP basic authentication
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#repository_username DataHelmTemplate#repository_username}
  */
  readonly repositoryUsername?: string;
  /**
  * When upgrading, reset the values to the ones built into the chart
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#reset_values DataHelmTemplate#reset_values}
  */
  readonly resetValues?: boolean | cdktf.IResolvable;
  /**
  * When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#reuse_values DataHelmTemplate#reuse_values}
  */
  readonly reuseValues?: boolean | cdktf.IResolvable;
  /**
  * Only show manifests rendered from the given templates
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#show_only DataHelmTemplate#show_only}
  */
  readonly showOnly?: string[];
  /**
  * If set, no CRDs will be installed. By default, CRDs are installed if not already present
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#skip_crds DataHelmTemplate#skip_crds}
  */
  readonly skipCrds?: boolean | cdktf.IResolvable;
  /**
  * If set, tests will not be rendered. By default, tests are rendered
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#skip_tests DataHelmTemplate#skip_tests}
  */
  readonly skipTests?: boolean | cdktf.IResolvable;
  /**
  * Time in seconds to wait for any individual kubernetes operation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#timeout DataHelmTemplate#timeout}
  */
  readonly timeout?: number;
  /**
  * Validate your manifests against the Kubernetes cluster you are currently pointing at. This is the same validation performed on an install
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#validate DataHelmTemplate#validate}
  */
  readonly validate?: boolean | cdktf.IResolvable;
  /**
  * List of values in raw yaml format to pass to helm.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#values DataHelmTemplate#values}
  */
  readonly values?: string[];
  /**
  * Verify the package before installing it.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#verify DataHelmTemplate#verify}
  */
  readonly verify?: boolean | cdktf.IResolvable;
  /**
  * Specify the exact chart version to install. If this is not specified, the latest version is installed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#version DataHelmTemplate#version}
  */
  readonly version?: string;
  /**
  * Will wait until all resources are in a ready state before marking the release as successful.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#wait DataHelmTemplate#wait}
  */
  readonly wait?: boolean | cdktf.IResolvable;
  /**
  * postrender block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#postrender DataHelmTemplate#postrender}
  */
  readonly postrender?: DataHelmTemplatePostrender;
  /**
  * set block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#set DataHelmTemplate#set}
  */
  readonly set?: DataHelmTemplateSet[];
  /**
  * set_sensitive block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#set_sensitive DataHelmTemplate#set_sensitive}
  */
  readonly setSensitive?: DataHelmTemplateSetSensitive[];
  /**
  * set_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#set_string DataHelmTemplate#set_string}
  */
  readonly setString?: DataHelmTemplateSetString[];
}
export interface DataHelmTemplatePostrender {
  /**
  * The command binary path.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#binary_path DataHelmTemplate#binary_path}
  */
  readonly binaryPath: string;
}

function dataHelmTemplatePostrenderToTerraform(struct?: DataHelmTemplatePostrenderOutputReference | DataHelmTemplatePostrender): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binary_path: cdktf.stringToTerraform(struct!.binaryPath),
  }
}

export class DataHelmTemplatePostrenderOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._binaryPath
  }
}
export interface DataHelmTemplateSet {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#name DataHelmTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#type DataHelmTemplate#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#value DataHelmTemplate#value}
  */
  readonly value: string;
}

function dataHelmTemplateSetToTerraform(struct?: DataHelmTemplateSet): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DataHelmTemplateSetSensitive {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#name DataHelmTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#type DataHelmTemplate#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#value DataHelmTemplate#value}
  */
  readonly value: string;
}

function dataHelmTemplateSetSensitiveToTerraform(struct?: DataHelmTemplateSetSensitive): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DataHelmTemplateSetString {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#name DataHelmTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/d/template.html#value DataHelmTemplate#value}
  */
  readonly value: string;
}

function dataHelmTemplateSetStringToTerraform(struct?: DataHelmTemplateSetString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/helm/d/template.html helm_template}
*/
export class DataHelmTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "helm_template";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/helm/d/template.html helm_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHelmTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataHelmTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'helm_template',
      terraformGeneratorMetadata: {
        providerName: 'helm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiVersions = config.apiVersions;
    this._atomic = config.atomic;
    this._chart = config.chart;
    this._createNamespace = config.createNamespace;
    this._dependencyUpdate = config.dependencyUpdate;
    this._description = config.description;
    this._devel = config.devel;
    this._disableOpenapiValidation = config.disableOpenapiValidation;
    this._disableWebhooks = config.disableWebhooks;
    this._includeCrds = config.includeCrds;
    this._isUpgrade = config.isUpgrade;
    this._keyring = config.keyring;
    this._manifest = config.manifest;
    this._manifests = config.manifests;
    this._name = config.name;
    this._namespace = config.namespace;
    this._notes = config.notes;
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
    this._postrender = config.postrender;
    this._set = config.set;
    this._setSensitive = config.setSensitive;
    this._setString = config.setString;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_versions - computed: false, optional: true, required: false
  private _apiVersions?: string[] | undefined; 
  public get apiVersions() {
    return this.getListAttribute('api_versions');
  }
  public set apiVersions(value: string[] | undefined) {
    this._apiVersions = value;
  }
  public resetApiVersions() {
    this._apiVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionsInput() {
    return this._apiVersions
  }

  // atomic - computed: false, optional: true, required: false
  private _atomic?: boolean | cdktf.IResolvable | undefined; 
  public get atomic() {
    return this.getBooleanAttribute('atomic') as any;
  }
  public set atomic(value: boolean | cdktf.IResolvable | undefined) {
    this._atomic = value;
  }
  public resetAtomic() {
    this._atomic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atomicInput() {
    return this._atomic
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
    return this._chart
  }

  // create_namespace - computed: false, optional: true, required: false
  private _createNamespace?: boolean | cdktf.IResolvable | undefined; 
  public get createNamespace() {
    return this.getBooleanAttribute('create_namespace') as any;
  }
  public set createNamespace(value: boolean | cdktf.IResolvable | undefined) {
    this._createNamespace = value;
  }
  public resetCreateNamespace() {
    this._createNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createNamespaceInput() {
    return this._createNamespace
  }

  // dependency_update - computed: false, optional: true, required: false
  private _dependencyUpdate?: boolean | cdktf.IResolvable | undefined; 
  public get dependencyUpdate() {
    return this.getBooleanAttribute('dependency_update') as any;
  }
  public set dependencyUpdate(value: boolean | cdktf.IResolvable | undefined) {
    this._dependencyUpdate = value;
  }
  public resetDependencyUpdate() {
    this._dependencyUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependencyUpdateInput() {
    return this._dependencyUpdate
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // devel - computed: false, optional: true, required: false
  private _devel?: boolean | cdktf.IResolvable | undefined; 
  public get devel() {
    return this.getBooleanAttribute('devel') as any;
  }
  public set devel(value: boolean | cdktf.IResolvable | undefined) {
    this._devel = value;
  }
  public resetDevel() {
    this._devel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get develInput() {
    return this._devel
  }

  // disable_openapi_validation - computed: false, optional: true, required: false
  private _disableOpenapiValidation?: boolean | cdktf.IResolvable | undefined; 
  public get disableOpenapiValidation() {
    return this.getBooleanAttribute('disable_openapi_validation') as any;
  }
  public set disableOpenapiValidation(value: boolean | cdktf.IResolvable | undefined) {
    this._disableOpenapiValidation = value;
  }
  public resetDisableOpenapiValidation() {
    this._disableOpenapiValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOpenapiValidationInput() {
    return this._disableOpenapiValidation
  }

  // disable_webhooks - computed: false, optional: true, required: false
  private _disableWebhooks?: boolean | cdktf.IResolvable | undefined; 
  public get disableWebhooks() {
    return this.getBooleanAttribute('disable_webhooks') as any;
  }
  public set disableWebhooks(value: boolean | cdktf.IResolvable | undefined) {
    this._disableWebhooks = value;
  }
  public resetDisableWebhooks() {
    this._disableWebhooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWebhooksInput() {
    return this._disableWebhooks
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_crds - computed: false, optional: true, required: false
  private _includeCrds?: boolean | cdktf.IResolvable | undefined; 
  public get includeCrds() {
    return this.getBooleanAttribute('include_crds') as any;
  }
  public set includeCrds(value: boolean | cdktf.IResolvable | undefined) {
    this._includeCrds = value;
  }
  public resetIncludeCrds() {
    this._includeCrds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeCrdsInput() {
    return this._includeCrds
  }

  // is_upgrade - computed: false, optional: true, required: false
  private _isUpgrade?: boolean | cdktf.IResolvable | undefined; 
  public get isUpgrade() {
    return this.getBooleanAttribute('is_upgrade') as any;
  }
  public set isUpgrade(value: boolean | cdktf.IResolvable | undefined) {
    this._isUpgrade = value;
  }
  public resetIsUpgrade() {
    this._isUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUpgradeInput() {
    return this._isUpgrade
  }

  // keyring - computed: false, optional: true, required: false
  private _keyring?: string | undefined; 
  public get keyring() {
    return this.getStringAttribute('keyring');
  }
  public set keyring(value: string | undefined) {
    this._keyring = value;
  }
  public resetKeyring() {
    this._keyring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyringInput() {
    return this._keyring
  }

  // manifest - computed: true, optional: true, required: false
  private _manifest?: string | undefined; 
  public get manifest() {
    return this.getStringAttribute('manifest');
  }
  public set manifest(value: string | undefined) {
    this._manifest = value;
  }
  public resetManifest() {
    this._manifest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestInput() {
    return this._manifest
  }

  // manifests - computed: true, optional: true, required: false
  private _manifests?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get manifests() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('manifests') as any;
  }
  public set manifests(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._manifests = value;
  }
  public resetManifests() {
    this._manifests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestsInput() {
    return this._manifests
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
    return this._name
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string | undefined; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace
  }

  // notes - computed: true, optional: true, required: false
  private _notes?: string | undefined; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string | undefined) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes
  }

  // render_subchart_notes - computed: false, optional: true, required: false
  private _renderSubchartNotes?: boolean | cdktf.IResolvable | undefined; 
  public get renderSubchartNotes() {
    return this.getBooleanAttribute('render_subchart_notes') as any;
  }
  public set renderSubchartNotes(value: boolean | cdktf.IResolvable | undefined) {
    this._renderSubchartNotes = value;
  }
  public resetRenderSubchartNotes() {
    this._renderSubchartNotes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renderSubchartNotesInput() {
    return this._renderSubchartNotes
  }

  // replace - computed: false, optional: true, required: false
  private _replace?: boolean | cdktf.IResolvable | undefined; 
  public get replace() {
    return this.getBooleanAttribute('replace') as any;
  }
  public set replace(value: boolean | cdktf.IResolvable | undefined) {
    this._replace = value;
  }
  public resetReplace() {
    this._replace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string | undefined; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string | undefined) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository
  }

  // repository_ca_file - computed: false, optional: true, required: false
  private _repositoryCaFile?: string | undefined; 
  public get repositoryCaFile() {
    return this.getStringAttribute('repository_ca_file');
  }
  public set repositoryCaFile(value: string | undefined) {
    this._repositoryCaFile = value;
  }
  public resetRepositoryCaFile() {
    this._repositoryCaFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryCaFileInput() {
    return this._repositoryCaFile
  }

  // repository_cert_file - computed: false, optional: true, required: false
  private _repositoryCertFile?: string | undefined; 
  public get repositoryCertFile() {
    return this.getStringAttribute('repository_cert_file');
  }
  public set repositoryCertFile(value: string | undefined) {
    this._repositoryCertFile = value;
  }
  public resetRepositoryCertFile() {
    this._repositoryCertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryCertFileInput() {
    return this._repositoryCertFile
  }

  // repository_key_file - computed: false, optional: true, required: false
  private _repositoryKeyFile?: string | undefined; 
  public get repositoryKeyFile() {
    return this.getStringAttribute('repository_key_file');
  }
  public set repositoryKeyFile(value: string | undefined) {
    this._repositoryKeyFile = value;
  }
  public resetRepositoryKeyFile() {
    this._repositoryKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryKeyFileInput() {
    return this._repositoryKeyFile
  }

  // repository_password - computed: false, optional: true, required: false
  private _repositoryPassword?: string | undefined; 
  public get repositoryPassword() {
    return this.getStringAttribute('repository_password');
  }
  public set repositoryPassword(value: string | undefined) {
    this._repositoryPassword = value;
  }
  public resetRepositoryPassword() {
    this._repositoryPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryPasswordInput() {
    return this._repositoryPassword
  }

  // repository_username - computed: false, optional: true, required: false
  private _repositoryUsername?: string | undefined; 
  public get repositoryUsername() {
    return this.getStringAttribute('repository_username');
  }
  public set repositoryUsername(value: string | undefined) {
    this._repositoryUsername = value;
  }
  public resetRepositoryUsername() {
    this._repositoryUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUsernameInput() {
    return this._repositoryUsername
  }

  // reset_values - computed: false, optional: true, required: false
  private _resetValues?: boolean | cdktf.IResolvable | undefined; 
  public get resetValues() {
    return this.getBooleanAttribute('reset_values') as any;
  }
  public set resetValues(value: boolean | cdktf.IResolvable | undefined) {
    this._resetValues = value;
  }
  public resetResetValues() {
    this._resetValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetValuesInput() {
    return this._resetValues
  }

  // reuse_values - computed: false, optional: true, required: false
  private _reuseValues?: boolean | cdktf.IResolvable | undefined; 
  public get reuseValues() {
    return this.getBooleanAttribute('reuse_values') as any;
  }
  public set reuseValues(value: boolean | cdktf.IResolvable | undefined) {
    this._reuseValues = value;
  }
  public resetReuseValues() {
    this._reuseValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseValuesInput() {
    return this._reuseValues
  }

  // show_only - computed: false, optional: true, required: false
  private _showOnly?: string[] | undefined; 
  public get showOnly() {
    return this.getListAttribute('show_only');
  }
  public set showOnly(value: string[] | undefined) {
    this._showOnly = value;
  }
  public resetShowOnly() {
    this._showOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showOnlyInput() {
    return this._showOnly
  }

  // skip_crds - computed: false, optional: true, required: false
  private _skipCrds?: boolean | cdktf.IResolvable | undefined; 
  public get skipCrds() {
    return this.getBooleanAttribute('skip_crds') as any;
  }
  public set skipCrds(value: boolean | cdktf.IResolvable | undefined) {
    this._skipCrds = value;
  }
  public resetSkipCrds() {
    this._skipCrds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCrdsInput() {
    return this._skipCrds
  }

  // skip_tests - computed: false, optional: true, required: false
  private _skipTests?: boolean | cdktf.IResolvable | undefined; 
  public get skipTests() {
    return this.getBooleanAttribute('skip_tests') as any;
  }
  public set skipTests(value: boolean | cdktf.IResolvable | undefined) {
    this._skipTests = value;
  }
  public resetSkipTests() {
    this._skipTests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipTestsInput() {
    return this._skipTests
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number | undefined; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }

  // validate - computed: false, optional: true, required: false
  private _validate?: boolean | cdktf.IResolvable | undefined; 
  public get validate() {
    return this.getBooleanAttribute('validate') as any;
  }
  public set validate(value: boolean | cdktf.IResolvable | undefined) {
    this._validate = value;
  }
  public resetValidate() {
    this._validate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[] | undefined; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[] | undefined) {
    this._values = value;
  }
  public resetTfValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values
  }

  // verify - computed: false, optional: true, required: false
  private _verify?: boolean | cdktf.IResolvable | undefined; 
  public get verify() {
    return this.getBooleanAttribute('verify') as any;
  }
  public set verify(value: boolean | cdktf.IResolvable | undefined) {
    this._verify = value;
  }
  public resetVerify() {
    this._verify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify
  }

  // version - computed: true, optional: true, required: false
  private _version?: string | undefined; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string | undefined) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // wait - computed: false, optional: true, required: false
  private _wait?: boolean | cdktf.IResolvable | undefined; 
  public get wait() {
    return this.getBooleanAttribute('wait') as any;
  }
  public set wait(value: boolean | cdktf.IResolvable | undefined) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait
  }

  // postrender - computed: false, optional: true, required: false
  private _postrender?: DataHelmTemplatePostrender | undefined; 
  private __postrenderOutput = new DataHelmTemplatePostrenderOutputReference(this as any, "postrender", true);
  public get postrender() {
    return this.__postrenderOutput;
  }
  public putPostrender(value: DataHelmTemplatePostrender | undefined) {
    this._postrender = value;
  }
  public resetPostrender() {
    this._postrender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postrenderInput() {
    return this._postrender
  }

  // set - computed: false, optional: true, required: false
  private _set?: DataHelmTemplateSet[] | undefined; 
  public get set() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('set') as any;
  }
  public set set(value: DataHelmTemplateSet[] | undefined) {
    this._set = value;
  }
  public resetSet() {
    this._set = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set
  }

  // set_sensitive - computed: false, optional: true, required: false
  private _setSensitive?: DataHelmTemplateSetSensitive[] | undefined; 
  public get setSensitive() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('set_sensitive') as any;
  }
  public set setSensitive(value: DataHelmTemplateSetSensitive[] | undefined) {
    this._setSensitive = value;
  }
  public resetSetSensitive() {
    this._setSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setSensitiveInput() {
    return this._setSensitive
  }

  // set_string - computed: false, optional: true, required: false
  private _setString?: DataHelmTemplateSetString[] | undefined; 
  public get setString() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('set_string') as any;
  }
  public set setString(value: DataHelmTemplateSetString[] | undefined) {
    this._setString = value;
  }
  public resetSetString() {
    this._setString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setStringInput() {
    return this._setString
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._apiVersions),
      atomic: cdktf.booleanToTerraform(this._atomic),
      chart: cdktf.stringToTerraform(this._chart),
      create_namespace: cdktf.booleanToTerraform(this._createNamespace),
      dependency_update: cdktf.booleanToTerraform(this._dependencyUpdate),
      description: cdktf.stringToTerraform(this._description),
      devel: cdktf.booleanToTerraform(this._devel),
      disable_openapi_validation: cdktf.booleanToTerraform(this._disableOpenapiValidation),
      disable_webhooks: cdktf.booleanToTerraform(this._disableWebhooks),
      include_crds: cdktf.booleanToTerraform(this._includeCrds),
      is_upgrade: cdktf.booleanToTerraform(this._isUpgrade),
      keyring: cdktf.stringToTerraform(this._keyring),
      manifest: cdktf.stringToTerraform(this._manifest),
      manifests: cdktf.hashMapper(cdktf.anyToTerraform)(this._manifests),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      notes: cdktf.stringToTerraform(this._notes),
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
      show_only: cdktf.listMapper(cdktf.stringToTerraform)(this._showOnly),
      skip_crds: cdktf.booleanToTerraform(this._skipCrds),
      skip_tests: cdktf.booleanToTerraform(this._skipTests),
      timeout: cdktf.numberToTerraform(this._timeout),
      validate: cdktf.booleanToTerraform(this._validate),
      values: cdktf.listMapper(cdktf.stringToTerraform)(this._values),
      verify: cdktf.booleanToTerraform(this._verify),
      version: cdktf.stringToTerraform(this._version),
      wait: cdktf.booleanToTerraform(this._wait),
      postrender: dataHelmTemplatePostrenderToTerraform(this._postrender),
      set: cdktf.listMapper(dataHelmTemplateSetToTerraform)(this._set),
      set_sensitive: cdktf.listMapper(dataHelmTemplateSetSensitiveToTerraform)(this._setSensitive),
      set_string: cdktf.listMapper(dataHelmTemplateSetStringToTerraform)(this._setString),
    };
  }
}
