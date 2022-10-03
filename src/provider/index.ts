// https://www.terraform.io/docs/providers/helm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HelmProviderConfig {
  /**
  * Debug indicates whether or not Helm is running in Debug mode.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#debug HelmProvider#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * The backend storage driver. Values are: configmap, secret, memory, sql
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#helm_driver HelmProvider#helm_driver}
  */
  readonly helmDriver?: string;
  /**
  * The path to the helm plugins directory
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#plugins_path HelmProvider#plugins_path}
  */
  readonly pluginsPath?: string;
  /**
  * The path to the registry config file
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#registry_config_path HelmProvider#registry_config_path}
  */
  readonly registryConfigPath?: string;
  /**
  * The path to the file containing cached repository indexes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#repository_cache HelmProvider#repository_cache}
  */
  readonly repositoryCache?: string;
  /**
  * The path to the file containing repository names and URLs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#repository_config_path HelmProvider#repository_config_path}
  */
  readonly repositoryConfigPath?: string;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#alias HelmProvider#alias}
  */
  readonly alias?: string;
  /**
  * experiments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#experiments HelmProvider#experiments}
  */
  readonly experiments?: HelmProviderExperiments;
  /**
  * kubernetes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#kubernetes HelmProvider#kubernetes}
  */
  readonly kubernetes?: HelmProviderKubernetes;
}
export interface HelmProviderExperiments {
  /**
  * Enable full diff by storing the rendered manifest in the state.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#manifest HelmProvider#manifest}
  */
  readonly manifest?: boolean | cdktf.IResolvable;
}

export function helmProviderExperimentsToTerraform(struct?: HelmProviderExperiments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manifest: cdktf.booleanToTerraform(struct!.manifest),
  }
}

export interface HelmProviderKubernetesExec {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#api_version HelmProvider#api_version}
  */
  readonly apiVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#args HelmProvider#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#command HelmProvider#command}
  */
  readonly command: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#env HelmProvider#env}
  */
  readonly env?: { [key: string]: string };
}

export function helmProviderKubernetesExecToTerraform(struct?: HelmProviderKubernetesExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.stringToTerraform(struct!.command),
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
  }
}

export interface HelmProviderKubernetes {
  /**
  * PEM-encoded client certificate for TLS authentication.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#client_certificate HelmProvider#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * PEM-encoded client certificate key for TLS authentication.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#client_key HelmProvider#client_key}
  */
  readonly clientKey?: string;
  /**
  * PEM-encoded root certificates bundle for TLS authentication.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#cluster_ca_certificate HelmProvider#cluster_ca_certificate}
  */
  readonly clusterCaCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#config_context HelmProvider#config_context}
  */
  readonly configContext?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#config_context_auth_info HelmProvider#config_context_auth_info}
  */
  readonly configContextAuthInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#config_context_cluster HelmProvider#config_context_cluster}
  */
  readonly configContextCluster?: string;
  /**
  * Path to the kube config file. Can be set with KUBE_CONFIG_PATH.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#config_path HelmProvider#config_path}
  */
  readonly configPath?: string;
  /**
  * A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#config_paths HelmProvider#config_paths}
  */
  readonly configPaths?: string[];
  /**
  * The hostname (in form of URI) of Kubernetes master.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#host HelmProvider#host}
  */
  readonly host?: string;
  /**
  * Whether server should be accessed without verifying the TLS certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#insecure HelmProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#password HelmProvider#password}
  */
  readonly password?: string;
  /**
  * URL to the proxy to be used for all API requests
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#proxy_url HelmProvider#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * Token to authenticate an service account
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#token HelmProvider#token}
  */
  readonly token?: string;
  /**
  * The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#username HelmProvider#username}
  */
  readonly username?: string;
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/helm#exec HelmProvider#exec}
  */
  readonly exec?: HelmProviderKubernetesExec;
}

export function helmProviderKubernetesToTerraform(struct?: HelmProviderKubernetes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
    cluster_ca_certificate: cdktf.stringToTerraform(struct!.clusterCaCertificate),
    config_context: cdktf.stringToTerraform(struct!.configContext),
    config_context_auth_info: cdktf.stringToTerraform(struct!.configContextAuthInfo),
    config_context_cluster: cdktf.stringToTerraform(struct!.configContextCluster),
    config_path: cdktf.stringToTerraform(struct!.configPath),
    config_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.configPaths),
    host: cdktf.stringToTerraform(struct!.host),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    password: cdktf.stringToTerraform(struct!.password),
    proxy_url: cdktf.stringToTerraform(struct!.proxyUrl),
    token: cdktf.stringToTerraform(struct!.token),
    username: cdktf.stringToTerraform(struct!.username),
    exec: helmProviderKubernetesExecToTerraform(struct!.exec),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/helm helm}
*/
export class HelmProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "helm";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/helm helm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HelmProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: HelmProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'helm',
      terraformGeneratorMetadata: {
        providerName: 'helm',
        providerVersion: '2.7.0',
        providerVersionConstraint: '~> 2.3'
      },
      terraformProviderSource: 'helm'
    });
    this._debug = config.debug;
    this._helmDriver = config.helmDriver;
    this._pluginsPath = config.pluginsPath;
    this._registryConfigPath = config.registryConfigPath;
    this._repositoryCache = config.repositoryCache;
    this._repositoryConfigPath = config.repositoryConfigPath;
    this._alias = config.alias;
    this._experiments = config.experiments;
    this._kubernetes = config.kubernetes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // debug - computed: false, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this._debug;
  }
  public set debug(value: boolean | cdktf.IResolvable | undefined) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // helm_driver - computed: false, optional: true, required: false
  private _helmDriver?: string; 
  public get helmDriver() {
    return this._helmDriver;
  }
  public set helmDriver(value: string | undefined) {
    this._helmDriver = value;
  }
  public resetHelmDriver() {
    this._helmDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmDriverInput() {
    return this._helmDriver;
  }

  // plugins_path - computed: false, optional: true, required: false
  private _pluginsPath?: string; 
  public get pluginsPath() {
    return this._pluginsPath;
  }
  public set pluginsPath(value: string | undefined) {
    this._pluginsPath = value;
  }
  public resetPluginsPath() {
    this._pluginsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsPathInput() {
    return this._pluginsPath;
  }

  // registry_config_path - computed: false, optional: true, required: false
  private _registryConfigPath?: string; 
  public get registryConfigPath() {
    return this._registryConfigPath;
  }
  public set registryConfigPath(value: string | undefined) {
    this._registryConfigPath = value;
  }
  public resetRegistryConfigPath() {
    this._registryConfigPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryConfigPathInput() {
    return this._registryConfigPath;
  }

  // repository_cache - computed: false, optional: true, required: false
  private _repositoryCache?: string; 
  public get repositoryCache() {
    return this._repositoryCache;
  }
  public set repositoryCache(value: string | undefined) {
    this._repositoryCache = value;
  }
  public resetRepositoryCache() {
    this._repositoryCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryCacheInput() {
    return this._repositoryCache;
  }

  // repository_config_path - computed: false, optional: true, required: false
  private _repositoryConfigPath?: string; 
  public get repositoryConfigPath() {
    return this._repositoryConfigPath;
  }
  public set repositoryConfigPath(value: string | undefined) {
    this._repositoryConfigPath = value;
  }
  public resetRepositoryConfigPath() {
    this._repositoryConfigPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryConfigPathInput() {
    return this._repositoryConfigPath;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // experiments - computed: false, optional: true, required: false
  private _experiments?: HelmProviderExperiments; 
  public get experiments() {
    return this._experiments;
  }
  public set experiments(value: HelmProviderExperiments | undefined) {
    this._experiments = value;
  }
  public resetExperiments() {
    this._experiments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentsInput() {
    return this._experiments;
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes?: HelmProviderKubernetes; 
  public get kubernetes() {
    return this._kubernetes;
  }
  public set kubernetes(value: HelmProviderKubernetes | undefined) {
    this._kubernetes = value;
  }
  public resetKubernetes() {
    this._kubernetes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      debug: cdktf.booleanToTerraform(this._debug),
      helm_driver: cdktf.stringToTerraform(this._helmDriver),
      plugins_path: cdktf.stringToTerraform(this._pluginsPath),
      registry_config_path: cdktf.stringToTerraform(this._registryConfigPath),
      repository_cache: cdktf.stringToTerraform(this._repositoryCache),
      repository_config_path: cdktf.stringToTerraform(this._repositoryConfigPath),
      alias: cdktf.stringToTerraform(this._alias),
      experiments: helmProviderExperimentsToTerraform(this._experiments),
      kubernetes: helmProviderKubernetesToTerraform(this._kubernetes),
    };
  }
}
