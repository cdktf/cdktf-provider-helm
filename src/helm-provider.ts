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

function helmProviderExperimentsToTerraform(struct?: HelmProviderExperimentsOutputReference | HelmProviderExperiments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manifest: cdktf.booleanToTerraform(struct!.manifest),
  }
}

export class HelmProviderExperimentsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // manifest - computed: false, optional: true, required: false
  private _manifest?: boolean | cdktf.IResolvable | undefined; 
  public get manifest() {
    return this._manifest;
  }
  public set manifest(value: boolean | cdktf.IResolvable | undefined| undefined) {
    this._manifest = value;
  }
  public resetManifest() {
    this._manifest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestInput() {
    return this._manifest
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
  readonly env?: { [key: string]: string } | cdktf.IResolvable;
}

function helmProviderKubernetesExecToTerraform(struct?: HelmProviderKubernetesExecOutputReference | HelmProviderKubernetesExec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    command: cdktf.stringToTerraform(struct!.command),
    env: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.env),
  }
}

export class HelmProviderKubernetesExecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this._apiVersion;
  }
  public set apiVersion(value: string| undefined) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[] | undefined; 
  public get args() {
    return this._args;
  }
  public set args(value: string[] | undefined| undefined) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args
  }

  // command - computed: false, optional: false, required: true
  private _command?: string; 
  public get command() {
    return this._command;
  }
  public set command(value: string| undefined) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get env() {
    return this._env;
  }
  public set env(value: { [key: string]: string } | cdktf.IResolvable | undefined| undefined) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env
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

function helmProviderKubernetesToTerraform(struct?: HelmProviderKubernetesOutputReference | HelmProviderKubernetes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
    config_paths: cdktf.listMapper(cdktf.stringToTerraform)(struct!.configPaths),
    host: cdktf.stringToTerraform(struct!.host),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    password: cdktf.stringToTerraform(struct!.password),
    token: cdktf.stringToTerraform(struct!.token),
    username: cdktf.stringToTerraform(struct!.username),
    exec: helmProviderKubernetesExecToTerraform(struct!.exec),
  }
}

export class HelmProviderKubernetesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string | undefined; 
  public get clientCertificate() {
    return this._clientCertificate;
  }
  public set clientCertificate(value: string | undefined| undefined) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string | undefined; 
  public get clientKey() {
    return this._clientKey;
  }
  public set clientKey(value: string | undefined| undefined) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey
  }

  // cluster_ca_certificate - computed: false, optional: true, required: false
  private _clusterCaCertificate?: string | undefined; 
  public get clusterCaCertificate() {
    return this._clusterCaCertificate;
  }
  public set clusterCaCertificate(value: string | undefined| undefined) {
    this._clusterCaCertificate = value;
  }
  public resetClusterCaCertificate() {
    this._clusterCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCaCertificateInput() {
    return this._clusterCaCertificate
  }

  // config_context - computed: false, optional: true, required: false
  private _configContext?: string | undefined; 
  public get configContext() {
    return this._configContext;
  }
  public set configContext(value: string | undefined| undefined) {
    this._configContext = value;
  }
  public resetConfigContext() {
    this._configContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configContextInput() {
    return this._configContext
  }

  // config_context_auth_info - computed: false, optional: true, required: false
  private _configContextAuthInfo?: string | undefined; 
  public get configContextAuthInfo() {
    return this._configContextAuthInfo;
  }
  public set configContextAuthInfo(value: string | undefined| undefined) {
    this._configContextAuthInfo = value;
  }
  public resetConfigContextAuthInfo() {
    this._configContextAuthInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configContextAuthInfoInput() {
    return this._configContextAuthInfo
  }

  // config_context_cluster - computed: false, optional: true, required: false
  private _configContextCluster?: string | undefined; 
  public get configContextCluster() {
    return this._configContextCluster;
  }
  public set configContextCluster(value: string | undefined| undefined) {
    this._configContextCluster = value;
  }
  public resetConfigContextCluster() {
    this._configContextCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configContextClusterInput() {
    return this._configContextCluster
  }

  // config_path - computed: false, optional: true, required: false
  private _configPath?: string | undefined; 
  public get configPath() {
    return this._configPath;
  }
  public set configPath(value: string | undefined| undefined) {
    this._configPath = value;
  }
  public resetConfigPath() {
    this._configPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configPathInput() {
    return this._configPath
  }

  // config_paths - computed: false, optional: true, required: false
  private _configPaths?: string[] | undefined; 
  public get configPaths() {
    return this._configPaths;
  }
  public set configPaths(value: string[] | undefined| undefined) {
    this._configPaths = value;
  }
  public resetConfigPaths() {
    this._configPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configPathsInput() {
    return this._configPaths
  }

  // host - computed: false, optional: true, required: false
  private _host?: string | undefined; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined| undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable | undefined; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined| undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure
  }

  // password - computed: false, optional: true, required: false
  private _password?: string | undefined; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined| undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
  }

  // token - computed: false, optional: true, required: false
  private _token?: string | undefined; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined| undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token
  }

  // username - computed: false, optional: true, required: false
  private _username?: string | undefined; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined| undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username
  }

  // exec - computed: false, optional: true, required: false
  private _exec?: HelmProviderKubernetesExec | undefined; 
  public get exec() {
    return this._exec;
  }
  public set exec(value: HelmProviderKubernetesExec | undefined| undefined) {
    this._exec = value;
  }
  public resetExec() {
    this._exec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/helm helm}
*/
export class HelmProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "helm";

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
  private _debug?: boolean | cdktf.IResolvable | undefined; 
  public get debug() {
    return this._debug;
  }
  public set debug(value: boolean | cdktf.IResolvable | undefined| undefined) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug
  }

  // helm_driver - computed: false, optional: true, required: false
  private _helmDriver?: string | undefined; 
  public get helmDriver() {
    return this._helmDriver;
  }
  public set helmDriver(value: string | undefined| undefined) {
    this._helmDriver = value;
  }
  public resetHelmDriver() {
    this._helmDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmDriverInput() {
    return this._helmDriver
  }

  // plugins_path - computed: false, optional: true, required: false
  private _pluginsPath?: string | undefined; 
  public get pluginsPath() {
    return this._pluginsPath;
  }
  public set pluginsPath(value: string | undefined| undefined) {
    this._pluginsPath = value;
  }
  public resetPluginsPath() {
    this._pluginsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsPathInput() {
    return this._pluginsPath
  }

  // registry_config_path - computed: false, optional: true, required: false
  private _registryConfigPath?: string | undefined; 
  public get registryConfigPath() {
    return this._registryConfigPath;
  }
  public set registryConfigPath(value: string | undefined| undefined) {
    this._registryConfigPath = value;
  }
  public resetRegistryConfigPath() {
    this._registryConfigPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryConfigPathInput() {
    return this._registryConfigPath
  }

  // repository_cache - computed: false, optional: true, required: false
  private _repositoryCache?: string | undefined; 
  public get repositoryCache() {
    return this._repositoryCache;
  }
  public set repositoryCache(value: string | undefined| undefined) {
    this._repositoryCache = value;
  }
  public resetRepositoryCache() {
    this._repositoryCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryCacheInput() {
    return this._repositoryCache
  }

  // repository_config_path - computed: false, optional: true, required: false
  private _repositoryConfigPath?: string | undefined; 
  public get repositoryConfigPath() {
    return this._repositoryConfigPath;
  }
  public set repositoryConfigPath(value: string | undefined| undefined) {
    this._repositoryConfigPath = value;
  }
  public resetRepositoryConfigPath() {
    this._repositoryConfigPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryConfigPathInput() {
    return this._repositoryConfigPath
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string | undefined; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined| undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias
  }

  // experiments - computed: false, optional: true, required: false
  private _experiments?: HelmProviderExperiments | undefined; 
  public get experiments() {
    return this._experiments;
  }
  public set experiments(value: HelmProviderExperiments | undefined| undefined) {
    this._experiments = value;
  }
  public resetExperiments() {
    this._experiments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentsInput() {
    return this._experiments
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes?: HelmProviderKubernetes | undefined; 
  public get kubernetes() {
    return this._kubernetes;
  }
  public set kubernetes(value: HelmProviderKubernetes | undefined| undefined) {
    this._kubernetes = value;
  }
  public resetKubernetes() {
    this._kubernetes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes
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
