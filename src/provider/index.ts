/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HelmProviderConfig {
  /**
  * Helm burst limit. Increase this if you have a cluster with many CRDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#burst_limit HelmProvider#burst_limit}
  */
  readonly burstLimit?: number;
  /**
  * Debug indicates whether or not Helm is running in Debug mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#debug HelmProvider#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * The backend storage driver. Values are: configmap, secret, memory, sql
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#helm_driver HelmProvider#helm_driver}
  */
  readonly helmDriver?: string;
  /**
  * The path to the helm plugins directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#plugins_path HelmProvider#plugins_path}
  */
  readonly pluginsPath?: string;
  /**
  * The path to the registry config file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#registry_config_path HelmProvider#registry_config_path}
  */
  readonly registryConfigPath?: string;
  /**
  * The path to the file containing cached repository indexes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#repository_cache HelmProvider#repository_cache}
  */
  readonly repositoryCache?: string;
  /**
  * The path to the file containing repository names and URLs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#repository_config_path HelmProvider#repository_config_path}
  */
  readonly repositoryConfigPath?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#alias HelmProvider#alias}
  */
  readonly alias?: string;
  /**
  * experiments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#experiments HelmProvider#experiments}
  */
  readonly experiments?: HelmProviderExperiments;
  /**
  * kubernetes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#kubernetes HelmProvider#kubernetes}
  */
  readonly kubernetes?: HelmProviderKubernetes;
  /**
  * registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#registry HelmProvider#registry}
  */
  readonly registry?: HelmProviderRegistry[] | cdktf.IResolvable;
}
export interface HelmProviderExperiments {
  /**
  * Enable full diff by storing the rendered manifest in the state. This has similar limitations as when using helm install --dry-run. See https://helm.sh/docs/chart_best_practices/custom_resource_definitions/#install-a-crd-declaration-before-using-the-resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#manifest HelmProvider#manifest}
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


export function helmProviderExperimentsToHclTerraform(struct?: HelmProviderExperiments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    manifest: {
      value: cdktf.booleanToHclTerraform(struct!.manifest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface HelmProviderKubernetesExec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#api_version HelmProvider#api_version}
  */
  readonly apiVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#args HelmProvider#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#command HelmProvider#command}
  */
  readonly command: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#env HelmProvider#env}
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


export function helmProviderKubernetesExecToHclTerraform(struct?: HelmProviderKubernetesExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface HelmProviderKubernetes {
  /**
  * PEM-encoded client certificate for TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#client_certificate HelmProvider#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * PEM-encoded client certificate key for TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#client_key HelmProvider#client_key}
  */
  readonly clientKey?: string;
  /**
  * PEM-encoded root certificates bundle for TLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#cluster_ca_certificate HelmProvider#cluster_ca_certificate}
  */
  readonly clusterCaCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#config_context HelmProvider#config_context}
  */
  readonly configContext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#config_context_auth_info HelmProvider#config_context_auth_info}
  */
  readonly configContextAuthInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#config_context_cluster HelmProvider#config_context_cluster}
  */
  readonly configContextCluster?: string;
  /**
  * Path to the kube config file. Can be set with KUBE_CONFIG_PATH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#config_path HelmProvider#config_path}
  */
  readonly configPath?: string;
  /**
  * A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#config_paths HelmProvider#config_paths}
  */
  readonly configPaths?: string[];
  /**
  * The hostname (in form of URI) of Kubernetes master.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#host HelmProvider#host}
  */
  readonly host?: string;
  /**
  * Whether server should be accessed without verifying the TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#insecure HelmProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#password HelmProvider#password}
  */
  readonly password?: string;
  /**
  * URL to the proxy to be used for all API requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#proxy_url HelmProvider#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * Server name passed to the server for SNI and is used in the client to check server certificates against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#tls_server_name HelmProvider#tls_server_name}
  */
  readonly tlsServerName?: string;
  /**
  * Token to authenticate an service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#token HelmProvider#token}
  */
  readonly token?: string;
  /**
  * The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#username HelmProvider#username}
  */
  readonly username?: string;
  /**
  * exec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#exec HelmProvider#exec}
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
    tls_server_name: cdktf.stringToTerraform(struct!.tlsServerName),
    token: cdktf.stringToTerraform(struct!.token),
    username: cdktf.stringToTerraform(struct!.username),
    exec: helmProviderKubernetesExecToTerraform(struct!.exec),
  }
}


export function helmProviderKubernetesToHclTerraform(struct?: HelmProviderKubernetes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clusterCaCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_context: {
      value: cdktf.stringToHclTerraform(struct!.configContext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_context_auth_info: {
      value: cdktf.stringToHclTerraform(struct!.configContextAuthInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_context_cluster: {
      value: cdktf.stringToHclTerraform(struct!.configContextCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_path: {
      value: cdktf.stringToHclTerraform(struct!.configPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.configPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_url: {
      value: cdktf.stringToHclTerraform(struct!.proxyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_server_name: {
      value: cdktf.stringToHclTerraform(struct!.tlsServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exec: {
      value: helmProviderKubernetesExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "list",
      storageClassType: "HelmProviderKubernetesExecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface HelmProviderRegistry {
  /**
  * The password to use for the OCI HTTP basic authentication when accessing the Kubernetes master endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#password HelmProvider#password}
  */
  readonly password: string;
  /**
  * OCI URL in form of oci://host:port or oci://host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#url HelmProvider#url}
  */
  readonly url: string;
  /**
  * The username to use for the OCI HTTP basic authentication when accessing the Kubernetes master endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#username HelmProvider#username}
  */
  readonly username: string;
}

export function helmProviderRegistryToTerraform(struct?: HelmProviderRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function helmProviderRegistryToHclTerraform(struct?: HelmProviderRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs helm}
*/
export class HelmProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "helm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HelmProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HelmProvider to import
  * @param importFromId The id of the existing HelmProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HelmProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "helm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/helm/2.17.0/docs helm} Resource
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
        providerVersion: '2.17.0',
        providerVersionConstraint: '~> 2.3'
      },
      terraformProviderSource: 'helm'
    });
    this._burstLimit = config.burstLimit;
    this._debug = config.debug;
    this._helmDriver = config.helmDriver;
    this._pluginsPath = config.pluginsPath;
    this._registryConfigPath = config.registryConfigPath;
    this._repositoryCache = config.repositoryCache;
    this._repositoryConfigPath = config.repositoryConfigPath;
    this._alias = config.alias;
    this._experiments = config.experiments;
    this._kubernetes = config.kubernetes;
    this._registry = config.registry;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // burst_limit - computed: false, optional: true, required: false
  private _burstLimit?: number; 
  public get burstLimit() {
    return this._burstLimit;
  }
  public set burstLimit(value: number | undefined) {
    this._burstLimit = value;
  }
  public resetBurstLimit() {
    this._burstLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstLimitInput() {
    return this._burstLimit;
  }

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

  // registry - computed: false, optional: true, required: false
  private _registry?: HelmProviderRegistry[] | cdktf.IResolvable; 
  public get registry() {
    return this._registry;
  }
  public set registry(value: HelmProviderRegistry[] | cdktf.IResolvable | undefined) {
    this._registry = value;
  }
  public resetRegistry() {
    this._registry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      burst_limit: cdktf.numberToTerraform(this._burstLimit),
      debug: cdktf.booleanToTerraform(this._debug),
      helm_driver: cdktf.stringToTerraform(this._helmDriver),
      plugins_path: cdktf.stringToTerraform(this._pluginsPath),
      registry_config_path: cdktf.stringToTerraform(this._registryConfigPath),
      repository_cache: cdktf.stringToTerraform(this._repositoryCache),
      repository_config_path: cdktf.stringToTerraform(this._repositoryConfigPath),
      alias: cdktf.stringToTerraform(this._alias),
      experiments: helmProviderExperimentsToTerraform(this._experiments),
      kubernetes: helmProviderKubernetesToTerraform(this._kubernetes),
      registry: cdktf.listMapper(helmProviderRegistryToTerraform, true)(this._registry),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      burst_limit: {
        value: cdktf.numberToHclTerraform(this._burstLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      debug: {
        value: cdktf.booleanToHclTerraform(this._debug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      helm_driver: {
        value: cdktf.stringToHclTerraform(this._helmDriver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugins_path: {
        value: cdktf.stringToHclTerraform(this._pluginsPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_config_path: {
        value: cdktf.stringToHclTerraform(this._registryConfigPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_cache: {
        value: cdktf.stringToHclTerraform(this._repositoryCache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_config_path: {
        value: cdktf.stringToHclTerraform(this._repositoryConfigPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      experiments: {
        value: helmProviderExperimentsToHclTerraform(this._experiments),
        isBlock: true,
        type: "list",
        storageClassType: "HelmProviderExperimentsList",
      },
      kubernetes: {
        value: helmProviderKubernetesToHclTerraform(this._kubernetes),
        isBlock: true,
        type: "list",
        storageClassType: "HelmProviderKubernetesList",
      },
      registry: {
        value: cdktf.listMapperHcl(helmProviderRegistryToHclTerraform, true)(this._registry),
        isBlock: true,
        type: "list",
        storageClassType: "HelmProviderRegistryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
