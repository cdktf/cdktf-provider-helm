# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-helm.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HelmProvider <a name="HelmProvider" id="@cdktf/provider-helm.provider.HelmProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs helm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.provider.HelmProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import provider

provider.HelmProvider(
  scope: Construct,
  id: str,
  alias: str = None,
  burst_limit: typing.Union[int, float] = None,
  debug: typing.Union[bool, IResolvable] = None,
  experiments: HelmProviderExperiments = None,
  helm_driver: str = None,
  kubernetes: HelmProviderKubernetes = None,
  plugins_path: str = None,
  registries: typing.Union[IResolvable, typing.List[HelmProviderRegistries]] = None,
  registry_config_path: str = None,
  repository_cache: str = None,
  repository_config_path: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.burstLimit">burst_limit</a></code> | <code>typing.Union[int, float]</code> | Helm burst limit. Increase this if you have a cluster with many CRDs. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.debug">debug</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Debug indicates whether or not Helm is running in Debug mode. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.experiments">experiments</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a></code> | Enable and disable experimental features. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.helmDriver">helm_driver</a></code> | <code>str</code> | The backend storage driver. Values are: configmap, secret, memory, sql. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a></code> | Kubernetes Configuration. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.pluginsPath">plugins_path</a></code> | <code>str</code> | The path to the helm plugins directory. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.registries">registries</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.provider.HelmProviderRegistries">HelmProviderRegistries</a>]]</code> | RegistryClient configuration. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.registryConfigPath">registry_config_path</a></code> | <code>str</code> | The path to the registry config file. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.repositoryCache">repository_cache</a></code> | <code>str</code> | The path to the file containing cached repository indexes. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.repositoryConfigPath">repository_config_path</a></code> | <code>str</code> | The path to the file containing repository names and URLs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#alias HelmProvider#alias}

---

##### `burst_limit`<sup>Optional</sup> <a name="burst_limit" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.burstLimit"></a>

- *Type:* typing.Union[int, float]

Helm burst limit. Increase this if you have a cluster with many CRDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#burst_limit HelmProvider#burst_limit}

---

##### `debug`<sup>Optional</sup> <a name="debug" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.debug"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Debug indicates whether or not Helm is running in Debug mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#debug HelmProvider#debug}

---

##### `experiments`<sup>Optional</sup> <a name="experiments" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.experiments"></a>

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a>

Enable and disable experimental features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#experiments HelmProvider#experiments}

---

##### `helm_driver`<sup>Optional</sup> <a name="helm_driver" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.helmDriver"></a>

- *Type:* str

The backend storage driver. Values are: configmap, secret, memory, sql.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#helm_driver HelmProvider#helm_driver}

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.kubernetes"></a>

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a>

Kubernetes Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#kubernetes HelmProvider#kubernetes}

---

##### `plugins_path`<sup>Optional</sup> <a name="plugins_path" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.pluginsPath"></a>

- *Type:* str

The path to the helm plugins directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#plugins_path HelmProvider#plugins_path}

---

##### `registries`<sup>Optional</sup> <a name="registries" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.registries"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.provider.HelmProviderRegistries">HelmProviderRegistries</a>]]

RegistryClient configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#registries HelmProvider#registries}

---

##### `registry_config_path`<sup>Optional</sup> <a name="registry_config_path" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.registryConfigPath"></a>

- *Type:* str

The path to the registry config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#registry_config_path HelmProvider#registry_config_path}

---

##### `repository_cache`<sup>Optional</sup> <a name="repository_cache" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.repositoryCache"></a>

- *Type:* str

The path to the file containing cached repository indexes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#repository_cache HelmProvider#repository_cache}

---

##### `repository_config_path`<sup>Optional</sup> <a name="repository_config_path" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.repositoryConfigPath"></a>

- *Type:* str

The path to the file containing repository names and URLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#repository_config_path HelmProvider#repository_config_path}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetBurstLimit">reset_burst_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetDebug">reset_debug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetExperiments">reset_experiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetHelmDriver">reset_helm_driver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetKubernetes">reset_kubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetPluginsPath">reset_plugins_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetRegistries">reset_registries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetRegistryConfigPath">reset_registry_config_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetRepositoryCache">reset_repository_cache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetRepositoryConfigPath">reset_repository_config_path</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-helm.provider.HelmProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-helm.provider.HelmProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-helm.provider.HelmProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.provider.HelmProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-helm.provider.HelmProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-helm.provider.HelmProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-helm.provider.HelmProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-helm.provider.HelmProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-helm.provider.HelmProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-helm.provider.HelmProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-helm.provider.HelmProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_burst_limit` <a name="reset_burst_limit" id="@cdktf/provider-helm.provider.HelmProvider.resetBurstLimit"></a>

```python
def reset_burst_limit() -> None
```

##### `reset_debug` <a name="reset_debug" id="@cdktf/provider-helm.provider.HelmProvider.resetDebug"></a>

```python
def reset_debug() -> None
```

##### `reset_experiments` <a name="reset_experiments" id="@cdktf/provider-helm.provider.HelmProvider.resetExperiments"></a>

```python
def reset_experiments() -> None
```

##### `reset_helm_driver` <a name="reset_helm_driver" id="@cdktf/provider-helm.provider.HelmProvider.resetHelmDriver"></a>

```python
def reset_helm_driver() -> None
```

##### `reset_kubernetes` <a name="reset_kubernetes" id="@cdktf/provider-helm.provider.HelmProvider.resetKubernetes"></a>

```python
def reset_kubernetes() -> None
```

##### `reset_plugins_path` <a name="reset_plugins_path" id="@cdktf/provider-helm.provider.HelmProvider.resetPluginsPath"></a>

```python
def reset_plugins_path() -> None
```

##### `reset_registries` <a name="reset_registries" id="@cdktf/provider-helm.provider.HelmProvider.resetRegistries"></a>

```python
def reset_registries() -> None
```

##### `reset_registry_config_path` <a name="reset_registry_config_path" id="@cdktf/provider-helm.provider.HelmProvider.resetRegistryConfigPath"></a>

```python
def reset_registry_config_path() -> None
```

##### `reset_repository_cache` <a name="reset_repository_cache" id="@cdktf/provider-helm.provider.HelmProvider.resetRepositoryCache"></a>

```python
def reset_repository_cache() -> None
```

##### `reset_repository_config_path` <a name="reset_repository_config_path" id="@cdktf/provider-helm.provider.HelmProvider.resetRepositoryConfigPath"></a>

```python
def reset_repository_config_path() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a HelmProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-helm.provider.HelmProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_helm import provider

provider.HelmProvider.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-helm.provider.HelmProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-helm.provider.HelmProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_helm import provider

provider.HelmProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-helm.provider.HelmProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-helm.provider.HelmProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_helm import provider

provider.HelmProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-helm.provider.HelmProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-helm.provider.HelmProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_helm import provider

provider.HelmProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a HelmProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-helm.provider.HelmProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-helm.provider.HelmProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the HelmProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-helm.provider.HelmProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing HelmProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-helm.provider.HelmProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HelmProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.burstLimitInput">burst_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.debugInput">debug_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.experimentsInput">experiments_input</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.helmDriverInput">helm_driver_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.kubernetesInput">kubernetes_input</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.pluginsPathInput">plugins_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.registriesInput">registries_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.provider.HelmProviderRegistries">HelmProviderRegistries</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.registryConfigPathInput">registry_config_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.repositoryCacheInput">repository_cache_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.repositoryConfigPathInput">repository_config_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.burstLimit">burst_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.debug">debug</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.experiments">experiments</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.helmDriver">helm_driver</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.pluginsPath">plugins_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.registries">registries</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.provider.HelmProviderRegistries">HelmProviderRegistries</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.registryConfigPath">registry_config_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.repositoryCache">repository_cache</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.repositoryConfigPath">repository_config_path</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-helm.provider.HelmProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-helm.provider.HelmProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.provider.HelmProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-helm.provider.HelmProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-helm.provider.HelmProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-helm.provider.HelmProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-helm.provider.HelmProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-helm.provider.HelmProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-helm.provider.HelmProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-helm.provider.HelmProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `burst_limit_input`<sup>Optional</sup> <a name="burst_limit_input" id="@cdktf/provider-helm.provider.HelmProvider.property.burstLimitInput"></a>

```python
burst_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `debug_input`<sup>Optional</sup> <a name="debug_input" id="@cdktf/provider-helm.provider.HelmProvider.property.debugInput"></a>

```python
debug_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `experiments_input`<sup>Optional</sup> <a name="experiments_input" id="@cdktf/provider-helm.provider.HelmProvider.property.experimentsInput"></a>

```python
experiments_input: HelmProviderExperiments
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a>

---

##### `helm_driver_input`<sup>Optional</sup> <a name="helm_driver_input" id="@cdktf/provider-helm.provider.HelmProvider.property.helmDriverInput"></a>

```python
helm_driver_input: str
```

- *Type:* str

---

##### `kubernetes_input`<sup>Optional</sup> <a name="kubernetes_input" id="@cdktf/provider-helm.provider.HelmProvider.property.kubernetesInput"></a>

```python
kubernetes_input: HelmProviderKubernetes
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a>

---

##### `plugins_path_input`<sup>Optional</sup> <a name="plugins_path_input" id="@cdktf/provider-helm.provider.HelmProvider.property.pluginsPathInput"></a>

```python
plugins_path_input: str
```

- *Type:* str

---

##### `registries_input`<sup>Optional</sup> <a name="registries_input" id="@cdktf/provider-helm.provider.HelmProvider.property.registriesInput"></a>

```python
registries_input: typing.Union[IResolvable, typing.List[HelmProviderRegistries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.provider.HelmProviderRegistries">HelmProviderRegistries</a>]]

---

##### `registry_config_path_input`<sup>Optional</sup> <a name="registry_config_path_input" id="@cdktf/provider-helm.provider.HelmProvider.property.registryConfigPathInput"></a>

```python
registry_config_path_input: str
```

- *Type:* str

---

##### `repository_cache_input`<sup>Optional</sup> <a name="repository_cache_input" id="@cdktf/provider-helm.provider.HelmProvider.property.repositoryCacheInput"></a>

```python
repository_cache_input: str
```

- *Type:* str

---

##### `repository_config_path_input`<sup>Optional</sup> <a name="repository_config_path_input" id="@cdktf/provider-helm.provider.HelmProvider.property.repositoryConfigPathInput"></a>

```python
repository_config_path_input: str
```

- *Type:* str

---

##### `burst_limit`<sup>Optional</sup> <a name="burst_limit" id="@cdktf/provider-helm.provider.HelmProvider.property.burstLimit"></a>

```python
burst_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `debug`<sup>Optional</sup> <a name="debug" id="@cdktf/provider-helm.provider.HelmProvider.property.debug"></a>

```python
debug: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `experiments`<sup>Optional</sup> <a name="experiments" id="@cdktf/provider-helm.provider.HelmProvider.property.experiments"></a>

```python
experiments: HelmProviderExperiments
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a>

---

##### `helm_driver`<sup>Optional</sup> <a name="helm_driver" id="@cdktf/provider-helm.provider.HelmProvider.property.helmDriver"></a>

```python
helm_driver: str
```

- *Type:* str

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktf/provider-helm.provider.HelmProvider.property.kubernetes"></a>

```python
kubernetes: HelmProviderKubernetes
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a>

---

##### `plugins_path`<sup>Optional</sup> <a name="plugins_path" id="@cdktf/provider-helm.provider.HelmProvider.property.pluginsPath"></a>

```python
plugins_path: str
```

- *Type:* str

---

##### `registries`<sup>Optional</sup> <a name="registries" id="@cdktf/provider-helm.provider.HelmProvider.property.registries"></a>

```python
registries: typing.Union[IResolvable, typing.List[HelmProviderRegistries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.provider.HelmProviderRegistries">HelmProviderRegistries</a>]]

---

##### `registry_config_path`<sup>Optional</sup> <a name="registry_config_path" id="@cdktf/provider-helm.provider.HelmProvider.property.registryConfigPath"></a>

```python
registry_config_path: str
```

- *Type:* str

---

##### `repository_cache`<sup>Optional</sup> <a name="repository_cache" id="@cdktf/provider-helm.provider.HelmProvider.property.repositoryCache"></a>

```python
repository_cache: str
```

- *Type:* str

---

##### `repository_config_path`<sup>Optional</sup> <a name="repository_config_path" id="@cdktf/provider-helm.provider.HelmProvider.property.repositoryConfigPath"></a>

```python
repository_config_path: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-helm.provider.HelmProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HelmProviderConfig <a name="HelmProviderConfig" id="@cdktf/provider-helm.provider.HelmProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.provider.HelmProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import provider

provider.HelmProviderConfig(
  alias: str = None,
  burst_limit: typing.Union[int, float] = None,
  debug: typing.Union[bool, IResolvable] = None,
  experiments: HelmProviderExperiments = None,
  helm_driver: str = None,
  kubernetes: HelmProviderKubernetes = None,
  plugins_path: str = None,
  registries: typing.Union[IResolvable, typing.List[HelmProviderRegistries]] = None,
  registry_config_path: str = None,
  repository_cache: str = None,
  repository_config_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.burstLimit">burst_limit</a></code> | <code>typing.Union[int, float]</code> | Helm burst limit. Increase this if you have a cluster with many CRDs. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.debug">debug</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Debug indicates whether or not Helm is running in Debug mode. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.experiments">experiments</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a></code> | Enable and disable experimental features. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.helmDriver">helm_driver</a></code> | <code>str</code> | The backend storage driver. Values are: configmap, secret, memory, sql. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a></code> | Kubernetes Configuration. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.pluginsPath">plugins_path</a></code> | <code>str</code> | The path to the helm plugins directory. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.registries">registries</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.provider.HelmProviderRegistries">HelmProviderRegistries</a>]]</code> | RegistryClient configuration. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.registryConfigPath">registry_config_path</a></code> | <code>str</code> | The path to the registry config file. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.repositoryCache">repository_cache</a></code> | <code>str</code> | The path to the file containing cached repository indexes. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.repositoryConfigPath">repository_config_path</a></code> | <code>str</code> | The path to the file containing repository names and URLs. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#alias HelmProvider#alias}

---

##### `burst_limit`<sup>Optional</sup> <a name="burst_limit" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.burstLimit"></a>

```python
burst_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Helm burst limit. Increase this if you have a cluster with many CRDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#burst_limit HelmProvider#burst_limit}

---

##### `debug`<sup>Optional</sup> <a name="debug" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.debug"></a>

```python
debug: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Debug indicates whether or not Helm is running in Debug mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#debug HelmProvider#debug}

---

##### `experiments`<sup>Optional</sup> <a name="experiments" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.experiments"></a>

```python
experiments: HelmProviderExperiments
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a>

Enable and disable experimental features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#experiments HelmProvider#experiments}

---

##### `helm_driver`<sup>Optional</sup> <a name="helm_driver" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.helmDriver"></a>

```python
helm_driver: str
```

- *Type:* str

The backend storage driver. Values are: configmap, secret, memory, sql.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#helm_driver HelmProvider#helm_driver}

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.kubernetes"></a>

```python
kubernetes: HelmProviderKubernetes
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a>

Kubernetes Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#kubernetes HelmProvider#kubernetes}

---

##### `plugins_path`<sup>Optional</sup> <a name="plugins_path" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.pluginsPath"></a>

```python
plugins_path: str
```

- *Type:* str

The path to the helm plugins directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#plugins_path HelmProvider#plugins_path}

---

##### `registries`<sup>Optional</sup> <a name="registries" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.registries"></a>

```python
registries: typing.Union[IResolvable, typing.List[HelmProviderRegistries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.provider.HelmProviderRegistries">HelmProviderRegistries</a>]]

RegistryClient configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#registries HelmProvider#registries}

---

##### `registry_config_path`<sup>Optional</sup> <a name="registry_config_path" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.registryConfigPath"></a>

```python
registry_config_path: str
```

- *Type:* str

The path to the registry config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#registry_config_path HelmProvider#registry_config_path}

---

##### `repository_cache`<sup>Optional</sup> <a name="repository_cache" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.repositoryCache"></a>

```python
repository_cache: str
```

- *Type:* str

The path to the file containing cached repository indexes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#repository_cache HelmProvider#repository_cache}

---

##### `repository_config_path`<sup>Optional</sup> <a name="repository_config_path" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.repositoryConfigPath"></a>

```python
repository_config_path: str
```

- *Type:* str

The path to the file containing repository names and URLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#repository_config_path HelmProvider#repository_config_path}

---

### HelmProviderExperiments <a name="HelmProviderExperiments" id="@cdktf/provider-helm.provider.HelmProviderExperiments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.provider.HelmProviderExperiments.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import provider

provider.HelmProviderExperiments(
  manifest: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderExperiments.property.manifest">manifest</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable full diff by storing the rendered manifest in the state. |

---

##### `manifest`<sup>Optional</sup> <a name="manifest" id="@cdktf/provider-helm.provider.HelmProviderExperiments.property.manifest"></a>

```python
manifest: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable full diff by storing the rendered manifest in the state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#manifest HelmProvider#manifest}

---

### HelmProviderKubernetes <a name="HelmProviderKubernetes" id="@cdktf/provider-helm.provider.HelmProviderKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import provider

provider.HelmProviderKubernetes(
  client_certificate: str = None,
  client_key: str = None,
  cluster_ca_certificate: str = None,
  config_context: str = None,
  config_context_auth_info: str = None,
  config_context_cluster: str = None,
  config_path: str = None,
  config_paths: typing.List[str] = None,
  exec: HelmProviderKubernetesExec = None,
  host: str = None,
  insecure: typing.Union[bool, IResolvable] = None,
  password: str = None,
  proxy_url: str = None,
  tls_server_name: str = None,
  token: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.clientCertificate">client_certificate</a></code> | <code>str</code> | PEM-encoded client certificate for TLS authentication. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.clientKey">client_key</a></code> | <code>str</code> | PEM-encoded client certificate key for TLS authentication. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.clusterCaCertificate">cluster_ca_certificate</a></code> | <code>str</code> | PEM-encoded root certificates bundle for TLS authentication. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configContext">config_context</a></code> | <code>str</code> | Context to choose from the config file. Can be sourced from KUBE_CTX. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configContextAuthInfo">config_context_auth_info</a></code> | <code>str</code> | Authentication info context of the kube config (name of the kubeconfig user, --user flag in kubectl). |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configContextCluster">config_context_cluster</a></code> | <code>str</code> | Cluster context of the kube config (name of the kubeconfig cluster, --cluster flag in kubectl). |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configPath">config_path</a></code> | <code>str</code> | Path to the kube config file. Can be set with KUBE_CONFIG_PATH. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configPaths">config_paths</a></code> | <code>typing.List[str]</code> | A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.exec">exec</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetesExec">HelmProviderKubernetesExec</a></code> | Exec configuration for Kubernetes authentication. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.host">host</a></code> | <code>str</code> | The hostname (in form of URI) of kubernetes master. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether server should be accessed without verifying the TLS certificate. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.password">password</a></code> | <code>str</code> | The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.proxyUrl">proxy_url</a></code> | <code>str</code> | URL to the proxy to be used for all API requests. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.tlsServerName">tls_server_name</a></code> | <code>str</code> | Server name passed to the server for SNI and is used in the client to check server certificates against. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.token">token</a></code> | <code>str</code> | Token to authenticate a service account. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.username">username</a></code> | <code>str</code> | The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint. |

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

PEM-encoded client certificate for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#client_certificate HelmProvider#client_certificate}

---

##### `client_key`<sup>Optional</sup> <a name="client_key" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.clientKey"></a>

```python
client_key: str
```

- *Type:* str

PEM-encoded client certificate key for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#client_key HelmProvider#client_key}

---

##### `cluster_ca_certificate`<sup>Optional</sup> <a name="cluster_ca_certificate" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.clusterCaCertificate"></a>

```python
cluster_ca_certificate: str
```

- *Type:* str

PEM-encoded root certificates bundle for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#cluster_ca_certificate HelmProvider#cluster_ca_certificate}

---

##### `config_context`<sup>Optional</sup> <a name="config_context" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configContext"></a>

```python
config_context: str
```

- *Type:* str

Context to choose from the config file. Can be sourced from KUBE_CTX.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#config_context HelmProvider#config_context}

---

##### `config_context_auth_info`<sup>Optional</sup> <a name="config_context_auth_info" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configContextAuthInfo"></a>

```python
config_context_auth_info: str
```

- *Type:* str

Authentication info context of the kube config (name of the kubeconfig user, --user flag in kubectl).

Can be sourced from KUBE_CTX_AUTH_INFO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#config_context_auth_info HelmProvider#config_context_auth_info}

---

##### `config_context_cluster`<sup>Optional</sup> <a name="config_context_cluster" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configContextCluster"></a>

```python
config_context_cluster: str
```

- *Type:* str

Cluster context of the kube config (name of the kubeconfig cluster, --cluster flag in kubectl).

Can be sourced from KUBE_CTX_CLUSTER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#config_context_cluster HelmProvider#config_context_cluster}

---

##### `config_path`<sup>Optional</sup> <a name="config_path" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configPath"></a>

```python
config_path: str
```

- *Type:* str

Path to the kube config file. Can be set with KUBE_CONFIG_PATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#config_path HelmProvider#config_path}

---

##### `config_paths`<sup>Optional</sup> <a name="config_paths" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configPaths"></a>

```python
config_paths: typing.List[str]
```

- *Type:* typing.List[str]

A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#config_paths HelmProvider#config_paths}

---

##### `exec`<sup>Optional</sup> <a name="exec" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.exec"></a>

```python
exec: HelmProviderKubernetesExec
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderKubernetesExec">HelmProviderKubernetesExec</a>

Exec configuration for Kubernetes authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#exec HelmProvider#exec}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.host"></a>

```python
host: str
```

- *Type:* str

The hostname (in form of URI) of kubernetes master.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#host HelmProvider#host}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.insecure"></a>

```python
insecure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether server should be accessed without verifying the TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#insecure HelmProvider#insecure}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.password"></a>

```python
password: str
```

- *Type:* str

The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#password HelmProvider#password}

---

##### `proxy_url`<sup>Optional</sup> <a name="proxy_url" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.proxyUrl"></a>

```python
proxy_url: str
```

- *Type:* str

URL to the proxy to be used for all API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#proxy_url HelmProvider#proxy_url}

---

##### `tls_server_name`<sup>Optional</sup> <a name="tls_server_name" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.tlsServerName"></a>

```python
tls_server_name: str
```

- *Type:* str

Server name passed to the server for SNI and is used in the client to check server certificates against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#tls_server_name HelmProvider#tls_server_name}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.token"></a>

```python
token: str
```

- *Type:* str

Token to authenticate a service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#token HelmProvider#token}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.username"></a>

```python
username: str
```

- *Type:* str

The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#username HelmProvider#username}

---

### HelmProviderKubernetesExec <a name="HelmProviderKubernetesExec" id="@cdktf/provider-helm.provider.HelmProviderKubernetesExec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.provider.HelmProviderKubernetesExec.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import provider

provider.HelmProviderKubernetesExec(
  api_version: str,
  command: str,
  args: typing.List[str] = None,
  env: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.apiVersion">api_version</a></code> | <code>str</code> | API version for the exec plugin. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.command">command</a></code> | <code>str</code> | Command to run for Kubernetes exec plugin. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.args">args</a></code> | <code>typing.List[str]</code> | Arguments for the exec plugin. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.env">env</a></code> | <code>typing.Mapping[str]</code> | Environment variables for the exec plugin. |

---

##### `api_version`<sup>Required</sup> <a name="api_version" id="@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.apiVersion"></a>

```python
api_version: str
```

- *Type:* str

API version for the exec plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#api_version HelmProvider#api_version}

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.command"></a>

```python
command: str
```

- *Type:* str

Command to run for Kubernetes exec plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#command HelmProvider#command}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

Arguments for the exec plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#args HelmProvider#args}

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.env"></a>

```python
env: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Environment variables for the exec plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#env HelmProvider#env}

---

### HelmProviderRegistries <a name="HelmProviderRegistries" id="@cdktf/provider-helm.provider.HelmProviderRegistries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.provider.HelmProviderRegistries.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import provider

provider.HelmProviderRegistries(
  password: str,
  url: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderRegistries.property.password">password</a></code> | <code>str</code> | The password to use for the OCI HTTP basic authentication when accessing the Kubernetes master endpoint. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderRegistries.property.url">url</a></code> | <code>str</code> | OCI URL in form of oci://host:port or oci://host. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderRegistries.property.username">username</a></code> | <code>str</code> | The username to use for the OCI HTTP basic authentication when accessing the Kubernetes master endpoint. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-helm.provider.HelmProviderRegistries.property.password"></a>

```python
password: str
```

- *Type:* str

The password to use for the OCI HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#password HelmProvider#password}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-helm.provider.HelmProviderRegistries.property.url"></a>

```python
url: str
```

- *Type:* str

OCI URL in form of oci://host:port or oci://host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#url HelmProvider#url}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-helm.provider.HelmProviderRegistries.property.username"></a>

```python
username: str
```

- *Type:* str

The username to use for the OCI HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.1/docs#username HelmProvider#username}

---



