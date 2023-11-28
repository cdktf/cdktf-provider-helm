# `provider`

Refer to the Terraform Registory for docs: [`helm`](https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-helm.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HelmProvider <a name="HelmProvider" id="@cdktf/provider-helm.provider.HelmProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs helm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.provider.HelmProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/v9/provider"

provider.NewHelmProvider(scope Construct, id *string, config HelmProviderConfig) HelmProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig">HelmProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-helm.provider.HelmProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-helm.provider.HelmProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.provider.HelmProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-helm.provider.HelmProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-helm.provider.HelmProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-helm.provider.HelmProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-helm.provider.HelmProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-helm.provider.HelmProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-helm.provider.HelmProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetBurstLimit` <a name="ResetBurstLimit" id="@cdktf/provider-helm.provider.HelmProvider.resetBurstLimit"></a>

```go
func ResetBurstLimit()
```

##### `ResetDebug` <a name="ResetDebug" id="@cdktf/provider-helm.provider.HelmProvider.resetDebug"></a>

```go
func ResetDebug()
```

##### `ResetExperiments` <a name="ResetExperiments" id="@cdktf/provider-helm.provider.HelmProvider.resetExperiments"></a>

```go
func ResetExperiments()
```

##### `ResetHelmDriver` <a name="ResetHelmDriver" id="@cdktf/provider-helm.provider.HelmProvider.resetHelmDriver"></a>

```go
func ResetHelmDriver()
```

##### `ResetKubernetes` <a name="ResetKubernetes" id="@cdktf/provider-helm.provider.HelmProvider.resetKubernetes"></a>

```go
func ResetKubernetes()
```

##### `ResetPluginsPath` <a name="ResetPluginsPath" id="@cdktf/provider-helm.provider.HelmProvider.resetPluginsPath"></a>

```go
func ResetPluginsPath()
```

##### `ResetRegistry` <a name="ResetRegistry" id="@cdktf/provider-helm.provider.HelmProvider.resetRegistry"></a>

```go
func ResetRegistry()
```

##### `ResetRegistryConfigPath` <a name="ResetRegistryConfigPath" id="@cdktf/provider-helm.provider.HelmProvider.resetRegistryConfigPath"></a>

```go
func ResetRegistryConfigPath()
```

##### `ResetRepositoryCache` <a name="ResetRepositoryCache" id="@cdktf/provider-helm.provider.HelmProvider.resetRepositoryCache"></a>

```go
func ResetRepositoryCache()
```

##### `ResetRepositoryConfigPath` <a name="ResetRepositoryConfigPath" id="@cdktf/provider-helm.provider.HelmProvider.resetRepositoryConfigPath"></a>

```go
func ResetRepositoryConfigPath()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a HelmProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-helm.provider.HelmProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/v9/provider"

provider.HelmProvider_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-helm.provider.HelmProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/v9/provider"

provider.HelmProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-helm.provider.HelmProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-helm.provider.HelmProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/v9/provider"

provider.HelmProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-helm.provider.HelmProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-helm.provider.HelmProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/v9/provider"

provider.HelmProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a HelmProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-helm.provider.HelmProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-helm.provider.HelmProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the HelmProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-helm.provider.HelmProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing HelmProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-helm.provider.HelmProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the HelmProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.burstLimitInput">BurstLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.debugInput">DebugInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.experimentsInput">ExperimentsInput</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.helmDriverInput">HelmDriverInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.kubernetesInput">KubernetesInput</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.pluginsPathInput">PluginsPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.registryConfigPathInput">RegistryConfigPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.registryInput">RegistryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.repositoryCacheInput">RepositoryCacheInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.repositoryConfigPathInput">RepositoryConfigPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.burstLimit">BurstLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.debug">Debug</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.experiments">Experiments</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.helmDriver">HelmDriver</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.kubernetes">Kubernetes</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.pluginsPath">PluginsPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.registry">Registry</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.registryConfigPath">RegistryConfigPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.repositoryCache">RepositoryCache</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.repositoryConfigPath">RepositoryConfigPath</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-helm.provider.HelmProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-helm.provider.HelmProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.provider.HelmProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-helm.provider.HelmProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-helm.provider.HelmProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-helm.provider.HelmProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-helm.provider.HelmProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-helm.provider.HelmProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-helm.provider.HelmProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-helm.provider.HelmProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `BurstLimitInput`<sup>Optional</sup> <a name="BurstLimitInput" id="@cdktf/provider-helm.provider.HelmProvider.property.burstLimitInput"></a>

```go
func BurstLimitInput() *f64
```

- *Type:* *f64

---

##### `DebugInput`<sup>Optional</sup> <a name="DebugInput" id="@cdktf/provider-helm.provider.HelmProvider.property.debugInput"></a>

```go
func DebugInput() interface{}
```

- *Type:* interface{}

---

##### `ExperimentsInput`<sup>Optional</sup> <a name="ExperimentsInput" id="@cdktf/provider-helm.provider.HelmProvider.property.experimentsInput"></a>

```go
func ExperimentsInput() HelmProviderExperiments
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a>

---

##### `HelmDriverInput`<sup>Optional</sup> <a name="HelmDriverInput" id="@cdktf/provider-helm.provider.HelmProvider.property.helmDriverInput"></a>

```go
func HelmDriverInput() *string
```

- *Type:* *string

---

##### `KubernetesInput`<sup>Optional</sup> <a name="KubernetesInput" id="@cdktf/provider-helm.provider.HelmProvider.property.kubernetesInput"></a>

```go
func KubernetesInput() HelmProviderKubernetes
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a>

---

##### `PluginsPathInput`<sup>Optional</sup> <a name="PluginsPathInput" id="@cdktf/provider-helm.provider.HelmProvider.property.pluginsPathInput"></a>

```go
func PluginsPathInput() *string
```

- *Type:* *string

---

##### `RegistryConfigPathInput`<sup>Optional</sup> <a name="RegistryConfigPathInput" id="@cdktf/provider-helm.provider.HelmProvider.property.registryConfigPathInput"></a>

```go
func RegistryConfigPathInput() *string
```

- *Type:* *string

---

##### `RegistryInput`<sup>Optional</sup> <a name="RegistryInput" id="@cdktf/provider-helm.provider.HelmProvider.property.registryInput"></a>

```go
func RegistryInput() interface{}
```

- *Type:* interface{}

---

##### `RepositoryCacheInput`<sup>Optional</sup> <a name="RepositoryCacheInput" id="@cdktf/provider-helm.provider.HelmProvider.property.repositoryCacheInput"></a>

```go
func RepositoryCacheInput() *string
```

- *Type:* *string

---

##### `RepositoryConfigPathInput`<sup>Optional</sup> <a name="RepositoryConfigPathInput" id="@cdktf/provider-helm.provider.HelmProvider.property.repositoryConfigPathInput"></a>

```go
func RepositoryConfigPathInput() *string
```

- *Type:* *string

---

##### `BurstLimit`<sup>Optional</sup> <a name="BurstLimit" id="@cdktf/provider-helm.provider.HelmProvider.property.burstLimit"></a>

```go
func BurstLimit() *f64
```

- *Type:* *f64

---

##### `Debug`<sup>Optional</sup> <a name="Debug" id="@cdktf/provider-helm.provider.HelmProvider.property.debug"></a>

```go
func Debug() interface{}
```

- *Type:* interface{}

---

##### `Experiments`<sup>Optional</sup> <a name="Experiments" id="@cdktf/provider-helm.provider.HelmProvider.property.experiments"></a>

```go
func Experiments() HelmProviderExperiments
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a>

---

##### `HelmDriver`<sup>Optional</sup> <a name="HelmDriver" id="@cdktf/provider-helm.provider.HelmProvider.property.helmDriver"></a>

```go
func HelmDriver() *string
```

- *Type:* *string

---

##### `Kubernetes`<sup>Optional</sup> <a name="Kubernetes" id="@cdktf/provider-helm.provider.HelmProvider.property.kubernetes"></a>

```go
func Kubernetes() HelmProviderKubernetes
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a>

---

##### `PluginsPath`<sup>Optional</sup> <a name="PluginsPath" id="@cdktf/provider-helm.provider.HelmProvider.property.pluginsPath"></a>

```go
func PluginsPath() *string
```

- *Type:* *string

---

##### `Registry`<sup>Optional</sup> <a name="Registry" id="@cdktf/provider-helm.provider.HelmProvider.property.registry"></a>

```go
func Registry() interface{}
```

- *Type:* interface{}

---

##### `RegistryConfigPath`<sup>Optional</sup> <a name="RegistryConfigPath" id="@cdktf/provider-helm.provider.HelmProvider.property.registryConfigPath"></a>

```go
func RegistryConfigPath() *string
```

- *Type:* *string

---

##### `RepositoryCache`<sup>Optional</sup> <a name="RepositoryCache" id="@cdktf/provider-helm.provider.HelmProvider.property.repositoryCache"></a>

```go
func RepositoryCache() *string
```

- *Type:* *string

---

##### `RepositoryConfigPath`<sup>Optional</sup> <a name="RepositoryConfigPath" id="@cdktf/provider-helm.provider.HelmProvider.property.repositoryConfigPath"></a>

```go
func RepositoryConfigPath() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-helm.provider.HelmProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### HelmProviderConfig <a name="HelmProviderConfig" id="@cdktf/provider-helm.provider.HelmProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.provider.HelmProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/v9/provider"

&provider.HelmProviderConfig {
	Alias: *string,
	BurstLimit: *f64,
	Debug: interface{},
	Experiments: github.com/cdktf/cdktf-provider-helm-go/helm/v9.provider.HelmProviderExperiments,
	HelmDriver: *string,
	Kubernetes: github.com/cdktf/cdktf-provider-helm-go/helm/v9.provider.HelmProviderKubernetes,
	PluginsPath: *string,
	Registry: interface{},
	RegistryConfigPath: *string,
	RepositoryCache: *string,
	RepositoryConfigPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.burstLimit">BurstLimit</a></code> | <code>*f64</code> | Helm burst limit. Increase this if you have a cluster with many CRDs. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.debug">Debug</a></code> | <code>interface{}</code> | Debug indicates whether or not Helm is running in Debug mode. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.experiments">Experiments</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a></code> | experiments block. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.helmDriver">HelmDriver</a></code> | <code>*string</code> | The backend storage driver. Values are: configmap, secret, memory, sql. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.kubernetes">Kubernetes</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.pluginsPath">PluginsPath</a></code> | <code>*string</code> | The path to the helm plugins directory. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.registry">Registry</a></code> | <code>interface{}</code> | registry block. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.registryConfigPath">RegistryConfigPath</a></code> | <code>*string</code> | The path to the registry config file. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.repositoryCache">RepositoryCache</a></code> | <code>*string</code> | The path to the file containing cached repository indexes. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.repositoryConfigPath">RepositoryConfigPath</a></code> | <code>*string</code> | The path to the file containing repository names and URLs. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#alias HelmProvider#alias}

---

##### `BurstLimit`<sup>Optional</sup> <a name="BurstLimit" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.burstLimit"></a>

```go
BurstLimit *f64
```

- *Type:* *f64

Helm burst limit. Increase this if you have a cluster with many CRDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#burst_limit HelmProvider#burst_limit}

---

##### `Debug`<sup>Optional</sup> <a name="Debug" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.debug"></a>

```go
Debug interface{}
```

- *Type:* interface{}

Debug indicates whether or not Helm is running in Debug mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#debug HelmProvider#debug}

---

##### `Experiments`<sup>Optional</sup> <a name="Experiments" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.experiments"></a>

```go
Experiments HelmProviderExperiments
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a>

experiments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#experiments HelmProvider#experiments}

---

##### `HelmDriver`<sup>Optional</sup> <a name="HelmDriver" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.helmDriver"></a>

```go
HelmDriver *string
```

- *Type:* *string

The backend storage driver. Values are: configmap, secret, memory, sql.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#helm_driver HelmProvider#helm_driver}

---

##### `Kubernetes`<sup>Optional</sup> <a name="Kubernetes" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.kubernetes"></a>

```go
Kubernetes HelmProviderKubernetes
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#kubernetes HelmProvider#kubernetes}

---

##### `PluginsPath`<sup>Optional</sup> <a name="PluginsPath" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.pluginsPath"></a>

```go
PluginsPath *string
```

- *Type:* *string

The path to the helm plugins directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#plugins_path HelmProvider#plugins_path}

---

##### `Registry`<sup>Optional</sup> <a name="Registry" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.registry"></a>

```go
Registry interface{}
```

- *Type:* interface{}

registry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#registry HelmProvider#registry}

---

##### `RegistryConfigPath`<sup>Optional</sup> <a name="RegistryConfigPath" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.registryConfigPath"></a>

```go
RegistryConfigPath *string
```

- *Type:* *string

The path to the registry config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#registry_config_path HelmProvider#registry_config_path}

---

##### `RepositoryCache`<sup>Optional</sup> <a name="RepositoryCache" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.repositoryCache"></a>

```go
RepositoryCache *string
```

- *Type:* *string

The path to the file containing cached repository indexes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#repository_cache HelmProvider#repository_cache}

---

##### `RepositoryConfigPath`<sup>Optional</sup> <a name="RepositoryConfigPath" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.repositoryConfigPath"></a>

```go
RepositoryConfigPath *string
```

- *Type:* *string

The path to the file containing repository names and URLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#repository_config_path HelmProvider#repository_config_path}

---

### HelmProviderExperiments <a name="HelmProviderExperiments" id="@cdktf/provider-helm.provider.HelmProviderExperiments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.provider.HelmProviderExperiments.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/v9/provider"

&provider.HelmProviderExperiments {
	Manifest: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderExperiments.property.manifest">Manifest</a></code> | <code>interface{}</code> | Enable full diff by storing the rendered manifest in the state. |

---

##### `Manifest`<sup>Optional</sup> <a name="Manifest" id="@cdktf/provider-helm.provider.HelmProviderExperiments.property.manifest"></a>

```go
Manifest interface{}
```

- *Type:* interface{}

Enable full diff by storing the rendered manifest in the state.

This has similar limitations as when using helm install --dry-run. See https://helm.sh/docs/chart_best_practices/custom_resource_definitions/#install-a-crd-declaration-before-using-the-resource

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#manifest HelmProvider#manifest}

---

### HelmProviderKubernetes <a name="HelmProviderKubernetes" id="@cdktf/provider-helm.provider.HelmProviderKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/v9/provider"

&provider.HelmProviderKubernetes {
	ClientCertificate: *string,
	ClientKey: *string,
	ClusterCaCertificate: *string,
	ConfigContext: *string,
	ConfigContextAuthInfo: *string,
	ConfigContextCluster: *string,
	ConfigPath: *string,
	ConfigPaths: *[]*string,
	Exec: github.com/cdktf/cdktf-provider-helm-go/helm/v9.provider.HelmProviderKubernetesExec,
	Host: *string,
	Insecure: interface{},
	Password: *string,
	ProxyUrl: *string,
	TlsServerName: *string,
	Token: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | PEM-encoded client certificate for TLS authentication. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.clientKey">ClientKey</a></code> | <code>*string</code> | PEM-encoded client certificate key for TLS authentication. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.clusterCaCertificate">ClusterCaCertificate</a></code> | <code>*string</code> | PEM-encoded root certificates bundle for TLS authentication. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configContext">ConfigContext</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#config_context HelmProvider#config_context}. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configContextAuthInfo">ConfigContextAuthInfo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#config_context_auth_info HelmProvider#config_context_auth_info}. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configContextCluster">ConfigContextCluster</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#config_context_cluster HelmProvider#config_context_cluster}. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configPath">ConfigPath</a></code> | <code>*string</code> | Path to the kube config file. Can be set with KUBE_CONFIG_PATH. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configPaths">ConfigPaths</a></code> | <code>*[]*string</code> | A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.exec">Exec</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetesExec">HelmProviderKubernetesExec</a></code> | exec block. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.host">Host</a></code> | <code>*string</code> | The hostname (in form of URI) of Kubernetes master. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.insecure">Insecure</a></code> | <code>interface{}</code> | Whether server should be accessed without verifying the TLS certificate. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.password">Password</a></code> | <code>*string</code> | The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.proxyUrl">ProxyUrl</a></code> | <code>*string</code> | URL to the proxy to be used for all API requests. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.tlsServerName">TlsServerName</a></code> | <code>*string</code> | Server name passed to the server for SNI and is used in the client to check server certificates against. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.token">Token</a></code> | <code>*string</code> | Token to authenticate an service account. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.username">Username</a></code> | <code>*string</code> | The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint. |

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.clientCertificate"></a>

```go
ClientCertificate *string
```

- *Type:* *string

PEM-encoded client certificate for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#client_certificate HelmProvider#client_certificate}

---

##### `ClientKey`<sup>Optional</sup> <a name="ClientKey" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.clientKey"></a>

```go
ClientKey *string
```

- *Type:* *string

PEM-encoded client certificate key for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#client_key HelmProvider#client_key}

---

##### `ClusterCaCertificate`<sup>Optional</sup> <a name="ClusterCaCertificate" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.clusterCaCertificate"></a>

```go
ClusterCaCertificate *string
```

- *Type:* *string

PEM-encoded root certificates bundle for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#cluster_ca_certificate HelmProvider#cluster_ca_certificate}

---

##### `ConfigContext`<sup>Optional</sup> <a name="ConfigContext" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configContext"></a>

```go
ConfigContext *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#config_context HelmProvider#config_context}.

---

##### `ConfigContextAuthInfo`<sup>Optional</sup> <a name="ConfigContextAuthInfo" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configContextAuthInfo"></a>

```go
ConfigContextAuthInfo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#config_context_auth_info HelmProvider#config_context_auth_info}.

---

##### `ConfigContextCluster`<sup>Optional</sup> <a name="ConfigContextCluster" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configContextCluster"></a>

```go
ConfigContextCluster *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#config_context_cluster HelmProvider#config_context_cluster}.

---

##### `ConfigPath`<sup>Optional</sup> <a name="ConfigPath" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configPath"></a>

```go
ConfigPath *string
```

- *Type:* *string

Path to the kube config file. Can be set with KUBE_CONFIG_PATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#config_path HelmProvider#config_path}

---

##### `ConfigPaths`<sup>Optional</sup> <a name="ConfigPaths" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configPaths"></a>

```go
ConfigPaths *[]*string
```

- *Type:* *[]*string

A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#config_paths HelmProvider#config_paths}

---

##### `Exec`<sup>Optional</sup> <a name="Exec" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.exec"></a>

```go
Exec HelmProviderKubernetesExec
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderKubernetesExec">HelmProviderKubernetesExec</a>

exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#exec HelmProvider#exec}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.host"></a>

```go
Host *string
```

- *Type:* *string

The hostname (in form of URI) of Kubernetes master.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#host HelmProvider#host}

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.insecure"></a>

```go
Insecure interface{}
```

- *Type:* interface{}

Whether server should be accessed without verifying the TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#insecure HelmProvider#insecure}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.password"></a>

```go
Password *string
```

- *Type:* *string

The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#password HelmProvider#password}

---

##### `ProxyUrl`<sup>Optional</sup> <a name="ProxyUrl" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.proxyUrl"></a>

```go
ProxyUrl *string
```

- *Type:* *string

URL to the proxy to be used for all API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#proxy_url HelmProvider#proxy_url}

---

##### `TlsServerName`<sup>Optional</sup> <a name="TlsServerName" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.tlsServerName"></a>

```go
TlsServerName *string
```

- *Type:* *string

Server name passed to the server for SNI and is used in the client to check server certificates against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#tls_server_name HelmProvider#tls_server_name}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.token"></a>

```go
Token *string
```

- *Type:* *string

Token to authenticate an service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#token HelmProvider#token}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.username"></a>

```go
Username *string
```

- *Type:* *string

The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#username HelmProvider#username}

---

### HelmProviderKubernetesExec <a name="HelmProviderKubernetesExec" id="@cdktf/provider-helm.provider.HelmProviderKubernetesExec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.provider.HelmProviderKubernetesExec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/v9/provider"

&provider.HelmProviderKubernetesExec {
	ApiVersion: *string,
	Command: *string,
	Args: *[]*string,
	Env: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.apiVersion">ApiVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#api_version HelmProvider#api_version}. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.command">Command</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#command HelmProvider#command}. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.args">Args</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#args HelmProvider#args}. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.env">Env</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#env HelmProvider#env}. |

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.apiVersion"></a>

```go
ApiVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#api_version HelmProvider#api_version}.

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.command"></a>

```go
Command *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#command HelmProvider#command}.

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.args"></a>

```go
Args *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#args HelmProvider#args}.

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.env"></a>

```go
Env *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#env HelmProvider#env}.

---

### HelmProviderRegistry <a name="HelmProviderRegistry" id="@cdktf/provider-helm.provider.HelmProviderRegistry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.provider.HelmProviderRegistry.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-helm-go/helm/v9/provider"

&provider.HelmProviderRegistry {
	Password: *string,
	Url: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderRegistry.property.password">Password</a></code> | <code>*string</code> | The password to use for the OCI HTTP basic authentication when accessing the Kubernetes master endpoint. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderRegistry.property.url">Url</a></code> | <code>*string</code> | OCI URL in form of oci://host:port or oci://host. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderRegistry.property.username">Username</a></code> | <code>*string</code> | The username to use for the OCI HTTP basic authentication when accessing the Kubernetes master endpoint. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-helm.provider.HelmProviderRegistry.property.password"></a>

```go
Password *string
```

- *Type:* *string

The password to use for the OCI HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#password HelmProvider#password}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-helm.provider.HelmProviderRegistry.property.url"></a>

```go
Url *string
```

- *Type:* *string

OCI URL in form of oci://host:port or oci://host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#url HelmProvider#url}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-helm.provider.HelmProviderRegistry.property.username"></a>

```go
Username *string
```

- *Type:* *string

The username to use for the OCI HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.0/docs#username HelmProvider#username}

---



