# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-helm.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HelmProvider <a name="HelmProvider" id="@cdktf/provider-helm.provider.HelmProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs helm}.

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.provider.HelmProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-helm'

new provider.HelmProvider(scope: Construct, id: string, config?: HelmProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig">HelmProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-helm.provider.HelmProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderConfig">HelmProviderConfig</a>

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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-helm.provider.HelmProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-helm.provider.HelmProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.provider.HelmProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-helm.provider.HelmProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-helm.provider.HelmProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-helm.provider.HelmProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-helm.provider.HelmProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-helm.provider.HelmProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-helm.provider.HelmProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-helm.provider.HelmProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetBurstLimit` <a name="resetBurstLimit" id="@cdktf/provider-helm.provider.HelmProvider.resetBurstLimit"></a>

```typescript
public resetBurstLimit(): void
```

##### `resetDebug` <a name="resetDebug" id="@cdktf/provider-helm.provider.HelmProvider.resetDebug"></a>

```typescript
public resetDebug(): void
```

##### `resetExperiments` <a name="resetExperiments" id="@cdktf/provider-helm.provider.HelmProvider.resetExperiments"></a>

```typescript
public resetExperiments(): void
```

##### `resetHelmDriver` <a name="resetHelmDriver" id="@cdktf/provider-helm.provider.HelmProvider.resetHelmDriver"></a>

```typescript
public resetHelmDriver(): void
```

##### `resetKubernetes` <a name="resetKubernetes" id="@cdktf/provider-helm.provider.HelmProvider.resetKubernetes"></a>

```typescript
public resetKubernetes(): void
```

##### `resetPluginsPath` <a name="resetPluginsPath" id="@cdktf/provider-helm.provider.HelmProvider.resetPluginsPath"></a>

```typescript
public resetPluginsPath(): void
```

##### `resetRegistry` <a name="resetRegistry" id="@cdktf/provider-helm.provider.HelmProvider.resetRegistry"></a>

```typescript
public resetRegistry(): void
```

##### `resetRegistryConfigPath` <a name="resetRegistryConfigPath" id="@cdktf/provider-helm.provider.HelmProvider.resetRegistryConfigPath"></a>

```typescript
public resetRegistryConfigPath(): void
```

##### `resetRepositoryCache` <a name="resetRepositoryCache" id="@cdktf/provider-helm.provider.HelmProvider.resetRepositoryCache"></a>

```typescript
public resetRepositoryCache(): void
```

##### `resetRepositoryConfigPath` <a name="resetRepositoryConfigPath" id="@cdktf/provider-helm.provider.HelmProvider.resetRepositoryConfigPath"></a>

```typescript
public resetRepositoryConfigPath(): void
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

```typescript
import { provider } from '@cdktf/provider-helm'

provider.HelmProvider.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-helm.provider.HelmProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-helm'

provider.HelmProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-helm.provider.HelmProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-helm.provider.HelmProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-helm'

provider.HelmProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-helm.provider.HelmProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-helm.provider.HelmProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@cdktf/provider-helm'

provider.HelmProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a HelmProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-helm.provider.HelmProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-helm.provider.HelmProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HelmProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-helm.provider.HelmProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HelmProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-helm.provider.HelmProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HelmProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.burstLimitInput">burstLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.debugInput">debugInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.experimentsInput">experimentsInput</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.helmDriverInput">helmDriverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.kubernetesInput">kubernetesInput</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.pluginsPathInput">pluginsPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.registryConfigPathInput">registryConfigPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.registryInput">registryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-helm.provider.HelmProviderRegistry">HelmProviderRegistry</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.repositoryCacheInput">repositoryCacheInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.repositoryConfigPathInput">repositoryConfigPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.burstLimit">burstLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.debug">debug</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.experiments">experiments</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.helmDriver">helmDriver</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.pluginsPath">pluginsPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.registry">registry</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-helm.provider.HelmProviderRegistry">HelmProviderRegistry</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.registryConfigPath">registryConfigPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.repositoryCache">repositoryCache</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.repositoryConfigPath">repositoryConfigPath</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-helm.provider.HelmProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-helm.provider.HelmProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.provider.HelmProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-helm.provider.HelmProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-helm.provider.HelmProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-helm.provider.HelmProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-helm.provider.HelmProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-helm.provider.HelmProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-helm.provider.HelmProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-helm.provider.HelmProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `burstLimitInput`<sup>Optional</sup> <a name="burstLimitInput" id="@cdktf/provider-helm.provider.HelmProvider.property.burstLimitInput"></a>

```typescript
public readonly burstLimitInput: number;
```

- *Type:* number

---

##### `debugInput`<sup>Optional</sup> <a name="debugInput" id="@cdktf/provider-helm.provider.HelmProvider.property.debugInput"></a>

```typescript
public readonly debugInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `experimentsInput`<sup>Optional</sup> <a name="experimentsInput" id="@cdktf/provider-helm.provider.HelmProvider.property.experimentsInput"></a>

```typescript
public readonly experimentsInput: HelmProviderExperiments;
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a>

---

##### `helmDriverInput`<sup>Optional</sup> <a name="helmDriverInput" id="@cdktf/provider-helm.provider.HelmProvider.property.helmDriverInput"></a>

```typescript
public readonly helmDriverInput: string;
```

- *Type:* string

---

##### `kubernetesInput`<sup>Optional</sup> <a name="kubernetesInput" id="@cdktf/provider-helm.provider.HelmProvider.property.kubernetesInput"></a>

```typescript
public readonly kubernetesInput: HelmProviderKubernetes;
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a>

---

##### `pluginsPathInput`<sup>Optional</sup> <a name="pluginsPathInput" id="@cdktf/provider-helm.provider.HelmProvider.property.pluginsPathInput"></a>

```typescript
public readonly pluginsPathInput: string;
```

- *Type:* string

---

##### `registryConfigPathInput`<sup>Optional</sup> <a name="registryConfigPathInput" id="@cdktf/provider-helm.provider.HelmProvider.property.registryConfigPathInput"></a>

```typescript
public readonly registryConfigPathInput: string;
```

- *Type:* string

---

##### `registryInput`<sup>Optional</sup> <a name="registryInput" id="@cdktf/provider-helm.provider.HelmProvider.property.registryInput"></a>

```typescript
public readonly registryInput: IResolvable | HelmProviderRegistry[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.provider.HelmProviderRegistry">HelmProviderRegistry</a>[]

---

##### `repositoryCacheInput`<sup>Optional</sup> <a name="repositoryCacheInput" id="@cdktf/provider-helm.provider.HelmProvider.property.repositoryCacheInput"></a>

```typescript
public readonly repositoryCacheInput: string;
```

- *Type:* string

---

##### `repositoryConfigPathInput`<sup>Optional</sup> <a name="repositoryConfigPathInput" id="@cdktf/provider-helm.provider.HelmProvider.property.repositoryConfigPathInput"></a>

```typescript
public readonly repositoryConfigPathInput: string;
```

- *Type:* string

---

##### `burstLimit`<sup>Optional</sup> <a name="burstLimit" id="@cdktf/provider-helm.provider.HelmProvider.property.burstLimit"></a>

```typescript
public readonly burstLimit: number;
```

- *Type:* number

---

##### `debug`<sup>Optional</sup> <a name="debug" id="@cdktf/provider-helm.provider.HelmProvider.property.debug"></a>

```typescript
public readonly debug: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `experiments`<sup>Optional</sup> <a name="experiments" id="@cdktf/provider-helm.provider.HelmProvider.property.experiments"></a>

```typescript
public readonly experiments: HelmProviderExperiments;
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a>

---

##### `helmDriver`<sup>Optional</sup> <a name="helmDriver" id="@cdktf/provider-helm.provider.HelmProvider.property.helmDriver"></a>

```typescript
public readonly helmDriver: string;
```

- *Type:* string

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktf/provider-helm.provider.HelmProvider.property.kubernetes"></a>

```typescript
public readonly kubernetes: HelmProviderKubernetes;
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a>

---

##### `pluginsPath`<sup>Optional</sup> <a name="pluginsPath" id="@cdktf/provider-helm.provider.HelmProvider.property.pluginsPath"></a>

```typescript
public readonly pluginsPath: string;
```

- *Type:* string

---

##### `registry`<sup>Optional</sup> <a name="registry" id="@cdktf/provider-helm.provider.HelmProvider.property.registry"></a>

```typescript
public readonly registry: IResolvable | HelmProviderRegistry[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.provider.HelmProviderRegistry">HelmProviderRegistry</a>[]

---

##### `registryConfigPath`<sup>Optional</sup> <a name="registryConfigPath" id="@cdktf/provider-helm.provider.HelmProvider.property.registryConfigPath"></a>

```typescript
public readonly registryConfigPath: string;
```

- *Type:* string

---

##### `repositoryCache`<sup>Optional</sup> <a name="repositoryCache" id="@cdktf/provider-helm.provider.HelmProvider.property.repositoryCache"></a>

```typescript
public readonly repositoryCache: string;
```

- *Type:* string

---

##### `repositoryConfigPath`<sup>Optional</sup> <a name="repositoryConfigPath" id="@cdktf/provider-helm.provider.HelmProvider.property.repositoryConfigPath"></a>

```typescript
public readonly repositoryConfigPath: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-helm.provider.HelmProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HelmProviderConfig <a name="HelmProviderConfig" id="@cdktf/provider-helm.provider.HelmProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.provider.HelmProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-helm'

const helmProviderConfig: provider.HelmProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.burstLimit">burstLimit</a></code> | <code>number</code> | Helm burst limit. Increase this if you have a cluster with many CRDs. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.debug">debug</a></code> | <code>boolean \| cdktf.IResolvable</code> | Debug indicates whether or not Helm is running in Debug mode. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.experiments">experiments</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a></code> | experiments block. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.helmDriver">helmDriver</a></code> | <code>string</code> | The backend storage driver. Values are: configmap, secret, memory, sql. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a></code> | kubernetes block. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.pluginsPath">pluginsPath</a></code> | <code>string</code> | The path to the helm plugins directory. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.registry">registry</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-helm.provider.HelmProviderRegistry">HelmProviderRegistry</a>[]</code> | registry block. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.registryConfigPath">registryConfigPath</a></code> | <code>string</code> | The path to the registry config file. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.repositoryCache">repositoryCache</a></code> | <code>string</code> | The path to the file containing cached repository indexes. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderConfig.property.repositoryConfigPath">repositoryConfigPath</a></code> | <code>string</code> | The path to the file containing repository names and URLs. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#alias HelmProvider#alias}

---

##### `burstLimit`<sup>Optional</sup> <a name="burstLimit" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.burstLimit"></a>

```typescript
public readonly burstLimit: number;
```

- *Type:* number

Helm burst limit. Increase this if you have a cluster with many CRDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#burst_limit HelmProvider#burst_limit}

---

##### `debug`<sup>Optional</sup> <a name="debug" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.debug"></a>

```typescript
public readonly debug: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Debug indicates whether or not Helm is running in Debug mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#debug HelmProvider#debug}

---

##### `experiments`<sup>Optional</sup> <a name="experiments" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.experiments"></a>

```typescript
public readonly experiments: HelmProviderExperiments;
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderExperiments">HelmProviderExperiments</a>

experiments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#experiments HelmProvider#experiments}

---

##### `helmDriver`<sup>Optional</sup> <a name="helmDriver" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.helmDriver"></a>

```typescript
public readonly helmDriver: string;
```

- *Type:* string

The backend storage driver. Values are: configmap, secret, memory, sql.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#helm_driver HelmProvider#helm_driver}

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.kubernetes"></a>

```typescript
public readonly kubernetes: HelmProviderKubernetes;
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes">HelmProviderKubernetes</a>

kubernetes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#kubernetes HelmProvider#kubernetes}

---

##### `pluginsPath`<sup>Optional</sup> <a name="pluginsPath" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.pluginsPath"></a>

```typescript
public readonly pluginsPath: string;
```

- *Type:* string

The path to the helm plugins directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#plugins_path HelmProvider#plugins_path}

---

##### `registry`<sup>Optional</sup> <a name="registry" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.registry"></a>

```typescript
public readonly registry: IResolvable | HelmProviderRegistry[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.provider.HelmProviderRegistry">HelmProviderRegistry</a>[]

registry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#registry HelmProvider#registry}

---

##### `registryConfigPath`<sup>Optional</sup> <a name="registryConfigPath" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.registryConfigPath"></a>

```typescript
public readonly registryConfigPath: string;
```

- *Type:* string

The path to the registry config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#registry_config_path HelmProvider#registry_config_path}

---

##### `repositoryCache`<sup>Optional</sup> <a name="repositoryCache" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.repositoryCache"></a>

```typescript
public readonly repositoryCache: string;
```

- *Type:* string

The path to the file containing cached repository indexes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#repository_cache HelmProvider#repository_cache}

---

##### `repositoryConfigPath`<sup>Optional</sup> <a name="repositoryConfigPath" id="@cdktf/provider-helm.provider.HelmProviderConfig.property.repositoryConfigPath"></a>

```typescript
public readonly repositoryConfigPath: string;
```

- *Type:* string

The path to the file containing repository names and URLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#repository_config_path HelmProvider#repository_config_path}

---

### HelmProviderExperiments <a name="HelmProviderExperiments" id="@cdktf/provider-helm.provider.HelmProviderExperiments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.provider.HelmProviderExperiments.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-helm'

const helmProviderExperiments: provider.HelmProviderExperiments = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderExperiments.property.manifest">manifest</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable full diff by storing the rendered manifest in the state. |

---

##### `manifest`<sup>Optional</sup> <a name="manifest" id="@cdktf/provider-helm.provider.HelmProviderExperiments.property.manifest"></a>

```typescript
public readonly manifest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable full diff by storing the rendered manifest in the state.

This has similar limitations as when using helm install --dry-run. See https://helm.sh/docs/chart_best_practices/custom_resource_definitions/#install-a-crd-declaration-before-using-the-resource

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#manifest HelmProvider#manifest}

---

### HelmProviderKubernetes <a name="HelmProviderKubernetes" id="@cdktf/provider-helm.provider.HelmProviderKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-helm'

const helmProviderKubernetes: provider.HelmProviderKubernetes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.clientCertificate">clientCertificate</a></code> | <code>string</code> | PEM-encoded client certificate for TLS authentication. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.clientKey">clientKey</a></code> | <code>string</code> | PEM-encoded client certificate key for TLS authentication. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.clusterCaCertificate">clusterCaCertificate</a></code> | <code>string</code> | PEM-encoded root certificates bundle for TLS authentication. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configContext">configContext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#config_context HelmProvider#config_context}. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configContextAuthInfo">configContextAuthInfo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#config_context_auth_info HelmProvider#config_context_auth_info}. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configContextCluster">configContextCluster</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#config_context_cluster HelmProvider#config_context_cluster}. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configPath">configPath</a></code> | <code>string</code> | Path to the kube config file. Can be set with KUBE_CONFIG_PATH. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configPaths">configPaths</a></code> | <code>string[]</code> | A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.exec">exec</a></code> | <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetesExec">HelmProviderKubernetesExec</a></code> | exec block. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.host">host</a></code> | <code>string</code> | The hostname (in form of URI) of Kubernetes master. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.insecure">insecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether server should be accessed without verifying the TLS certificate. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.password">password</a></code> | <code>string</code> | The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.proxyUrl">proxyUrl</a></code> | <code>string</code> | URL to the proxy to be used for all API requests. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.tlsServerName">tlsServerName</a></code> | <code>string</code> | Server name passed to the server for SNI and is used in the client to check server certificates against. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.token">token</a></code> | <code>string</code> | Token to authenticate an service account. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetes.property.username">username</a></code> | <code>string</code> | The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint. |

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.clientCertificate"></a>

```typescript
public readonly clientCertificate: string;
```

- *Type:* string

PEM-encoded client certificate for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#client_certificate HelmProvider#client_certificate}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.clientKey"></a>

```typescript
public readonly clientKey: string;
```

- *Type:* string

PEM-encoded client certificate key for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#client_key HelmProvider#client_key}

---

##### `clusterCaCertificate`<sup>Optional</sup> <a name="clusterCaCertificate" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.clusterCaCertificate"></a>

```typescript
public readonly clusterCaCertificate: string;
```

- *Type:* string

PEM-encoded root certificates bundle for TLS authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#cluster_ca_certificate HelmProvider#cluster_ca_certificate}

---

##### `configContext`<sup>Optional</sup> <a name="configContext" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configContext"></a>

```typescript
public readonly configContext: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#config_context HelmProvider#config_context}.

---

##### `configContextAuthInfo`<sup>Optional</sup> <a name="configContextAuthInfo" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configContextAuthInfo"></a>

```typescript
public readonly configContextAuthInfo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#config_context_auth_info HelmProvider#config_context_auth_info}.

---

##### `configContextCluster`<sup>Optional</sup> <a name="configContextCluster" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configContextCluster"></a>

```typescript
public readonly configContextCluster: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#config_context_cluster HelmProvider#config_context_cluster}.

---

##### `configPath`<sup>Optional</sup> <a name="configPath" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configPath"></a>

```typescript
public readonly configPath: string;
```

- *Type:* string

Path to the kube config file. Can be set with KUBE_CONFIG_PATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#config_path HelmProvider#config_path}

---

##### `configPaths`<sup>Optional</sup> <a name="configPaths" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.configPaths"></a>

```typescript
public readonly configPaths: string[];
```

- *Type:* string[]

A list of paths to kube config files. Can be set with KUBE_CONFIG_PATHS environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#config_paths HelmProvider#config_paths}

---

##### `exec`<sup>Optional</sup> <a name="exec" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.exec"></a>

```typescript
public readonly exec: HelmProviderKubernetesExec;
```

- *Type:* <a href="#@cdktf/provider-helm.provider.HelmProviderKubernetesExec">HelmProviderKubernetesExec</a>

exec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#exec HelmProvider#exec}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The hostname (in form of URI) of Kubernetes master.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#host HelmProvider#host}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether server should be accessed without verifying the TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#insecure HelmProvider#insecure}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#password HelmProvider#password}

---

##### `proxyUrl`<sup>Optional</sup> <a name="proxyUrl" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.proxyUrl"></a>

```typescript
public readonly proxyUrl: string;
```

- *Type:* string

URL to the proxy to be used for all API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#proxy_url HelmProvider#proxy_url}

---

##### `tlsServerName`<sup>Optional</sup> <a name="tlsServerName" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.tlsServerName"></a>

```typescript
public readonly tlsServerName: string;
```

- *Type:* string

Server name passed to the server for SNI and is used in the client to check server certificates against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#tls_server_name HelmProvider#tls_server_name}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Token to authenticate an service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#token HelmProvider#token}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-helm.provider.HelmProviderKubernetes.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#username HelmProvider#username}

---

### HelmProviderKubernetesExec <a name="HelmProviderKubernetesExec" id="@cdktf/provider-helm.provider.HelmProviderKubernetesExec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.provider.HelmProviderKubernetesExec.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-helm'

const helmProviderKubernetesExec: provider.HelmProviderKubernetesExec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.apiVersion">apiVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#api_version HelmProvider#api_version}. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.command">command</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#command HelmProvider#command}. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.args">args</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#args HelmProvider#args}. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.env">env</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#env HelmProvider#env}. |

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#api_version HelmProvider#api_version}.

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.command"></a>

```typescript
public readonly command: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#command HelmProvider#command}.

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#args HelmProvider#args}.

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-helm.provider.HelmProviderKubernetesExec.property.env"></a>

```typescript
public readonly env: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#env HelmProvider#env}.

---

### HelmProviderRegistry <a name="HelmProviderRegistry" id="@cdktf/provider-helm.provider.HelmProviderRegistry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.provider.HelmProviderRegistry.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-helm'

const helmProviderRegistry: provider.HelmProviderRegistry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderRegistry.property.password">password</a></code> | <code>string</code> | The password to use for the OCI HTTP basic authentication when accessing the Kubernetes master endpoint. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderRegistry.property.url">url</a></code> | <code>string</code> | OCI URL in form of oci://host:port or oci://host. |
| <code><a href="#@cdktf/provider-helm.provider.HelmProviderRegistry.property.username">username</a></code> | <code>string</code> | The username to use for the OCI HTTP basic authentication when accessing the Kubernetes master endpoint. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-helm.provider.HelmProviderRegistry.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password to use for the OCI HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#password HelmProvider#password}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-helm.provider.HelmProviderRegistry.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

OCI URL in form of oci://host:port or oci://host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#url HelmProvider#url}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-helm.provider.HelmProviderRegistry.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username to use for the OCI HTTP basic authentication when accessing the Kubernetes master endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.16.0/docs#username HelmProvider#username}

---



