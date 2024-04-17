# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-helm.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HelmProvider <a name="HelmProvider" id="@cdktf/provider-helm.provider.HelmProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs helm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.provider.HelmProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.helm.provider.HelmProvider;

HelmProvider.Builder.create(Construct scope, java.lang.String id)
//  .alias(java.lang.String)
//  .burstLimit(java.lang.Number)
//  .debug(java.lang.Boolean)
//  .debug(IResolvable)
//  .experiments(HelmProviderExperiments)
//  .helmDriver(java.lang.String)
//  .kubernetes(HelmProviderKubernetes)
//  .pluginsPath(java.lang.String)
//  .registry(IResolvable)
//  .registry(java.util.List<HelmProviderRegistry>)
//  .registryConfigPath(java.lang.String)
//  .repositoryCache(java.lang.String)
//  .repositoryConfigPath(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.burstLimit">burstLimit</a></code> | <code>java.lang.Number</code> | Helm burst limit. Increase this if you have a cluster with many CRDs. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.debug">debug</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Debug indicates whether or not Helm is running in Debug mode. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.experiments">experiments</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a></code> | experiments block. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.helmDriver">helmDriver</a></code> | <code>java.lang.String</code> | The backend storage driver. Values are: configmap, secret, memory, sql. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.pluginsPath">pluginsPath</a></code> | <code>java.lang.String</code> | The path to the helm plugins directory. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.registry">registry</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.provider.HelmProviderRegistry">HelmProviderRegistry</a>></code> | registry block. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.registryConfigPath">registryConfigPath</a></code> | <code>java.lang.String</code> | The path to the registry config file. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.repositoryCache">repositoryCache</a></code> | <code>java.lang.String</code> | The path to the file containing cached repository indexes. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.repositoryConfigPath">repositoryConfigPath</a></code> | <code>java.lang.String</code> | The path to the file containing repository names and URLs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#alias HelmProvider#alias}

---

##### `burstLimit`<sup>Optional</sup> <a name="burstLimit" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.burstLimit"></a>

- *Type:* java.lang.Number

Helm burst limit. Increase this if you have a cluster with many CRDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#burst_limit HelmProvider#burst_limit}

---

##### `debug`<sup>Optional</sup> <a name="debug" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.debug"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Debug indicates whether or not Helm is running in Debug mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#debug HelmProvider#debug}

---

##### `experiments`<sup>Optional</sup> <a name="experiments" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.experiments"></a>

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a>

experiments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#experiments HelmProvider#experiments}

---

##### `helmDriver`<sup>Optional</sup> <a name="helmDriver" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.helmDriver"></a>

- *Type:* java.lang.String

The backend storage driver. Values are: configmap, secret, memory, sql.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#helm_driver HelmProvider#helm_driver}

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.kubernetes"></a>

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#kubernetes HelmProvider#kubernetes}

---

##### `pluginsPath`<sup>Optional</sup> <a name="pluginsPath" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.pluginsPath"></a>

- *Type:* java.lang.String

The path to the helm plugins directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#plugins_path HelmProvider#plugins_path}

---

##### `registry`<sup>Optional</sup> <a name="registry" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.registry"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.provider.HelmProviderRegistry">HelmProviderRegistry</a>>

registry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#registry HelmProvider#registry}

---

##### `registryConfigPath`<sup>Optional</sup> <a name="registryConfigPath" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.registryConfigPath"></a>

- *Type:* java.lang.String

The path to the registry config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#registry_config_path HelmProvider#registry_config_path}

---

##### `repositoryCache`<sup>Optional</sup> <a name="repositoryCache" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.repositoryCache"></a>

- *Type:* java.lang.String

The path to the file containing cached repository indexes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#repository_cache HelmProvider#repository_cache}

---

##### `repositoryConfigPath`<sup>Optional</sup> <a name="repositoryConfigPath" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.repositoryConfigPath"></a>

- *Type:* java.lang.String

The path to the file containing repository names and URLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#repository_config_path HelmProvider#repository_config_path}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetBurstLimit">resetBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetDebug">resetDebug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetExperiments">resetExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetHelmDriver">resetHelmDriver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetKubernetes">resetKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetPluginsPath">resetPluginsPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetRegistry">resetRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetRegistryConfigPath">resetRegistryConfigPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetRepositoryCache">resetRepositoryCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.resetRepositoryConfigPath">resetRepositoryConfigPath</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.provider.HelmProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-helm.provider.HelmProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-helm.provider.HelmProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.provider.HelmProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-helm.provider.HelmProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-helm.provider.HelmProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-helm.provider.HelmProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-helm.provider.HelmProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-helm.provider.HelmProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-helm.provider.HelmProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-helm.provider.HelmProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetBurstLimit` <a name="resetBurstLimit" id="@cdktf/provider-helm.provider.HelmProvider.resetBurstLimit"></a>

```java
public void resetBurstLimit()
```

##### `resetDebug` <a name="resetDebug" id="@cdktf/provider-helm.provider.HelmProvider.resetDebug"></a>

```java
public void resetDebug()
```

##### `resetExperiments` <a name="resetExperiments" id="@cdktf/provider-helm.provider.HelmProvider.resetExperiments"></a>

```java
public void resetExperiments()
```

##### `resetHelmDriver` <a name="resetHelmDriver" id="@cdktf/provider-helm.provider.HelmProvider.resetHelmDriver"></a>

```java
public void resetHelmDriver()
```

##### `resetKubernetes` <a name="resetKubernetes" id="@cdktf/provider-helm.provider.HelmProvider.resetKubernetes"></a>

```java
public void resetKubernetes()
```

##### `resetPluginsPath` <a name="resetPluginsPath" id="@cdktf/provider-helm.provider.HelmProvider.resetPluginsPath"></a>

```java
public void resetPluginsPath()
```

##### `resetRegistry` <a name="resetRegistry" id="@cdktf/provider-helm.provider.HelmProvider.resetRegistry"></a>

```java
public void resetRegistry()
```

##### `resetRegistryConfigPath` <a name="resetRegistryConfigPath" id="@cdktf/provider-helm.provider.HelmProvider.resetRegistryConfigPath"></a>

```java
public void resetRegistryConfigPath()
```

##### `resetRepositoryCache` <a name="resetRepositoryCache" id="@cdktf/provider-helm.provider.HelmProvider.resetRepositoryCache"></a>

```java
public void resetRepositoryCache()
```

##### `resetRepositoryConfigPath` <a name="resetRepositoryConfigPath" id="@cdktf/provider-helm.provider.HelmProvider.resetRepositoryConfigPath"></a>

```java
public void resetRepositoryConfigPath()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HelmProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-helm.provider.HelmProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.helm.provider.HelmProvider;

HelmProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-helm.provider.HelmProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.helm.provider.HelmProvider;

HelmProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-helm.provider.HelmProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-helm.provider.HelmProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.helm.provider.HelmProvider;

HelmProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-helm.provider.HelmProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-helm.provider.HelmProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.helm.provider.HelmProvider;

HelmProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),HelmProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a HelmProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-helm.provider.HelmProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-helm.provider.HelmProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the HelmProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-helm.provider.HelmProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing HelmProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-helm.provider.HelmProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the HelmProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.burstLimitInput">burstLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.debugInput">debugInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.experimentsInput">experimentsInput</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.helmDriverInput">helmDriverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.kubernetesInput">kubernetesInput</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.pluginsPathInput">pluginsPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.registryConfigPathInput">registryConfigPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.registryInput">registryInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.provider.HelmProviderRegistry">HelmProviderRegistry</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.repositoryCacheInput">repositoryCacheInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.repositoryConfigPathInput">repositoryConfigPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.burstLimit">burstLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.debug">debug</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.experiments">experiments</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.helmDriver">helmDriver</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.pluginsPath">pluginsPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.registry">registry</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.provider.HelmProviderRegistry">HelmProviderRegistry</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.registryConfigPath">registryConfigPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.repositoryCache">repositoryCache</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.repositoryConfigPath">repositoryConfigPath</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-helm.provider.HelmProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-helm.provider.HelmProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.provider.HelmProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-helm.provider.HelmProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-helm.provider.HelmProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-helm.provider.HelmProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-helm.provider.HelmProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-helm.provider.HelmProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-helm.provider.HelmProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-helm.provider.HelmProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `burstLimitInput`<sup>Optional</sup> <a name="burstLimitInput" id="@cdktf/provider-helm.provider.HelmProvider.property.burstLimitInput"></a>

```java
public java.lang.Number getBurstLimitInput();
```

- *Type:* java.lang.Number

---

##### `debugInput`<sup>Optional</sup> <a name="debugInput" id="@cdktf/provider-helm.provider.HelmProvider.property.debugInput"></a>

```java
public java.lang.Object getDebugInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `experimentsInput`<sup>Optional</sup> <a name="experimentsInput" id="@cdktf/provider-helm.provider.HelmProvider.property.experimentsInput"></a>

```java
public HelmProviderExperiments getExperimentsInput();
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a>

---

##### `helmDriverInput`<sup>Optional</sup> <a name="helmDriverInput" id="@cdktf/provider-helm.provider.HelmProvider.property.helmDriverInput"></a>

```java
public java.lang.String getHelmDriverInput();
```

- *Type:* java.lang.String

---

##### `kubernetesInput`<sup>Optional</sup> <a name="kubernetesInput" id="@cdktf/provider-helm.provider.HelmProvider.property.kubernetesInput"></a>

```java
public HelmProviderKubernetes getKubernetesInput();
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a>

---

##### `pluginsPathInput`<sup>Optional</sup> <a name="pluginsPathInput" id="@cdktf/provider-helm.provider.HelmProvider.property.pluginsPathInput"></a>

```java
public java.lang.String getPluginsPathInput();
```

- *Type:* java.lang.String

---

##### `registryConfigPathInput`<sup>Optional</sup> <a name="registryConfigPathInput" id="@cdktf/provider-helm.provider.HelmProvider.property.registryConfigPathInput"></a>

```java
public java.lang.String getRegistryConfigPathInput();
```

- *Type:* java.lang.String

---

##### `registryInput`<sup>Optional</sup> <a name="registryInput" id="@cdktf/provider-helm.provider.HelmProvider.property.registryInput"></a>

```java
public java.lang.Object getRegistryInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.provider.HelmProviderRegistry">HelmProviderRegistry</a>>

---

##### `repositoryCacheInput`<sup>Optional</sup> <a name="repositoryCacheInput" id="@cdktf/provider-helm.provider.HelmProvider.property.repositoryCacheInput"></a>

```java
public java.lang.String getRepositoryCacheInput();
```

- *Type:* java.lang.String

---

##### `repositoryConfigPathInput`<sup>Optional</sup> <a name="repositoryConfigPathInput" id="@cdktf/provider-helm.provider.HelmProvider.property.repositoryConfigPathInput"></a>

```java
public java.lang.String getRepositoryConfigPathInput();
```

- *Type:* java.lang.String

---

##### `burstLimit`<sup>Optional</sup> <a name="burstLimit" id="@cdktf/provider-helm.provider.HelmProvider.property.burstLimit"></a>

```java
public java.lang.Number getBurstLimit();
```

- *Type:* java.lang.Number

---

##### `debug`<sup>Optional</sup> <a name="debug" id="@cdktf/provider-helm.provider.HelmProvider.property.debug"></a>

```java
public java.lang.Object getDebug();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `experiments`<sup>Optional</sup> <a name="experiments" id="@cdktf/provider-helm.provider.HelmProvider.property.experiments"></a>

```java
public HelmProviderExperiments getExperiments();
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a>

---

##### `helmDriver`<sup>Optional</sup> <a name="helmDriver" id="@cdktf/provider-helm.provider.HelmProvider.property.helmDriver"></a>

```java
public java.lang.String getHelmDriver();
```

- *Type:* java.lang.String

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktf/provider-helm.provider.HelmProvider.property.kubernetes"></a>

```java
public HelmProviderKubernetes getKubernetes();
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a>

---

##### `pluginsPath`<sup>Optional</sup> <a name="pluginsPath" id="@cdktf/provider-helm.provider.HelmProvider.property.pluginsPath"></a>

```java
public java.lang.String getPluginsPath();
```

- *Type:* java.lang.String

---

##### `registry`<sup>Optional</sup> <a name="registry" id="@cdktf/provider-helm.provider.HelmProvider.property.registry"></a>

```java
public java.lang.Object getRegistry();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.provider.HelmProviderRegistry">HelmProviderRegistry</a>>

---

##### `registryConfigPath`<sup>Optional</sup> <a name="registryConfigPath" id="@cdktf/provider-helm.provider.HelmProvider.property.registryConfigPath"></a>

```java
public java.lang.String getRegistryConfigPath();
```

- *Type:* java.lang.String

---

##### `repositoryCache`<sup>Optional</sup> <a name="repositoryCache" id="@cdktf/provider-helm.provider.HelmProvider.property.repositoryCache"></a>

```java
public java.lang.String getRepositoryCache();
```

- *Type:* java.lang.String

---

##### `repositoryConfigPath`<sup>Optional</sup> <a name="repositoryConfigPath" id="@cdktf/provider-helm.provider.HelmProvider.property.repositoryConfigPath"></a>

```java
public java.lang.String getRepositoryConfigPath();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-helm.provider.HelmProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### HelmProviderConfig <a name="HelmProviderConfig" id="@cdktf/provider-helm.provider.HelmProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.provider.HelmProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.helm.provider.HelmProviderConfig;

HelmProviderConfig.builder()
//  .alias(java.lang.String)
//  .burstLimit(java.lang.Number)
//  .debug(java.lang.Boolean)
//  .debug(IResolvable)
//  .experiments(HelmProviderExperiments)
//  .helmDriver(java.lang.String)
//  .kubernetes(HelmProviderKubernetes)
//  .pluginsPath(java.lang.String)
//  .registry(IResolvable)
//  .registry(java.util.List<HelmProviderRegistry>)
//  .registryConfigPath(java.lang.String)
//  .repositoryCache(java.lang.String)
//  .repositoryConfigPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.burstLimit">burstLimit</a></code> | <code>java.lang.Number</code> | Helm burst limit. Increase this if you have a cluster with many CRDs. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.debug">debug</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Debug indicates whether or not Helm is running in Debug mode. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.experiments">experiments</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a></code> | experiments block. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.helmDriver">helmDriver</a></code> | <code>java.lang.String</code> | The backend storage driver. Values are: configmap, secret, memory, sql. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.pluginsPath">pluginsPath</a></code> | <code>java.lang.String</code> | The path to the helm plugins directory. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.registry">registry</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.provider.HelmProviderRegistry">HelmProviderRegistry</a>></code> | registry block. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.registryConfigPath">registryConfigPath</a></code> | <code>java.lang.String</code> | The path to the registry config file. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.repositoryCache">repositoryCache</a></code> | <code>java.lang.String</code> | The path to the file containing cached repository indexes. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.repositoryConfigPath">repositoryConfigPath</a></code> | <code>java.lang.String</code> | The path to the file containing repository names and URLs. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#alias HelmProvider#alias}

---

##### `burstLimit`<sup>Optional</sup> <a name="burstLimit" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.burstLimit"></a>

```java
public java.lang.Number getBurstLimit();
```

- *Type:* java.lang.Number

Helm burst limit. Increase this if you have a cluster with many CRDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#burst_limit HelmProvider#burst_limit}

---

##### `debug`<sup>Optional</sup> <a name="debug" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.debug"></a>

```java
public java.lang.Object getDebug();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Debug indicates whether or not Helm is running in Debug mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#debug HelmProvider#debug}

---

##### `experiments`<sup>Optional</sup> <a name="experiments" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.experiments"></a>

```java
public HelmProviderExperiments getExperiments();
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a>

experiments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#experiments HelmProvider#experiments}

---

##### `helmDriver`<sup>Optional</sup> <a name="helmDriver" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.helmDriver"></a>

```java
public java.lang.String getHelmDriver();
```

- *Type:* java.lang.String

The backend storage driver. Values are: configmap, secret, memory, sql.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#helm_driver HelmProvider#helm_driver}

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.kubernetes"></a>

```java
public HelmProviderKubernetes getKubernetes();
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#kubernetes HelmProvider#kubernetes}

---

##### `pluginsPath`<sup>Optional</sup> <a name="pluginsPath" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.pluginsPath"></a>

```java
public java.lang.String getPluginsPath();
```

- *Type:* java.lang.String

The path to the helm plugins directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#plugins_path HelmProvider#plugins_path}

---

##### `registry`<sup>Optional</sup> <a name="registry" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.registry"></a>

```java
public java.lang.Object getRegistry();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-helm.provider.HelmProviderRegistry">HelmProviderRegistry</a>>

registry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#registry HelmProvider#registry}

---

##### `registryConfigPath`<sup>Optional</sup> <a name="registryConfigPath" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.registryConfigPath"></a>

```java
public java.lang.String getRegistryConfigPath();
```

- *Type:* java.lang.String

The path to the registry config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#registry_config_path HelmProvider#registry_config_path}

---

##### `repositoryCache`<sup>Optional</sup> <a name="repositoryCache" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.repositoryCache"></a>

```java
public java.lang.String getRepositoryCache();
```

- *Type:* java.lang.String

The path to the file containing cached repository indexes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#repository_cache HelmProvider#repository_cache}

---

##### `repositoryConfigPath`<sup>Optional</sup> <a name="repositoryConfigPath" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.repositoryConfigPath"></a>

```java
public java.lang.String getRepositoryConfigPath();
```

- *Type:* java.lang.String

The path to the file containing repository names and URLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#repository_config_path HelmProvider#repository_config_path}

---

### HelmProviderExperiments <a name="HelmProviderExperiments" id="@cdktf/provider-helm.provider.HelmProviderExperiments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.provider.HelmProviderExperiments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.helm.provider.HelmProviderExperiments;

HelmProviderExperiments.builder()
//  .manifest(java.lang.Boolean)
//  .manifest(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderExperiments.property.manifest">manifest</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable full diff by storing the rendered manifest in the state. |

---

##### `manifest`<sup>Optional</sup> <a name="manifest" id="@cdktf/provider-helm.provider.HelmProviderExperiments.property.manifest"></a>

```java
public java.lang.Object getManifest();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable full diff by storing the rendered manifest in the state.

This has similar limitations as when using helm install --dry-run. See https://helm.sh/docs/chart_best_practices/custom_resource_definitions/#install-a-crd-declaration-before-using-the-resource

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#manifest HelmProvider#manifest}

---

### HelmProviderKubernetes <a name="HelmProviderKubernetes" id="@cdktf/provider-helm.provider.HelmProviderKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.helm.provider.HelmProviderKubernetes;

HelmProviderKubernetes.builder()
//  .clientCertificate(java.lang.String)
//  .clientKey(java.lang.String)
//  .clusterCaCertificate(java.lang.String)
//  .configContext(java.lang.String)
//  .configContextAuthInfo(java.lang.String)
//  .configContextCluster(java.lang.String)
//  .configPath(java.lang.String)
//  .configPaths(java.util.List<java.lang.String>)
//  .exec(HelmProviderKubernetesExec)
//  .host(java.lang.String)
//  .insecure(java.lang.Boolean)
//  .insecure(IResolvable)
//  .password(java.lang.String)
//  .proxyUrl(java.lang.String)
//  .tlsServerName(java.lang.String)
//  .token(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | PEM-encoded client certificate for TLS authentication. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | PEM-encoded client certificate key for TLS authentication. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.clusterCaCertificate">clusterCaCertificate</a></code> | <code>java.lang.String</code> | PEM-encoded root certificates bundle for TLS authentication. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configContext">configContext</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#config_context HelmProvider#config_context}. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configContextAuthInfo">configContextAuthInfo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#config_context_auth_info HelmProvider#config_context_auth_info}. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configContextCluster">configContextCluster</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#config_context_cluster HelmProvider#config_context_cluster}. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configPath">configPath</a></code> | <code>java.lang.String</code> | Path to the kube config file. Can be set with KUBE_CONFIG_PATH. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configPaths">configPaths</a></code> | <code>java.util.List<java.lang.String></code> | A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.exec">exec</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetesExec">HelmProviderKubernetesExec</a></code> | exec block. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.host">host</a></code> | <code>java.lang.String</code> | The hostname (in form of URI) of Kubernetes master. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.insecure">insecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether server should be accessed without verifying the TLS certificate. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.password">password</a></code> | <code>java.lang.String</code> | The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.proxyUrl">proxyUrl</a></code> | <code>java.lang.String</code> | URL to the proxy to be used for all API requests. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.tlsServerName">tlsServerName</a></code> | <code>java.lang.String</code> | Server name passed to the server for SNI and is used in the client to check server certificates against. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.token">token</a></code> | <code>java.lang.String</code> | Token to authenticate an service account. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.username">username</a></code> | <code>java.lang.String</code> | The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint. |

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

PEM-encoded client certificate for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#client_certificate HelmProvider#client_certificate}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

PEM-encoded client certificate key for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#client_key HelmProvider#client_key}

---

##### `clusterCaCertificate`<sup>Optional</sup> <a name="clusterCaCertificate" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.clusterCaCertificate"></a>

```java
public java.lang.String getClusterCaCertificate();
```

- *Type:* java.lang.String

PEM-encoded root certificates bundle for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#cluster_ca_certificate HelmProvider#cluster_ca_certificate}

---

##### `configContext`<sup>Optional</sup> <a name="configContext" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configContext"></a>

```java
public java.lang.String getConfigContext();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#config_context HelmProvider#config_context}.

---

##### `configContextAuthInfo`<sup>Optional</sup> <a name="configContextAuthInfo" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configContextAuthInfo"></a>

```java
public java.lang.String getConfigContextAuthInfo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#config_context_auth_info HelmProvider#config_context_auth_info}.

---

##### `configContextCluster`<sup>Optional</sup> <a name="configContextCluster" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configContextCluster"></a>

```java
public java.lang.String getConfigContextCluster();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#config_context_cluster HelmProvider#config_context_cluster}.

---

##### `configPath`<sup>Optional</sup> <a name="configPath" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configPath"></a>

```java
public java.lang.String getConfigPath();
```

- *Type:* java.lang.String

Path to the kube config file. Can be set with KUBE_CONFIG_PATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#config_path HelmProvider#config_path}

---

##### `configPaths`<sup>Optional</sup> <a name="configPaths" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configPaths"></a>

```java
public java.util.List<java.lang.String> getConfigPaths();
```

- *Type:* java.util.List<java.lang.String>

A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#config_paths HelmProvider#config_paths}

---

##### `exec`<sup>Optional</sup> <a name="exec" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.exec"></a>

```java
public HelmProviderKubernetesExec getExec();
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderKubernetesExec">HelmProviderKubernetesExec</a>

exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#exec HelmProvider#exec}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The hostname (in form of URI) of Kubernetes master.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#host HelmProvider#host}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.insecure"></a>

```java
public java.lang.Object getInsecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether server should be accessed without verifying the TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#insecure HelmProvider#insecure}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#password HelmProvider#password}

---

##### `proxyUrl`<sup>Optional</sup> <a name="proxyUrl" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.proxyUrl"></a>

```java
public java.lang.String getProxyUrl();
```

- *Type:* java.lang.String

URL to the proxy to be used for all API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#proxy_url HelmProvider#proxy_url}

---

##### `tlsServerName`<sup>Optional</sup> <a name="tlsServerName" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.tlsServerName"></a>

```java
public java.lang.String getTlsServerName();
```

- *Type:* java.lang.String

Server name passed to the server for SNI and is used in the client to check server certificates against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#tls_server_name HelmProvider#tls_server_name}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Token to authenticate an service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#token HelmProvider#token}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#username HelmProvider#username}

---

### HelmProviderKubernetesExec <a name="HelmProviderKubernetesExec" id="@cdktf/provider-helm.provider.HelmProviderKubernetesExec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.provider.HelmProviderKubernetesExec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.helm.provider.HelmProviderKubernetesExec;

HelmProviderKubernetesExec.builder()
    .apiVersion(java.lang.String)
    .command(java.lang.String)
//  .args(java.util.List<java.lang.String>)
//  .env(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.apiVersion">apiVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#api_version HelmProvider#api_version}. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.command">command</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#command HelmProvider#command}. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#args HelmProvider#args}. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.env">env</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#env HelmProvider#env}. |

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.apiVersion"></a>

```java
public java.lang.String getApiVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#api_version HelmProvider#api_version}.

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.command"></a>

```java
public java.lang.String getCommand();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#command HelmProvider#command}.

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#args HelmProvider#args}.

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.env"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnv();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#env HelmProvider#env}.

---

### HelmProviderRegistry <a name="HelmProviderRegistry" id="@cdktf/provider-helm.provider.HelmProviderRegistry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.provider.HelmProviderRegistry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.helm.provider.HelmProviderRegistry;

HelmProviderRegistry.builder()
    .password(java.lang.String)
    .url(java.lang.String)
    .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderRegistry.property.password">password</a></code> | <code>java.lang.String</code> | The password to use for the OCI HTTP basic authentication when accessing the Kubernetes master endpoint. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderRegistry.property.url">url</a></code> | <code>java.lang.String</code> | OCI URL in form of oci://host:port or oci://host. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderRegistry.property.username">username</a></code> | <code>java.lang.String</code> | The username to use for the OCI HTTP basic authentication when accessing the Kubernetes master endpoint. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-helm.provider.HelmProviderRegistry.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password to use for the OCI HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#password HelmProvider#password}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-helm.provider.HelmProviderRegistry.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

OCI URL in form of oci://host:port or oci://host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#url HelmProvider#url}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-helm.provider.HelmProviderRegistry.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The username to use for the OCI HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.13.1/docs#username HelmProvider#username}

---



