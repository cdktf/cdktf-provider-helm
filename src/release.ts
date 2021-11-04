// https://www.terraform.io/docs/providers/helm/r/release.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReleaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#atomic Release#atomic}
  */
  readonly atomic?: boolean | cdktf.IResolvable;
  /**
  * Chart name to be installed. A path may be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#chart Release#chart}
  */
  readonly chart: string;
  /**
  * Allow deletion of new resources created in this upgrade when upgrade fails
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#cleanup_on_fail Release#cleanup_on_fail}
  */
  readonly cleanupOnFail?: boolean | cdktf.IResolvable;
  /**
  * Create the namespace if it does not exist
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#create_namespace Release#create_namespace}
  */
  readonly createNamespace?: boolean | cdktf.IResolvable;
  /**
  * Run helm dependency update before installing the chart
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#dependency_update Release#dependency_update}
  */
  readonly dependencyUpdate?: boolean | cdktf.IResolvable;
  /**
  * Add a custom description
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#description Release#description}
  */
  readonly description?: string;
  /**
  * Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#devel Release#devel}
  */
  readonly devel?: boolean | cdktf.IResolvable;
  /**
  * Prevent CRD hooks from, running, but run other hooks.  See helm install --no-crd-hook
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#disable_crd_hooks Release#disable_crd_hooks}
  */
  readonly disableCrdHooks?: boolean | cdktf.IResolvable;
  /**
  * If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#disable_openapi_validation Release#disable_openapi_validation}
  */
  readonly disableOpenapiValidation?: boolean | cdktf.IResolvable;
  /**
  * Prevent hooks from running.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#disable_webhooks Release#disable_webhooks}
  */
  readonly disableWebhooks?: boolean | cdktf.IResolvable;
  /**
  * Force resource update through delete/recreate if needed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#force_update Release#force_update}
  */
  readonly forceUpdate?: boolean | cdktf.IResolvable;
  /**
  * Location of public keys used for verification. Used only if `verify` is true
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#keyring Release#keyring}
  */
  readonly keyring?: string;
  /**
  * Run helm lint when planning
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#lint Release#lint}
  */
  readonly lint?: boolean | cdktf.IResolvable;
  /**
  * Limit the maximum number of revisions saved per release. Use 0 for no limit
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#max_history Release#max_history}
  */
  readonly maxHistory?: number;
  /**
  * Release name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#name Release#name}
  */
  readonly name: string;
  /**
  * Namespace to install the release into.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#namespace Release#namespace}
  */
  readonly namespace?: string;
  /**
  * Perform pods restart during upgrade/rollback
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#recreate_pods Release#recreate_pods}
  */
  readonly recreatePods?: boolean | cdktf.IResolvable;
  /**
  * If set, render subchart notes along with the parent
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#render_subchart_notes Release#render_subchart_notes}
  */
  readonly renderSubchartNotes?: boolean | cdktf.IResolvable;
  /**
  * Re-use the given name, even if that name is already used. This is unsafe in production
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#replace Release#replace}
  */
  readonly replace?: boolean | cdktf.IResolvable;
  /**
  * Repository where to locate the requested chart. If is a URL the chart is installed without installing the repository.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#repository Release#repository}
  */
  readonly repository?: string;
  /**
  * The Repositories CA File
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#repository_ca_file Release#repository_ca_file}
  */
  readonly repositoryCaFile?: string;
  /**
  * The repositories cert file
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#repository_cert_file Release#repository_cert_file}
  */
  readonly repositoryCertFile?: string;
  /**
  * The repositories cert key file
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#repository_key_file Release#repository_key_file}
  */
  readonly repositoryKeyFile?: string;
  /**
  * Password for HTTP basic authentication
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#repository_password Release#repository_password}
  */
  readonly repositoryPassword?: string;
  /**
  * Username for HTTP basic authentication
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#repository_username Release#repository_username}
  */
  readonly repositoryUsername?: string;
  /**
  * When upgrading, reset the values to the ones built into the chart
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#reset_values Release#reset_values}
  */
  readonly resetValues?: boolean | cdktf.IResolvable;
  /**
  * When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#reuse_values Release#reuse_values}
  */
  readonly reuseValues?: boolean | cdktf.IResolvable;
  /**
  * If set, no CRDs will be installed. By default, CRDs are installed if not already present
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#skip_crds Release#skip_crds}
  */
  readonly skipCrds?: boolean | cdktf.IResolvable;
  /**
  * Time in seconds to wait for any individual kubernetes operation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#timeout Release#timeout}
  */
  readonly timeout?: number;
  /**
  * List of values in raw yaml format to pass to helm.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#values Release#values}
  */
  readonly values?: string[];
  /**
  * Verify the package before installing it.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#verify Release#verify}
  */
  readonly verify?: boolean | cdktf.IResolvable;
  /**
  * Specify the exact chart version to install. If this is not specified, the latest version is installed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#version Release#version}
  */
  readonly version?: string;
  /**
  * Will wait until all resources are in a ready state before marking the release as successful.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#wait Release#wait}
  */
  readonly wait?: boolean | cdktf.IResolvable;
  /**
  * If wait is enabled, will wait until all Jobs have been completed before marking the release as successful.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#wait_for_jobs Release#wait_for_jobs}
  */
  readonly waitForJobs?: boolean | cdktf.IResolvable;
  /**
  * postrender block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#postrender Release#postrender}
  */
  readonly postrender?: ReleasePostrender;
  /**
  * set block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#set Release#set}
  */
  readonly set?: ReleaseSet[];
  /**
  * set_sensitive block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#set_sensitive Release#set_sensitive}
  */
  readonly setSensitive?: ReleaseSetSensitive[];
}
export class ReleaseMetadata extends cdktf.ComplexComputedList {

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
export interface ReleasePostrender {
  /**
  * The command binary path.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#binary_path Release#binary_path}
  */
  readonly binaryPath: string;
}

function releasePostrenderToTerraform(struct?: ReleasePostrenderOutputReference | ReleasePostrender): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binary_path: cdktf.stringToTerraform(struct!.binaryPath),
  }
}

export class ReleasePostrenderOutputReference extends cdktf.ComplexObject {
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
export interface ReleaseSet {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#name Release#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#type Release#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#value Release#value}
  */
  readonly value: string;
}

function releaseSetToTerraform(struct?: ReleaseSet): any {
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

export interface ReleaseSetSensitive {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#name Release#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#type Release#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm/r/release.html#value Release#value}
  */
  readonly value: string;
}

function releaseSetSensitiveToTerraform(struct?: ReleaseSetSensitive): any {
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/helm/r/release.html helm_release}
*/
export class Release extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "helm_release";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/helm/r/release.html helm_release} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReleaseConfig
  */
  public constructor(scope: Construct, id: string, config: ReleaseConfig) {
    super(scope, id, {
      terraformResourceType: 'helm_release',
      terraformGeneratorMetadata: {
        providerName: 'helm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
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
    this._keyring = config.keyring;
    this._lint = config.lint;
    this._maxHistory = config.maxHistory;
    this._name = config.name;
    this._namespace = config.namespace;
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
    this._postrender = config.postrender;
    this._set = config.set;
    this._setSensitive = config.setSensitive;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // cleanup_on_fail - computed: false, optional: true, required: false
  private _cleanupOnFail?: boolean | cdktf.IResolvable | undefined; 
  public get cleanupOnFail() {
    return this.getBooleanAttribute('cleanup_on_fail') as any;
  }
  public set cleanupOnFail(value: boolean | cdktf.IResolvable | undefined) {
    this._cleanupOnFail = value;
  }
  public resetCleanupOnFail() {
    this._cleanupOnFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupOnFailInput() {
    return this._cleanupOnFail
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

  // disable_crd_hooks - computed: false, optional: true, required: false
  private _disableCrdHooks?: boolean | cdktf.IResolvable | undefined; 
  public get disableCrdHooks() {
    return this.getBooleanAttribute('disable_crd_hooks') as any;
  }
  public set disableCrdHooks(value: boolean | cdktf.IResolvable | undefined) {
    this._disableCrdHooks = value;
  }
  public resetDisableCrdHooks() {
    this._disableCrdHooks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCrdHooksInput() {
    return this._disableCrdHooks
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

  // force_update - computed: false, optional: true, required: false
  private _forceUpdate?: boolean | cdktf.IResolvable | undefined; 
  public get forceUpdate() {
    return this.getBooleanAttribute('force_update') as any;
  }
  public set forceUpdate(value: boolean | cdktf.IResolvable | undefined) {
    this._forceUpdate = value;
  }
  public resetForceUpdate() {
    this._forceUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpdateInput() {
    return this._forceUpdate
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // lint - computed: false, optional: true, required: false
  private _lint?: boolean | cdktf.IResolvable | undefined; 
  public get lint() {
    return this.getBooleanAttribute('lint') as any;
  }
  public set lint(value: boolean | cdktf.IResolvable | undefined) {
    this._lint = value;
  }
  public resetLint() {
    this._lint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lintInput() {
    return this._lint
  }

  // manifest - computed: true, optional: false, required: false
  public get manifest() {
    return this.getStringAttribute('manifest');
  }

  // max_history - computed: false, optional: true, required: false
  private _maxHistory?: number | undefined; 
  public get maxHistory() {
    return this.getNumberAttribute('max_history');
  }
  public set maxHistory(value: number | undefined) {
    this._maxHistory = value;
  }
  public resetMaxHistory() {
    this._maxHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHistoryInput() {
    return this._maxHistory
  }

  // metadata - computed: true, optional: false, required: false
  public metadata(index: string) {
    return new ReleaseMetadata(this, 'metadata', index);
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

  // recreate_pods - computed: false, optional: true, required: false
  private _recreatePods?: boolean | cdktf.IResolvable | undefined; 
  public get recreatePods() {
    return this.getBooleanAttribute('recreate_pods') as any;
  }
  public set recreatePods(value: boolean | cdktf.IResolvable | undefined) {
    this._recreatePods = value;
  }
  public resetRecreatePods() {
    this._recreatePods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recreatePodsInput() {
    return this._recreatePods
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // wait_for_jobs - computed: false, optional: true, required: false
  private _waitForJobs?: boolean | cdktf.IResolvable | undefined; 
  public get waitForJobs() {
    return this.getBooleanAttribute('wait_for_jobs') as any;
  }
  public set waitForJobs(value: boolean | cdktf.IResolvable | undefined) {
    this._waitForJobs = value;
  }
  public resetWaitForJobs() {
    this._waitForJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForJobsInput() {
    return this._waitForJobs
  }

  // postrender - computed: false, optional: true, required: false
  private _postrender?: ReleasePostrender | undefined; 
  private __postrenderOutput = new ReleasePostrenderOutputReference(this as any, "postrender", true);
  public get postrender() {
    return this.__postrenderOutput;
  }
  public putPostrender(value: ReleasePostrender | undefined) {
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
  private _set?: ReleaseSet[] | undefined; 
  public get set() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('set') as any;
  }
  public set set(value: ReleaseSet[] | undefined) {
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
  private _setSensitive?: ReleaseSetSensitive[] | undefined; 
  public get setSensitive() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('set_sensitive') as any;
  }
  public set setSensitive(value: ReleaseSetSensitive[] | undefined) {
    this._setSensitive = value;
  }
  public resetSetSensitive() {
    this._setSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setSensitiveInput() {
    return this._setSensitive
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
      keyring: cdktf.stringToTerraform(this._keyring),
      lint: cdktf.booleanToTerraform(this._lint),
      max_history: cdktf.numberToTerraform(this._maxHistory),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
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
      values: cdktf.listMapper(cdktf.stringToTerraform)(this._values),
      verify: cdktf.booleanToTerraform(this._verify),
      version: cdktf.stringToTerraform(this._version),
      wait: cdktf.booleanToTerraform(this._wait),
      wait_for_jobs: cdktf.booleanToTerraform(this._waitForJobs),
      postrender: releasePostrenderToTerraform(this._postrender),
      set: cdktf.listMapper(releaseSetToTerraform)(this._set),
      set_sensitive: cdktf.listMapper(releaseSetSensitiveToTerraform)(this._setSensitive),
    };
  }
}
