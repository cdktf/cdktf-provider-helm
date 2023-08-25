# `provider`

Refer to the Terraform Registory for docs: [`helm`](https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-helm.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HelmProvider <a name="HelmProvider" id="@cdktf/provider-helm.provider.HelmProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs helm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.provider.HelmProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Helm;

new HelmProvider(Construct Scope, string Id, HelmProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig">HelmProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderConfig">HelmProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetBurstLimit">ResetBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetDebug">ResetDebug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetExperiments">ResetExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetHelmDriver">ResetHelmDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetKubernetes">ResetKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetPluginsPath">ResetPluginsPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetRegistry">ResetRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetRegistryConfigPath">ResetRegistryConfigPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetRepositoryCache">ResetRepositoryCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetRepositoryConfigPath">ResetRepositoryConfigPath</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.provider.HelmProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-helm.provider.HelmProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-helm.provider.HelmProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-helm.provider.HelmProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-helm.provider.HelmProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-helm.provider.HelmProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-helm.provider.HelmProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-helm.provider.HelmProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-helm.provider.HelmProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-helm.provider.HelmProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetBurstLimit` <a name="ResetBurstLimit" id="@cdktf/provider-helm.provider.HelmProvider.resetBurstLimit"></a>

```csharp
private void ResetBurstLimit()
```

##### `ResetDebug` <a name="ResetDebug" id="@cdktf/provider-helm.provider.HelmProvider.resetDebug"></a>

```csharp
private void ResetDebug()
```

##### `ResetExperiments` <a name="ResetExperiments" id="@cdktf/provider-helm.provider.HelmProvider.resetExperiments"></a>

```csharp
private void ResetExperiments()
```

##### `ResetHelmDriver` <a name="ResetHelmDriver" id="@cdktf/provider-helm.provider.HelmProvider.resetHelmDriver"></a>

```csharp
private void ResetHelmDriver()
```

##### `ResetKubernetes` <a name="ResetKubernetes" id="@cdktf/provider-helm.provider.HelmProvider.resetKubernetes"></a>

```csharp
private void ResetKubernetes()
```

##### `ResetPluginsPath` <a name="ResetPluginsPath" id="@cdktf/provider-helm.provider.HelmProvider.resetPluginsPath"></a>

```csharp
private void ResetPluginsPath()
```

##### `ResetRegistry` <a name="ResetRegistry" id="@cdktf/provider-helm.provider.HelmProvider.resetRegistry"></a>

```csharp
private void ResetRegistry()
```

##### `ResetRegistryConfigPath` <a name="ResetRegistryConfigPath" id="@cdktf/provider-helm.provider.HelmProvider.resetRegistryConfigPath"></a>

```csharp
private void ResetRegistryConfigPath()
```

##### `ResetRepositoryCache` <a name="ResetRepositoryCache" id="@cdktf/provider-helm.provider.HelmProvider.resetRepositoryCache"></a>

```csharp
private void ResetRepositoryCache()
```

##### `ResetRepositoryConfigPath` <a name="ResetRepositoryConfigPath" id="@cdktf/provider-helm.provider.HelmProvider.resetRepositoryConfigPath"></a>

```csharp
private void ResetRepositoryConfigPath()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-helm.provider.HelmProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Helm;

HelmProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-helm.provider.HelmProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-helm.provider.HelmProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Helm;

HelmProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-helm.provider.HelmProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-helm.provider.HelmProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Helm;

HelmProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-helm.provider.HelmProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.burstLimitInput">BurstLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.debugInput">DebugInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.experimentsInput">ExperimentsInput</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.helmDriverInput">HelmDriverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.kubernetesInput">KubernetesInput</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.pluginsPathInput">PluginsPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.registryConfigPathInput">RegistryConfigPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.registryInput">RegistryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.repositoryCacheInput">RepositoryCacheInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.repositoryConfigPathInput">RepositoryConfigPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.burstLimit">BurstLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.debug">Debug</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.experiments">Experiments</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.helmDriver">HelmDriver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.kubernetes">Kubernetes</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.pluginsPath">PluginsPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.registry">Registry</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.registryConfigPath">RegistryConfigPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.repositoryCache">RepositoryCache</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.repositoryConfigPath">RepositoryConfigPath</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-helm.provider.HelmProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-helm.provider.HelmProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.provider.HelmProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-helm.provider.HelmProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-helm.provider.HelmProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-helm.provider.HelmProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-helm.provider.HelmProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-helm.provider.HelmProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-helm.provider.HelmProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-helm.provider.HelmProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `BurstLimitInput`<sup>Optional</sup> <a name="BurstLimitInput" id="@cdktf/provider-helm.provider.HelmProvider.property.burstLimitInput"></a>

```csharp
public double BurstLimitInput { get; }
```

- *Type:* double

---

##### `DebugInput`<sup>Optional</sup> <a name="DebugInput" id="@cdktf/provider-helm.provider.HelmProvider.property.debugInput"></a>

```csharp
public object DebugInput { get; }
```

- *Type:* object

---

##### `ExperimentsInput`<sup>Optional</sup> <a name="ExperimentsInput" id="@cdktf/provider-helm.provider.HelmProvider.property.experimentsInput"></a>

```csharp
public HelmProviderExperiments ExperimentsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a>

---

##### `HelmDriverInput`<sup>Optional</sup> <a name="HelmDriverInput" id="@cdktf/provider-helm.provider.HelmProvider.property.helmDriverInput"></a>

```csharp
public string HelmDriverInput { get; }
```

- *Type:* string

---

##### `KubernetesInput`<sup>Optional</sup> <a name="KubernetesInput" id="@cdktf/provider-helm.provider.HelmProvider.property.kubernetesInput"></a>

```csharp
public HelmProviderKubernetes KubernetesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a>

---

##### `PluginsPathInput`<sup>Optional</sup> <a name="PluginsPathInput" id="@cdktf/provider-helm.provider.HelmProvider.property.pluginsPathInput"></a>

```csharp
public string PluginsPathInput { get; }
```

- *Type:* string

---

##### `RegistryConfigPathInput`<sup>Optional</sup> <a name="RegistryConfigPathInput" id="@cdktf/provider-helm.provider.HelmProvider.property.registryConfigPathInput"></a>

```csharp
public string RegistryConfigPathInput { get; }
```

- *Type:* string

---

##### `RegistryInput`<sup>Optional</sup> <a name="RegistryInput" id="@cdktf/provider-helm.provider.HelmProvider.property.registryInput"></a>

```csharp
public object RegistryInput { get; }
```

- *Type:* object

---

##### `RepositoryCacheInput`<sup>Optional</sup> <a name="RepositoryCacheInput" id="@cdktf/provider-helm.provider.HelmProvider.property.repositoryCacheInput"></a>

```csharp
public string RepositoryCacheInput { get; }
```

- *Type:* string

---

##### `RepositoryConfigPathInput`<sup>Optional</sup> <a name="RepositoryConfigPathInput" id="@cdktf/provider-helm.provider.HelmProvider.property.repositoryConfigPathInput"></a>

```csharp
public string RepositoryConfigPathInput { get; }
```

- *Type:* string

---

##### `BurstLimit`<sup>Optional</sup> <a name="BurstLimit" id="@cdktf/provider-helm.provider.HelmProvider.property.burstLimit"></a>

```csharp
public double BurstLimit { get; }
```

- *Type:* double

---

##### `Debug`<sup>Optional</sup> <a name="Debug" id="@cdktf/provider-helm.provider.HelmProvider.property.debug"></a>

```csharp
public object Debug { get; }
```

- *Type:* object

---

##### `Experiments`<sup>Optional</sup> <a name="Experiments" id="@cdktf/provider-helm.provider.HelmProvider.property.experiments"></a>

```csharp
public HelmProviderExperiments Experiments { get; }
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a>

---

##### `HelmDriver`<sup>Optional</sup> <a name="HelmDriver" id="@cdktf/provider-helm.provider.HelmProvider.property.helmDriver"></a>

```csharp
public string HelmDriver { get; }
```

- *Type:* string

---

##### `Kubernetes`<sup>Optional</sup> <a name="Kubernetes" id="@cdktf/provider-helm.provider.HelmProvider.property.kubernetes"></a>

```csharp
public HelmProviderKubernetes Kubernetes { get; }
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a>

---

##### `PluginsPath`<sup>Optional</sup> <a name="PluginsPath" id="@cdktf/provider-helm.provider.HelmProvider.property.pluginsPath"></a>

```csharp
public string PluginsPath { get; }
```

- *Type:* string

---

##### `Registry`<sup>Optional</sup> <a name="Registry" id="@cdktf/provider-helm.provider.HelmProvider.property.registry"></a>

```csharp
public object Registry { get; }
```

- *Type:* object

---

##### `RegistryConfigPath`<sup>Optional</sup> <a name="RegistryConfigPath" id="@cdktf/provider-helm.provider.HelmProvider.property.registryConfigPath"></a>

```csharp
public string RegistryConfigPath { get; }
```

- *Type:* string

---

##### `RepositoryCache`<sup>Optional</sup> <a name="RepositoryCache" id="@cdktf/provider-helm.provider.HelmProvider.property.repositoryCache"></a>

```csharp
public string RepositoryCache { get; }
```

- *Type:* string

---

##### `RepositoryConfigPath`<sup>Optional</sup> <a name="RepositoryConfigPath" id="@cdktf/provider-helm.provider.HelmProvider.property.repositoryConfigPath"></a>

```csharp
public string RepositoryConfigPath { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-helm.provider.HelmProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HelmProviderConfig <a name="HelmProviderConfig" id="@cdktf/provider-helm.provider.HelmProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.provider.HelmProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Helm;

new HelmProviderConfig {
    string Alias = null,
    double BurstLimit = null,
    object Debug = null,
    HelmProviderExperiments Experiments = null,
    string HelmDriver = null,
    HelmProviderKubernetes Kubernetes = null,
    string PluginsPath = null,
    object Registry = null,
    string RegistryConfigPath = null,
    string RepositoryCache = null,
    string RepositoryConfigPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.burstLimit">BurstLimit</a></code> | <code>double</code> | Helm burst limit. Increase this if you have a cluster with many CRDs. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.debug">Debug</a></code> | <code>object</code> | Debug indicates whether or not Helm is running in Debug mode. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.experiments">Experiments</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a></code> | experiments block. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.helmDriver">HelmDriver</a></code> | <code>string</code> | The backend storage driver. Values are: configmap, secret, memory, sql. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.kubernetes">Kubernetes</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.pluginsPath">PluginsPath</a></code> | <code>string</code> | The path to the helm plugins directory. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.registry">Registry</a></code> | <code>object</code> | registry block. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.registryConfigPath">RegistryConfigPath</a></code> | <code>string</code> | The path to the registry config file. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.repositoryCache">RepositoryCache</a></code> | <code>string</code> | The path to the file containing cached repository indexes. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.repositoryConfigPath">RepositoryConfigPath</a></code> | <code>string</code> | The path to the file containing repository names and URLs. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#alias HelmProvider#alias}

---

##### `BurstLimit`<sup>Optional</sup> <a name="BurstLimit" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.burstLimit"></a>

```csharp
public double BurstLimit { get; set; }
```

- *Type:* double

Helm burst limit. Increase this if you have a cluster with many CRDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#burst_limit HelmProvider#burst_limit}

---

##### `Debug`<sup>Optional</sup> <a name="Debug" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.debug"></a>

```csharp
public object Debug { get; set; }
```

- *Type:* object

Debug indicates whether or not Helm is running in Debug mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#debug HelmProvider#debug}

---

##### `Experiments`<sup>Optional</sup> <a name="Experiments" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.experiments"></a>

```csharp
public HelmProviderExperiments Experiments { get; set; }
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a>

experiments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#experiments HelmProvider#experiments}

---

##### `HelmDriver`<sup>Optional</sup> <a name="HelmDriver" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.helmDriver"></a>

```csharp
public string HelmDriver { get; set; }
```

- *Type:* string

The backend storage driver. Values are: configmap, secret, memory, sql.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#helm_driver HelmProvider#helm_driver}

---

##### `Kubernetes`<sup>Optional</sup> <a name="Kubernetes" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.kubernetes"></a>

```csharp
public HelmProviderKubernetes Kubernetes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#kubernetes HelmProvider#kubernetes}

---

##### `PluginsPath`<sup>Optional</sup> <a name="PluginsPath" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.pluginsPath"></a>

```csharp
public string PluginsPath { get; set; }
```

- *Type:* string

The path to the helm plugins directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#plugins_path HelmProvider#plugins_path}

---

##### `Registry`<sup>Optional</sup> <a name="Registry" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.registry"></a>

```csharp
public object Registry { get; set; }
```

- *Type:* object

registry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#registry HelmProvider#registry}

---

##### `RegistryConfigPath`<sup>Optional</sup> <a name="RegistryConfigPath" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.registryConfigPath"></a>

```csharp
public string RegistryConfigPath { get; set; }
```

- *Type:* string

The path to the registry config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#registry_config_path HelmProvider#registry_config_path}

---

##### `RepositoryCache`<sup>Optional</sup> <a name="RepositoryCache" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.repositoryCache"></a>

```csharp
public string RepositoryCache { get; set; }
```

- *Type:* string

The path to the file containing cached repository indexes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#repository_cache HelmProvider#repository_cache}

---

##### `RepositoryConfigPath`<sup>Optional</sup> <a name="RepositoryConfigPath" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.repositoryConfigPath"></a>

```csharp
public string RepositoryConfigPath { get; set; }
```

- *Type:* string

The path to the file containing repository names and URLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#repository_config_path HelmProvider#repository_config_path}

---

### HelmProviderExperiments <a name="HelmProviderExperiments" id="@cdktf/provider-helm.provider.HelmProviderExperiments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.provider.HelmProviderExperiments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Helm;

new HelmProviderExperiments {
    object Manifest = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderExperiments.property.manifest">Manifest</a></code> | <code>object</code> | Enable full diff by storing the rendered manifest in the state. |

---

##### `Manifest`<sup>Optional</sup> <a name="Manifest" id="@cdktf/provider-helm.provider.HelmProviderExperiments.property.manifest"></a>

```csharp
public object Manifest { get; set; }
```

- *Type:* object

Enable full diff by storing the rendered manifest in the state.

This has similar limitations as when using helm install --dry-run. See https://helm.sh/docs/chart_best_practices/custom_resource_definitions/#install-a-crd-declaration-before-using-the-resource

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#manifest HelmProvider#manifest}

---

### HelmProviderKubernetes <a name="HelmProviderKubernetes" id="@cdktf/provider-helm.provider.HelmProviderKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Helm;

new HelmProviderKubernetes {
    string ClientCertificate = null,
    string ClientKey = null,
    string ClusterCaCertificate = null,
    string ConfigContext = null,
    string ConfigContextAuthInfo = null,
    string ConfigContextCluster = null,
    string ConfigPath = null,
    string[] ConfigPaths = null,
    HelmProviderKubernetesExec Exec = null,
    string Host = null,
    object Insecure = null,
    string Password = null,
    string ProxyUrl = null,
    string TlsServerName = null,
    string Token = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.clientCertificate">ClientCertificate</a></code> | <code>string</code> | PEM-encoded client certificate for TLS authentication. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.clientKey">ClientKey</a></code> | <code>string</code> | PEM-encoded client certificate key for TLS authentication. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.clusterCaCertificate">ClusterCaCertificate</a></code> | <code>string</code> | PEM-encoded root certificates bundle for TLS authentication. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configContext">ConfigContext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#config_context HelmProvider#config_context}. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configContextAuthInfo">ConfigContextAuthInfo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#config_context_auth_info HelmProvider#config_context_auth_info}. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configContextCluster">ConfigContextCluster</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#config_context_cluster HelmProvider#config_context_cluster}. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configPath">ConfigPath</a></code> | <code>string</code> | Path to the kube config file. Can be set with KUBE_CONFIG_PATH. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configPaths">ConfigPaths</a></code> | <code>string[]</code> | A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.exec">Exec</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetesExec">HelmProviderKubernetesExec</a></code> | exec block. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.host">Host</a></code> | <code>string</code> | The hostname (in form of URI) of Kubernetes master. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.insecure">Insecure</a></code> | <code>object</code> | Whether server should be accessed without verifying the TLS certificate. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.password">Password</a></code> | <code>string</code> | The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.proxyUrl">ProxyUrl</a></code> | <code>string</code> | URL to the proxy to be used for all API requests. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.tlsServerName">TlsServerName</a></code> | <code>string</code> | Server name passed to the server for SNI and is used in the client to check server certificates against. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.token">Token</a></code> | <code>string</code> | Token to authenticate an service account. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.username">Username</a></code> | <code>string</code> | The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint. |

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.clientCertificate"></a>

```csharp
public string ClientCertificate { get; set; }
```

- *Type:* string

PEM-encoded client certificate for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#client_certificate HelmProvider#client_certificate}

---

##### `ClientKey`<sup>Optional</sup> <a name="ClientKey" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.clientKey"></a>

```csharp
public string ClientKey { get; set; }
```

- *Type:* string

PEM-encoded client certificate key for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#client_key HelmProvider#client_key}

---

##### `ClusterCaCertificate`<sup>Optional</sup> <a name="ClusterCaCertificate" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.clusterCaCertificate"></a>

```csharp
public string ClusterCaCertificate { get; set; }
```

- *Type:* string

PEM-encoded root certificates bundle for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#cluster_ca_certificate HelmProvider#cluster_ca_certificate}

---

##### `ConfigContext`<sup>Optional</sup> <a name="ConfigContext" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configContext"></a>

```csharp
public string ConfigContext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#config_context HelmProvider#config_context}.

---

##### `ConfigContextAuthInfo`<sup>Optional</sup> <a name="ConfigContextAuthInfo" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configContextAuthInfo"></a>

```csharp
public string ConfigContextAuthInfo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#config_context_auth_info HelmProvider#config_context_auth_info}.

---

##### `ConfigContextCluster`<sup>Optional</sup> <a name="ConfigContextCluster" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configContextCluster"></a>

```csharp
public string ConfigContextCluster { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#config_context_cluster HelmProvider#config_context_cluster}.

---

##### `ConfigPath`<sup>Optional</sup> <a name="ConfigPath" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configPath"></a>

```csharp
public string ConfigPath { get; set; }
```

- *Type:* string

Path to the kube config file. Can be set with KUBE_CONFIG_PATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#config_path HelmProvider#config_path}

---

##### `ConfigPaths`<sup>Optional</sup> <a name="ConfigPaths" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configPaths"></a>

```csharp
public string[] ConfigPaths { get; set; }
```

- *Type:* string[]

A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#config_paths HelmProvider#config_paths}

---

##### `Exec`<sup>Optional</sup> <a name="Exec" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.exec"></a>

```csharp
public HelmProviderKubernetesExec Exec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderKubernetesExec">HelmProviderKubernetesExec</a>

exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#exec HelmProvider#exec}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The hostname (in form of URI) of Kubernetes master.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#host HelmProvider#host}

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.insecure"></a>

```csharp
public object Insecure { get; set; }
```

- *Type:* object

Whether server should be accessed without verifying the TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#insecure HelmProvider#insecure}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#password HelmProvider#password}

---

##### `ProxyUrl`<sup>Optional</sup> <a name="ProxyUrl" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.proxyUrl"></a>

```csharp
public string ProxyUrl { get; set; }
```

- *Type:* string

URL to the proxy to be used for all API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#proxy_url HelmProvider#proxy_url}

---

##### `TlsServerName`<sup>Optional</sup> <a name="TlsServerName" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.tlsServerName"></a>

```csharp
public string TlsServerName { get; set; }
```

- *Type:* string

Server name passed to the server for SNI and is used in the client to check server certificates against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#tls_server_name HelmProvider#tls_server_name}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

Token to authenticate an service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#token HelmProvider#token}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#username HelmProvider#username}

---

### HelmProviderKubernetesExec <a name="HelmProviderKubernetesExec" id="@cdktf/provider-helm.provider.HelmProviderKubernetesExec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.provider.HelmProviderKubernetesExec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Helm;

new HelmProviderKubernetesExec {
    string ApiVersion,
    string Command,
    string[] Args = null,
    System.Collections.Generic.IDictionary<string, string> Env = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.apiVersion">ApiVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#api_version HelmProvider#api_version}. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.command">Command</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#command HelmProvider#command}. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.args">Args</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#args HelmProvider#args}. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.env">Env</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#env HelmProvider#env}. |

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.apiVersion"></a>

```csharp
public string ApiVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#api_version HelmProvider#api_version}.

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.command"></a>

```csharp
public string Command { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#command HelmProvider#command}.

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.args"></a>

```csharp
public string[] Args { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#args HelmProvider#args}.

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.env"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Env { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#env HelmProvider#env}.

---

### HelmProviderRegistry <a name="HelmProviderRegistry" id="@cdktf/provider-helm.provider.HelmProviderRegistry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.provider.HelmProviderRegistry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Helm;

new HelmProviderRegistry {
    string Password,
    string Url,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderRegistry.property.password">Password</a></code> | <code>string</code> | The password to use for the OCI HTTP basic authentication when accessing the Kubernetes master endpoint. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderRegistry.property.url">Url</a></code> | <code>string</code> | OCI URL in form of oci://host:port or oci://host. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderRegistry.property.username">Username</a></code> | <code>string</code> | The username to use for the OCI HTTP basic authentication when accessing the Kubernetes master endpoint. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-helm.provider.HelmProviderRegistry.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password to use for the OCI HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#password HelmProvider#password}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-helm.provider.HelmProviderRegistry.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

OCI URL in form of oci://host:port or oci://host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#url HelmProvider#url}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-helm.provider.HelmProviderRegistry.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The username to use for the OCI HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.11.0/docs#username HelmProvider#username}

---



