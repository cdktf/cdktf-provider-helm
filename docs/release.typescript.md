# `helm_release`

Refer to the Terraform Registory for docs: [`helm_release`](https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release).

# `release` Submodule <a name="`release` Submodule" id="@cdktf/provider-helm.release"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Release <a name="Release" id="@cdktf/provider-helm.release.Release"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release helm_release}.

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.Release.Initializer"></a>

```typescript
import { release } from '@cdktf/provider-helm'

new release.Release(scope: Construct, id: string, config: ReleaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleaseConfig">ReleaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-helm.release.Release.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-helm.release.Release.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-helm.release.Release.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-helm.release.ReleaseConfig">ReleaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.Release.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-helm.release.Release.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-helm.release.Release.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-helm.release.Release.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-helm.release.Release.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.putPostrender">putPostrender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.putSet">putSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.putSetList">putSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.putSetSensitive">putSetSensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetAtomic">resetAtomic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetCleanupOnFail">resetCleanupOnFail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetCreateNamespace">resetCreateNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetDependencyUpdate">resetDependencyUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetDevel">resetDevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetDisableCrdHooks">resetDisableCrdHooks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetDisableOpenapiValidation">resetDisableOpenapiValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetDisableWebhooks">resetDisableWebhooks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetForceUpdate">resetForceUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetKeyring">resetKeyring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetLint">resetLint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetMaxHistory">resetMaxHistory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetPassCredentials">resetPassCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetPostrender">resetPostrender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRecreatePods">resetRecreatePods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRenderSubchartNotes">resetRenderSubchartNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetReplace">resetReplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRepository">resetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRepositoryCaFile">resetRepositoryCaFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRepositoryCertFile">resetRepositoryCertFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRepositoryKeyFile">resetRepositoryKeyFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRepositoryPassword">resetRepositoryPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRepositoryUsername">resetRepositoryUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetResetValues">resetResetValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetReuseValues">resetReuseValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetSet">resetSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetSetList">resetSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetSetSensitive">resetSetSensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetSkipCrds">resetSkipCrds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetTfValues">resetTfValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetVerify">resetVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetVersion">resetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetWait">resetWait</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetWaitForJobs">resetWaitForJobs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.release.Release.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-helm.release.Release.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-helm.release.Release.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.Release.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-helm.release.Release.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-helm.release.Release.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-helm.release.Release.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-helm.release.Release.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-helm.release.Release.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-helm.release.Release.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.Release.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-helm.release.Release.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.Release.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-helm.release.Release.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.Release.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-helm.release.Release.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.Release.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-helm.release.Release.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.Release.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-helm.release.Release.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.Release.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-helm.release.Release.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.Release.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-helm.release.Release.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.Release.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-helm.release.Release.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.Release.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-helm.release.Release.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.Release.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putPostrender` <a name="putPostrender" id="@cdktf/provider-helm.release.Release.putPostrender"></a>

```typescript
public putPostrender(value: ReleasePostrender): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.Release.putPostrender.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a>

---

##### `putSet` <a name="putSet" id="@cdktf/provider-helm.release.Release.putSet"></a>

```typescript
public putSet(value: IResolvable | ReleaseSet[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.Release.putSet.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a>[]

---

##### `putSetList` <a name="putSetList" id="@cdktf/provider-helm.release.Release.putSetList"></a>

```typescript
public putSetList(value: IResolvable | ReleaseSetListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.Release.putSetList.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>[]

---

##### `putSetSensitive` <a name="putSetSensitive" id="@cdktf/provider-helm.release.Release.putSetSensitive"></a>

```typescript
public putSetSensitive(value: IResolvable | ReleaseSetSensitive[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.Release.putSetSensitive.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>[]

---

##### `resetAtomic` <a name="resetAtomic" id="@cdktf/provider-helm.release.Release.resetAtomic"></a>

```typescript
public resetAtomic(): void
```

##### `resetCleanupOnFail` <a name="resetCleanupOnFail" id="@cdktf/provider-helm.release.Release.resetCleanupOnFail"></a>

```typescript
public resetCleanupOnFail(): void
```

##### `resetCreateNamespace` <a name="resetCreateNamespace" id="@cdktf/provider-helm.release.Release.resetCreateNamespace"></a>

```typescript
public resetCreateNamespace(): void
```

##### `resetDependencyUpdate` <a name="resetDependencyUpdate" id="@cdktf/provider-helm.release.Release.resetDependencyUpdate"></a>

```typescript
public resetDependencyUpdate(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-helm.release.Release.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDevel` <a name="resetDevel" id="@cdktf/provider-helm.release.Release.resetDevel"></a>

```typescript
public resetDevel(): void
```

##### `resetDisableCrdHooks` <a name="resetDisableCrdHooks" id="@cdktf/provider-helm.release.Release.resetDisableCrdHooks"></a>

```typescript
public resetDisableCrdHooks(): void
```

##### `resetDisableOpenapiValidation` <a name="resetDisableOpenapiValidation" id="@cdktf/provider-helm.release.Release.resetDisableOpenapiValidation"></a>

```typescript
public resetDisableOpenapiValidation(): void
```

##### `resetDisableWebhooks` <a name="resetDisableWebhooks" id="@cdktf/provider-helm.release.Release.resetDisableWebhooks"></a>

```typescript
public resetDisableWebhooks(): void
```

##### `resetForceUpdate` <a name="resetForceUpdate" id="@cdktf/provider-helm.release.Release.resetForceUpdate"></a>

```typescript
public resetForceUpdate(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-helm.release.Release.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeyring` <a name="resetKeyring" id="@cdktf/provider-helm.release.Release.resetKeyring"></a>

```typescript
public resetKeyring(): void
```

##### `resetLint` <a name="resetLint" id="@cdktf/provider-helm.release.Release.resetLint"></a>

```typescript
public resetLint(): void
```

##### `resetMaxHistory` <a name="resetMaxHistory" id="@cdktf/provider-helm.release.Release.resetMaxHistory"></a>

```typescript
public resetMaxHistory(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-helm.release.Release.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPassCredentials` <a name="resetPassCredentials" id="@cdktf/provider-helm.release.Release.resetPassCredentials"></a>

```typescript
public resetPassCredentials(): void
```

##### `resetPostrender` <a name="resetPostrender" id="@cdktf/provider-helm.release.Release.resetPostrender"></a>

```typescript
public resetPostrender(): void
```

##### `resetRecreatePods` <a name="resetRecreatePods" id="@cdktf/provider-helm.release.Release.resetRecreatePods"></a>

```typescript
public resetRecreatePods(): void
```

##### `resetRenderSubchartNotes` <a name="resetRenderSubchartNotes" id="@cdktf/provider-helm.release.Release.resetRenderSubchartNotes"></a>

```typescript
public resetRenderSubchartNotes(): void
```

##### `resetReplace` <a name="resetReplace" id="@cdktf/provider-helm.release.Release.resetReplace"></a>

```typescript
public resetReplace(): void
```

##### `resetRepository` <a name="resetRepository" id="@cdktf/provider-helm.release.Release.resetRepository"></a>

```typescript
public resetRepository(): void
```

##### `resetRepositoryCaFile` <a name="resetRepositoryCaFile" id="@cdktf/provider-helm.release.Release.resetRepositoryCaFile"></a>

```typescript
public resetRepositoryCaFile(): void
```

##### `resetRepositoryCertFile` <a name="resetRepositoryCertFile" id="@cdktf/provider-helm.release.Release.resetRepositoryCertFile"></a>

```typescript
public resetRepositoryCertFile(): void
```

##### `resetRepositoryKeyFile` <a name="resetRepositoryKeyFile" id="@cdktf/provider-helm.release.Release.resetRepositoryKeyFile"></a>

```typescript
public resetRepositoryKeyFile(): void
```

##### `resetRepositoryPassword` <a name="resetRepositoryPassword" id="@cdktf/provider-helm.release.Release.resetRepositoryPassword"></a>

```typescript
public resetRepositoryPassword(): void
```

##### `resetRepositoryUsername` <a name="resetRepositoryUsername" id="@cdktf/provider-helm.release.Release.resetRepositoryUsername"></a>

```typescript
public resetRepositoryUsername(): void
```

##### `resetResetValues` <a name="resetResetValues" id="@cdktf/provider-helm.release.Release.resetResetValues"></a>

```typescript
public resetResetValues(): void
```

##### `resetReuseValues` <a name="resetReuseValues" id="@cdktf/provider-helm.release.Release.resetReuseValues"></a>

```typescript
public resetReuseValues(): void
```

##### `resetSet` <a name="resetSet" id="@cdktf/provider-helm.release.Release.resetSet"></a>

```typescript
public resetSet(): void
```

##### `resetSetList` <a name="resetSetList" id="@cdktf/provider-helm.release.Release.resetSetList"></a>

```typescript
public resetSetList(): void
```

##### `resetSetSensitive` <a name="resetSetSensitive" id="@cdktf/provider-helm.release.Release.resetSetSensitive"></a>

```typescript
public resetSetSensitive(): void
```

##### `resetSkipCrds` <a name="resetSkipCrds" id="@cdktf/provider-helm.release.Release.resetSkipCrds"></a>

```typescript
public resetSkipCrds(): void
```

##### `resetTfValues` <a name="resetTfValues" id="@cdktf/provider-helm.release.Release.resetTfValues"></a>

```typescript
public resetTfValues(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-helm.release.Release.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetVerify` <a name="resetVerify" id="@cdktf/provider-helm.release.Release.resetVerify"></a>

```typescript
public resetVerify(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-helm.release.Release.resetVersion"></a>

```typescript
public resetVersion(): void
```

##### `resetWait` <a name="resetWait" id="@cdktf/provider-helm.release.Release.resetWait"></a>

```typescript
public resetWait(): void
```

##### `resetWaitForJobs` <a name="resetWaitForJobs" id="@cdktf/provider-helm.release.Release.resetWaitForJobs"></a>

```typescript
public resetWaitForJobs(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.Release.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-helm.release.Release.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-helm.release.Release.isConstruct"></a>

```typescript
import { release } from '@cdktf/provider-helm'

release.Release.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-helm.release.Release.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-helm.release.Release.isTerraformElement"></a>

```typescript
import { release } from '@cdktf/provider-helm'

release.Release.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-helm.release.Release.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-helm.release.Release.isTerraformResource"></a>

```typescript
import { release } from '@cdktf/provider-helm'

release.Release.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-helm.release.Release.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.Release.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-helm.release.Release.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.manifest">manifest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList">ReleaseMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.postrender">postrender</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference">ReleasePostrenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.set">set</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleaseSetList">ReleaseSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.setList">setList</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList">ReleaseSetListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.setSensitive">setSensitive</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList">ReleaseSetSensitiveList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.atomicInput">atomicInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.chartInput">chartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.cleanupOnFailInput">cleanupOnFailInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.createNamespaceInput">createNamespaceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.dependencyUpdateInput">dependencyUpdateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.develInput">develInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.disableCrdHooksInput">disableCrdHooksInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.disableOpenapiValidationInput">disableOpenapiValidationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.disableWebhooksInput">disableWebhooksInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.forceUpdateInput">forceUpdateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.keyringInput">keyringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.lintInput">lintInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.maxHistoryInput">maxHistoryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.passCredentialsInput">passCredentialsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.postrenderInput">postrenderInput</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.recreatePodsInput">recreatePodsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.renderSubchartNotesInput">renderSubchartNotesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.replaceInput">replaceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryCaFileInput">repositoryCaFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryCertFileInput">repositoryCertFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryKeyFileInput">repositoryKeyFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryPasswordInput">repositoryPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryUsernameInput">repositoryUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.resetValuesInput">resetValuesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.reuseValuesInput">reuseValuesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.setInput">setInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.setListInput">setListInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.setSensitiveInput">setSensitiveInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.skipCrdsInput">skipCrdsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.verifyInput">verifyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.waitForJobsInput">waitForJobsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.waitInput">waitInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.atomic">atomic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.chart">chart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.cleanupOnFail">cleanupOnFail</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.createNamespace">createNamespace</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.dependencyUpdate">dependencyUpdate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.devel">devel</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.disableCrdHooks">disableCrdHooks</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.disableOpenapiValidation">disableOpenapiValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.disableWebhooks">disableWebhooks</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.forceUpdate">forceUpdate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.keyring">keyring</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.lint">lint</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.maxHistory">maxHistory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.passCredentials">passCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.recreatePods">recreatePods</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.renderSubchartNotes">renderSubchartNotes</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.replace">replace</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryCaFile">repositoryCaFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryCertFile">repositoryCertFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryKeyFile">repositoryKeyFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryPassword">repositoryPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryUsername">repositoryUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.resetValues">resetValues</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.reuseValues">reuseValues</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.skipCrds">skipCrds</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.verify">verify</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.wait">wait</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.waitForJobs">waitForJobs</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-helm.release.Release.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-helm.release.Release.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.Release.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-helm.release.Release.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-helm.release.Release.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-helm.release.Release.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-helm.release.Release.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-helm.release.Release.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-helm.release.Release.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-helm.release.Release.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-helm.release.Release.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-helm.release.Release.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-helm.release.Release.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-helm.release.Release.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-helm.release.Release.property.manifest"></a>

```typescript
public readonly manifest: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-helm.release.Release.property.metadata"></a>

```typescript
public readonly metadata: ReleaseMetadataList;
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleaseMetadataList">ReleaseMetadataList</a>

---

##### `postrender`<sup>Required</sup> <a name="postrender" id="@cdktf/provider-helm.release.Release.property.postrender"></a>

```typescript
public readonly postrender: ReleasePostrenderOutputReference;
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference">ReleasePostrenderOutputReference</a>

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-helm.release.Release.property.set"></a>

```typescript
public readonly set: ReleaseSetList;
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleaseSetList">ReleaseSetList</a>

---

##### `setList`<sup>Required</sup> <a name="setList" id="@cdktf/provider-helm.release.Release.property.setList"></a>

```typescript
public readonly setList: ReleaseSetListStructList;
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleaseSetListStructList">ReleaseSetListStructList</a>

---

##### `setSensitive`<sup>Required</sup> <a name="setSensitive" id="@cdktf/provider-helm.release.Release.property.setSensitive"></a>

```typescript
public readonly setSensitive: ReleaseSetSensitiveList;
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList">ReleaseSetSensitiveList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-helm.release.Release.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `atomicInput`<sup>Optional</sup> <a name="atomicInput" id="@cdktf/provider-helm.release.Release.property.atomicInput"></a>

```typescript
public readonly atomicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `chartInput`<sup>Optional</sup> <a name="chartInput" id="@cdktf/provider-helm.release.Release.property.chartInput"></a>

```typescript
public readonly chartInput: string;
```

- *Type:* string

---

##### `cleanupOnFailInput`<sup>Optional</sup> <a name="cleanupOnFailInput" id="@cdktf/provider-helm.release.Release.property.cleanupOnFailInput"></a>

```typescript
public readonly cleanupOnFailInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `createNamespaceInput`<sup>Optional</sup> <a name="createNamespaceInput" id="@cdktf/provider-helm.release.Release.property.createNamespaceInput"></a>

```typescript
public readonly createNamespaceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dependencyUpdateInput`<sup>Optional</sup> <a name="dependencyUpdateInput" id="@cdktf/provider-helm.release.Release.property.dependencyUpdateInput"></a>

```typescript
public readonly dependencyUpdateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-helm.release.Release.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `develInput`<sup>Optional</sup> <a name="develInput" id="@cdktf/provider-helm.release.Release.property.develInput"></a>

```typescript
public readonly develInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableCrdHooksInput`<sup>Optional</sup> <a name="disableCrdHooksInput" id="@cdktf/provider-helm.release.Release.property.disableCrdHooksInput"></a>

```typescript
public readonly disableCrdHooksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableOpenapiValidationInput`<sup>Optional</sup> <a name="disableOpenapiValidationInput" id="@cdktf/provider-helm.release.Release.property.disableOpenapiValidationInput"></a>

```typescript
public readonly disableOpenapiValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableWebhooksInput`<sup>Optional</sup> <a name="disableWebhooksInput" id="@cdktf/provider-helm.release.Release.property.disableWebhooksInput"></a>

```typescript
public readonly disableWebhooksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceUpdateInput`<sup>Optional</sup> <a name="forceUpdateInput" id="@cdktf/provider-helm.release.Release.property.forceUpdateInput"></a>

```typescript
public readonly forceUpdateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-helm.release.Release.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyringInput`<sup>Optional</sup> <a name="keyringInput" id="@cdktf/provider-helm.release.Release.property.keyringInput"></a>

```typescript
public readonly keyringInput: string;
```

- *Type:* string

---

##### `lintInput`<sup>Optional</sup> <a name="lintInput" id="@cdktf/provider-helm.release.Release.property.lintInput"></a>

```typescript
public readonly lintInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxHistoryInput`<sup>Optional</sup> <a name="maxHistoryInput" id="@cdktf/provider-helm.release.Release.property.maxHistoryInput"></a>

```typescript
public readonly maxHistoryInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-helm.release.Release.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-helm.release.Release.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `passCredentialsInput`<sup>Optional</sup> <a name="passCredentialsInput" id="@cdktf/provider-helm.release.Release.property.passCredentialsInput"></a>

```typescript
public readonly passCredentialsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `postrenderInput`<sup>Optional</sup> <a name="postrenderInput" id="@cdktf/provider-helm.release.Release.property.postrenderInput"></a>

```typescript
public readonly postrenderInput: ReleasePostrender;
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a>

---

##### `recreatePodsInput`<sup>Optional</sup> <a name="recreatePodsInput" id="@cdktf/provider-helm.release.Release.property.recreatePodsInput"></a>

```typescript
public readonly recreatePodsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `renderSubchartNotesInput`<sup>Optional</sup> <a name="renderSubchartNotesInput" id="@cdktf/provider-helm.release.Release.property.renderSubchartNotesInput"></a>

```typescript
public readonly renderSubchartNotesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `replaceInput`<sup>Optional</sup> <a name="replaceInput" id="@cdktf/provider-helm.release.Release.property.replaceInput"></a>

```typescript
public readonly replaceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repositoryCaFileInput`<sup>Optional</sup> <a name="repositoryCaFileInput" id="@cdktf/provider-helm.release.Release.property.repositoryCaFileInput"></a>

```typescript
public readonly repositoryCaFileInput: string;
```

- *Type:* string

---

##### `repositoryCertFileInput`<sup>Optional</sup> <a name="repositoryCertFileInput" id="@cdktf/provider-helm.release.Release.property.repositoryCertFileInput"></a>

```typescript
public readonly repositoryCertFileInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-helm.release.Release.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `repositoryKeyFileInput`<sup>Optional</sup> <a name="repositoryKeyFileInput" id="@cdktf/provider-helm.release.Release.property.repositoryKeyFileInput"></a>

```typescript
public readonly repositoryKeyFileInput: string;
```

- *Type:* string

---

##### `repositoryPasswordInput`<sup>Optional</sup> <a name="repositoryPasswordInput" id="@cdktf/provider-helm.release.Release.property.repositoryPasswordInput"></a>

```typescript
public readonly repositoryPasswordInput: string;
```

- *Type:* string

---

##### `repositoryUsernameInput`<sup>Optional</sup> <a name="repositoryUsernameInput" id="@cdktf/provider-helm.release.Release.property.repositoryUsernameInput"></a>

```typescript
public readonly repositoryUsernameInput: string;
```

- *Type:* string

---

##### `resetValuesInput`<sup>Optional</sup> <a name="resetValuesInput" id="@cdktf/provider-helm.release.Release.property.resetValuesInput"></a>

```typescript
public readonly resetValuesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reuseValuesInput`<sup>Optional</sup> <a name="reuseValuesInput" id="@cdktf/provider-helm.release.Release.property.reuseValuesInput"></a>

```typescript
public readonly reuseValuesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `setInput`<sup>Optional</sup> <a name="setInput" id="@cdktf/provider-helm.release.Release.property.setInput"></a>

```typescript
public readonly setInput: IResolvable | ReleaseSet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a>[]

---

##### `setListInput`<sup>Optional</sup> <a name="setListInput" id="@cdktf/provider-helm.release.Release.property.setListInput"></a>

```typescript
public readonly setListInput: IResolvable | ReleaseSetListStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>[]

---

##### `setSensitiveInput`<sup>Optional</sup> <a name="setSensitiveInput" id="@cdktf/provider-helm.release.Release.property.setSensitiveInput"></a>

```typescript
public readonly setSensitiveInput: IResolvable | ReleaseSetSensitive[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>[]

---

##### `skipCrdsInput`<sup>Optional</sup> <a name="skipCrdsInput" id="@cdktf/provider-helm.release.Release.property.skipCrdsInput"></a>

```typescript
public readonly skipCrdsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-helm.release.Release.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-helm.release.Release.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `verifyInput`<sup>Optional</sup> <a name="verifyInput" id="@cdktf/provider-helm.release.Release.property.verifyInput"></a>

```typescript
public readonly verifyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-helm.release.Release.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `waitForJobsInput`<sup>Optional</sup> <a name="waitForJobsInput" id="@cdktf/provider-helm.release.Release.property.waitForJobsInput"></a>

```typescript
public readonly waitForJobsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `waitInput`<sup>Optional</sup> <a name="waitInput" id="@cdktf/provider-helm.release.Release.property.waitInput"></a>

```typescript
public readonly waitInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `atomic`<sup>Required</sup> <a name="atomic" id="@cdktf/provider-helm.release.Release.property.atomic"></a>

```typescript
public readonly atomic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `chart`<sup>Required</sup> <a name="chart" id="@cdktf/provider-helm.release.Release.property.chart"></a>

```typescript
public readonly chart: string;
```

- *Type:* string

---

##### `cleanupOnFail`<sup>Required</sup> <a name="cleanupOnFail" id="@cdktf/provider-helm.release.Release.property.cleanupOnFail"></a>

```typescript
public readonly cleanupOnFail: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `createNamespace`<sup>Required</sup> <a name="createNamespace" id="@cdktf/provider-helm.release.Release.property.createNamespace"></a>

```typescript
public readonly createNamespace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dependencyUpdate`<sup>Required</sup> <a name="dependencyUpdate" id="@cdktf/provider-helm.release.Release.property.dependencyUpdate"></a>

```typescript
public readonly dependencyUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-helm.release.Release.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `devel`<sup>Required</sup> <a name="devel" id="@cdktf/provider-helm.release.Release.property.devel"></a>

```typescript
public readonly devel: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableCrdHooks`<sup>Required</sup> <a name="disableCrdHooks" id="@cdktf/provider-helm.release.Release.property.disableCrdHooks"></a>

```typescript
public readonly disableCrdHooks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableOpenapiValidation`<sup>Required</sup> <a name="disableOpenapiValidation" id="@cdktf/provider-helm.release.Release.property.disableOpenapiValidation"></a>

```typescript
public readonly disableOpenapiValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableWebhooks`<sup>Required</sup> <a name="disableWebhooks" id="@cdktf/provider-helm.release.Release.property.disableWebhooks"></a>

```typescript
public readonly disableWebhooks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `forceUpdate`<sup>Required</sup> <a name="forceUpdate" id="@cdktf/provider-helm.release.Release.property.forceUpdate"></a>

```typescript
public readonly forceUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-helm.release.Release.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyring`<sup>Required</sup> <a name="keyring" id="@cdktf/provider-helm.release.Release.property.keyring"></a>

```typescript
public readonly keyring: string;
```

- *Type:* string

---

##### `lint`<sup>Required</sup> <a name="lint" id="@cdktf/provider-helm.release.Release.property.lint"></a>

```typescript
public readonly lint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxHistory`<sup>Required</sup> <a name="maxHistory" id="@cdktf/provider-helm.release.Release.property.maxHistory"></a>

```typescript
public readonly maxHistory: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.Release.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-helm.release.Release.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `passCredentials`<sup>Required</sup> <a name="passCredentials" id="@cdktf/provider-helm.release.Release.property.passCredentials"></a>

```typescript
public readonly passCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `recreatePods`<sup>Required</sup> <a name="recreatePods" id="@cdktf/provider-helm.release.Release.property.recreatePods"></a>

```typescript
public readonly recreatePods: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `renderSubchartNotes`<sup>Required</sup> <a name="renderSubchartNotes" id="@cdktf/provider-helm.release.Release.property.renderSubchartNotes"></a>

```typescript
public readonly renderSubchartNotes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `replace`<sup>Required</sup> <a name="replace" id="@cdktf/provider-helm.release.Release.property.replace"></a>

```typescript
public readonly replace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-helm.release.Release.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `repositoryCaFile`<sup>Required</sup> <a name="repositoryCaFile" id="@cdktf/provider-helm.release.Release.property.repositoryCaFile"></a>

```typescript
public readonly repositoryCaFile: string;
```

- *Type:* string

---

##### `repositoryCertFile`<sup>Required</sup> <a name="repositoryCertFile" id="@cdktf/provider-helm.release.Release.property.repositoryCertFile"></a>

```typescript
public readonly repositoryCertFile: string;
```

- *Type:* string

---

##### `repositoryKeyFile`<sup>Required</sup> <a name="repositoryKeyFile" id="@cdktf/provider-helm.release.Release.property.repositoryKeyFile"></a>

```typescript
public readonly repositoryKeyFile: string;
```

- *Type:* string

---

##### `repositoryPassword`<sup>Required</sup> <a name="repositoryPassword" id="@cdktf/provider-helm.release.Release.property.repositoryPassword"></a>

```typescript
public readonly repositoryPassword: string;
```

- *Type:* string

---

##### `repositoryUsername`<sup>Required</sup> <a name="repositoryUsername" id="@cdktf/provider-helm.release.Release.property.repositoryUsername"></a>

```typescript
public readonly repositoryUsername: string;
```

- *Type:* string

---

##### `resetValues`<sup>Required</sup> <a name="resetValues" id="@cdktf/provider-helm.release.Release.property.resetValues"></a>

```typescript
public readonly resetValues: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reuseValues`<sup>Required</sup> <a name="reuseValues" id="@cdktf/provider-helm.release.Release.property.reuseValues"></a>

```typescript
public readonly reuseValues: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipCrds`<sup>Required</sup> <a name="skipCrds" id="@cdktf/provider-helm.release.Release.property.skipCrds"></a>

```typescript
public readonly skipCrds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-helm.release.Release.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-helm.release.Release.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `verify`<sup>Required</sup> <a name="verify" id="@cdktf/provider-helm.release.Release.property.verify"></a>

```typescript
public readonly verify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-helm.release.Release.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `wait`<sup>Required</sup> <a name="wait" id="@cdktf/provider-helm.release.Release.property.wait"></a>

```typescript
public readonly wait: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `waitForJobs`<sup>Required</sup> <a name="waitForJobs" id="@cdktf/provider-helm.release.Release.property.waitForJobs"></a>

```typescript
public readonly waitForJobs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.Release.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-helm.release.Release.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ReleaseConfig <a name="ReleaseConfig" id="@cdktf/provider-helm.release.ReleaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.release.ReleaseConfig.Initializer"></a>

```typescript
import { release } from '@cdktf/provider-helm'

const releaseConfig: release.ReleaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.chart">chart</a></code> | <code>string</code> | Chart name to be installed. A path may be used. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.name">name</a></code> | <code>string</code> | Release name. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.atomic">atomic</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.cleanupOnFail">cleanupOnFail</a></code> | <code>boolean \| cdktf.IResolvable</code> | Allow deletion of new resources created in this upgrade when upgrade fails. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.createNamespace">createNamespace</a></code> | <code>boolean \| cdktf.IResolvable</code> | Create the namespace if it does not exist. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.dependencyUpdate">dependencyUpdate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Run helm dependency update before installing the chart. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.description">description</a></code> | <code>string</code> | Add a custom description. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.devel">devel</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.disableCrdHooks">disableCrdHooks</a></code> | <code>boolean \| cdktf.IResolvable</code> | Prevent CRD hooks from, running, but run other hooks.  See helm install --no-crd-hook. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.disableOpenapiValidation">disableOpenapiValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.disableWebhooks">disableWebhooks</a></code> | <code>boolean \| cdktf.IResolvable</code> | Prevent hooks from running. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.forceUpdate">forceUpdate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Force resource update through delete/recreate if needed. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#id Release#id}. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.keyring">keyring</a></code> | <code>string</code> | Location of public keys used for verification. Used only if `verify` is true. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.lint">lint</a></code> | <code>boolean \| cdktf.IResolvable</code> | Run helm lint when planning. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.maxHistory">maxHistory</a></code> | <code>number</code> | Limit the maximum number of revisions saved per release. Use 0 for no limit. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.namespace">namespace</a></code> | <code>string</code> | Namespace to install the release into. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.passCredentials">passCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | Pass credentials to all domains. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.postrender">postrender</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a></code> | postrender block. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.recreatePods">recreatePods</a></code> | <code>boolean \| cdktf.IResolvable</code> | Perform pods restart during upgrade/rollback. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.renderSubchartNotes">renderSubchartNotes</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, render subchart notes along with the parent. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.replace">replace</a></code> | <code>boolean \| cdktf.IResolvable</code> | Re-use the given name, even if that name is already used. This is unsafe in production. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.repository">repository</a></code> | <code>string</code> | Repository where to locate the requested chart. If is a URL the chart is installed without installing the repository. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.repositoryCaFile">repositoryCaFile</a></code> | <code>string</code> | The Repositories CA File. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.repositoryCertFile">repositoryCertFile</a></code> | <code>string</code> | The repositories cert file. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.repositoryKeyFile">repositoryKeyFile</a></code> | <code>string</code> | The repositories cert key file. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.repositoryPassword">repositoryPassword</a></code> | <code>string</code> | Password for HTTP basic authentication. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.repositoryUsername">repositoryUsername</a></code> | <code>string</code> | Username for HTTP basic authentication. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.resetValues">resetValues</a></code> | <code>boolean \| cdktf.IResolvable</code> | When upgrading, reset the values to the ones built into the chart. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.reuseValues">reuseValues</a></code> | <code>boolean \| cdktf.IResolvable</code> | When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.set">set</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a>[]</code> | set block. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.setList">setList</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>[]</code> | set_list block. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.setSensitive">setSensitive</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>[]</code> | set_sensitive block. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.skipCrds">skipCrds</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, no CRDs will be installed. By default, CRDs are installed if not already present. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.timeout">timeout</a></code> | <code>number</code> | Time in seconds to wait for any individual kubernetes operation. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.values">values</a></code> | <code>string[]</code> | List of values in raw yaml format to pass to helm. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.verify">verify</a></code> | <code>boolean \| cdktf.IResolvable</code> | Verify the package before installing it. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.version">version</a></code> | <code>string</code> | Specify the exact chart version to install. If this is not specified, the latest version is installed. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.wait">wait</a></code> | <code>boolean \| cdktf.IResolvable</code> | Will wait until all resources are in a ready state before marking the release as successful. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.waitForJobs">waitForJobs</a></code> | <code>boolean \| cdktf.IResolvable</code> | If wait is enabled, will wait until all Jobs have been completed before marking the release as successful. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-helm.release.ReleaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-helm.release.ReleaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-helm.release.ReleaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-helm.release.ReleaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-helm.release.ReleaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-helm.release.ReleaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-helm.release.ReleaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `chart`<sup>Required</sup> <a name="chart" id="@cdktf/provider-helm.release.ReleaseConfig.property.chart"></a>

```typescript
public readonly chart: string;
```

- *Type:* string

Chart name to be installed. A path may be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#chart Release#chart}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.ReleaseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Release name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#name Release#name}

---

##### `atomic`<sup>Optional</sup> <a name="atomic" id="@cdktf/provider-helm.release.ReleaseConfig.property.atomic"></a>

```typescript
public readonly atomic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#atomic Release#atomic}

---

##### `cleanupOnFail`<sup>Optional</sup> <a name="cleanupOnFail" id="@cdktf/provider-helm.release.ReleaseConfig.property.cleanupOnFail"></a>

```typescript
public readonly cleanupOnFail: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Allow deletion of new resources created in this upgrade when upgrade fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#cleanup_on_fail Release#cleanup_on_fail}

---

##### `createNamespace`<sup>Optional</sup> <a name="createNamespace" id="@cdktf/provider-helm.release.ReleaseConfig.property.createNamespace"></a>

```typescript
public readonly createNamespace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Create the namespace if it does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#create_namespace Release#create_namespace}

---

##### `dependencyUpdate`<sup>Optional</sup> <a name="dependencyUpdate" id="@cdktf/provider-helm.release.ReleaseConfig.property.dependencyUpdate"></a>

```typescript
public readonly dependencyUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Run helm dependency update before installing the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#dependency_update Release#dependency_update}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-helm.release.ReleaseConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Add a custom description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#description Release#description}

---

##### `devel`<sup>Optional</sup> <a name="devel" id="@cdktf/provider-helm.release.ReleaseConfig.property.devel"></a>

```typescript
public readonly devel: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#devel Release#devel}

---

##### `disableCrdHooks`<sup>Optional</sup> <a name="disableCrdHooks" id="@cdktf/provider-helm.release.ReleaseConfig.property.disableCrdHooks"></a>

```typescript
public readonly disableCrdHooks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Prevent CRD hooks from, running, but run other hooks.  See helm install --no-crd-hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#disable_crd_hooks Release#disable_crd_hooks}

---

##### `disableOpenapiValidation`<sup>Optional</sup> <a name="disableOpenapiValidation" id="@cdktf/provider-helm.release.ReleaseConfig.property.disableOpenapiValidation"></a>

```typescript
public readonly disableOpenapiValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#disable_openapi_validation Release#disable_openapi_validation}

---

##### `disableWebhooks`<sup>Optional</sup> <a name="disableWebhooks" id="@cdktf/provider-helm.release.ReleaseConfig.property.disableWebhooks"></a>

```typescript
public readonly disableWebhooks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Prevent hooks from running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#disable_webhooks Release#disable_webhooks}

---

##### `forceUpdate`<sup>Optional</sup> <a name="forceUpdate" id="@cdktf/provider-helm.release.ReleaseConfig.property.forceUpdate"></a>

```typescript
public readonly forceUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Force resource update through delete/recreate if needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#force_update Release#force_update}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-helm.release.ReleaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#id Release#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyring`<sup>Optional</sup> <a name="keyring" id="@cdktf/provider-helm.release.ReleaseConfig.property.keyring"></a>

```typescript
public readonly keyring: string;
```

- *Type:* string

Location of public keys used for verification. Used only if `verify` is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#keyring Release#keyring}

---

##### `lint`<sup>Optional</sup> <a name="lint" id="@cdktf/provider-helm.release.ReleaseConfig.property.lint"></a>

```typescript
public readonly lint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Run helm lint when planning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#lint Release#lint}

---

##### `maxHistory`<sup>Optional</sup> <a name="maxHistory" id="@cdktf/provider-helm.release.ReleaseConfig.property.maxHistory"></a>

```typescript
public readonly maxHistory: number;
```

- *Type:* number

Limit the maximum number of revisions saved per release. Use 0 for no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#max_history Release#max_history}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-helm.release.ReleaseConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace to install the release into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#namespace Release#namespace}

---

##### `passCredentials`<sup>Optional</sup> <a name="passCredentials" id="@cdktf/provider-helm.release.ReleaseConfig.property.passCredentials"></a>

```typescript
public readonly passCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Pass credentials to all domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#pass_credentials Release#pass_credentials}

---

##### `postrender`<sup>Optional</sup> <a name="postrender" id="@cdktf/provider-helm.release.ReleaseConfig.property.postrender"></a>

```typescript
public readonly postrender: ReleasePostrender;
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a>

postrender block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#postrender Release#postrender}

---

##### `recreatePods`<sup>Optional</sup> <a name="recreatePods" id="@cdktf/provider-helm.release.ReleaseConfig.property.recreatePods"></a>

```typescript
public readonly recreatePods: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Perform pods restart during upgrade/rollback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#recreate_pods Release#recreate_pods}

---

##### `renderSubchartNotes`<sup>Optional</sup> <a name="renderSubchartNotes" id="@cdktf/provider-helm.release.ReleaseConfig.property.renderSubchartNotes"></a>

```typescript
public readonly renderSubchartNotes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, render subchart notes along with the parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#render_subchart_notes Release#render_subchart_notes}

---

##### `replace`<sup>Optional</sup> <a name="replace" id="@cdktf/provider-helm.release.ReleaseConfig.property.replace"></a>

```typescript
public readonly replace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Re-use the given name, even if that name is already used. This is unsafe in production.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#replace Release#replace}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-helm.release.ReleaseConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

Repository where to locate the requested chart. If is a URL the chart is installed without installing the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#repository Release#repository}

---

##### `repositoryCaFile`<sup>Optional</sup> <a name="repositoryCaFile" id="@cdktf/provider-helm.release.ReleaseConfig.property.repositoryCaFile"></a>

```typescript
public readonly repositoryCaFile: string;
```

- *Type:* string

The Repositories CA File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#repository_ca_file Release#repository_ca_file}

---

##### `repositoryCertFile`<sup>Optional</sup> <a name="repositoryCertFile" id="@cdktf/provider-helm.release.ReleaseConfig.property.repositoryCertFile"></a>

```typescript
public readonly repositoryCertFile: string;
```

- *Type:* string

The repositories cert file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#repository_cert_file Release#repository_cert_file}

---

##### `repositoryKeyFile`<sup>Optional</sup> <a name="repositoryKeyFile" id="@cdktf/provider-helm.release.ReleaseConfig.property.repositoryKeyFile"></a>

```typescript
public readonly repositoryKeyFile: string;
```

- *Type:* string

The repositories cert key file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#repository_key_file Release#repository_key_file}

---

##### `repositoryPassword`<sup>Optional</sup> <a name="repositoryPassword" id="@cdktf/provider-helm.release.ReleaseConfig.property.repositoryPassword"></a>

```typescript
public readonly repositoryPassword: string;
```

- *Type:* string

Password for HTTP basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#repository_password Release#repository_password}

---

##### `repositoryUsername`<sup>Optional</sup> <a name="repositoryUsername" id="@cdktf/provider-helm.release.ReleaseConfig.property.repositoryUsername"></a>

```typescript
public readonly repositoryUsername: string;
```

- *Type:* string

Username for HTTP basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#repository_username Release#repository_username}

---

##### `resetValues`<sup>Optional</sup> <a name="resetValues" id="@cdktf/provider-helm.release.ReleaseConfig.property.resetValues"></a>

```typescript
public readonly resetValues: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When upgrading, reset the values to the ones built into the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#reset_values Release#reset_values}

---

##### `reuseValues`<sup>Optional</sup> <a name="reuseValues" id="@cdktf/provider-helm.release.ReleaseConfig.property.reuseValues"></a>

```typescript
public readonly reuseValues: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#reuse_values Release#reuse_values}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-helm.release.ReleaseConfig.property.set"></a>

```typescript
public readonly set: IResolvable | ReleaseSet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a>[]

set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#set Release#set}

---

##### `setList`<sup>Optional</sup> <a name="setList" id="@cdktf/provider-helm.release.ReleaseConfig.property.setList"></a>

```typescript
public readonly setList: IResolvable | ReleaseSetListStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>[]

set_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#set_list Release#set_list}

---

##### `setSensitive`<sup>Optional</sup> <a name="setSensitive" id="@cdktf/provider-helm.release.ReleaseConfig.property.setSensitive"></a>

```typescript
public readonly setSensitive: IResolvable | ReleaseSetSensitive[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>[]

set_sensitive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#set_sensitive Release#set_sensitive}

---

##### `skipCrds`<sup>Optional</sup> <a name="skipCrds" id="@cdktf/provider-helm.release.ReleaseConfig.property.skipCrds"></a>

```typescript
public readonly skipCrds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, no CRDs will be installed. By default, CRDs are installed if not already present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#skip_crds Release#skip_crds}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-helm.release.ReleaseConfig.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Time in seconds to wait for any individual kubernetes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#timeout Release#timeout}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-helm.release.ReleaseConfig.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

List of values in raw yaml format to pass to helm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#values Release#values}

---

##### `verify`<sup>Optional</sup> <a name="verify" id="@cdktf/provider-helm.release.ReleaseConfig.property.verify"></a>

```typescript
public readonly verify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Verify the package before installing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#verify Release#verify}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-helm.release.ReleaseConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Specify the exact chart version to install. If this is not specified, the latest version is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#version Release#version}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-helm.release.ReleaseConfig.property.wait"></a>

```typescript
public readonly wait: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Will wait until all resources are in a ready state before marking the release as successful.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#wait Release#wait}

---

##### `waitForJobs`<sup>Optional</sup> <a name="waitForJobs" id="@cdktf/provider-helm.release.ReleaseConfig.property.waitForJobs"></a>

```typescript
public readonly waitForJobs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If wait is enabled, will wait until all Jobs have been completed before marking the release as successful.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#wait_for_jobs Release#wait_for_jobs}

---

### ReleaseMetadata <a name="ReleaseMetadata" id="@cdktf/provider-helm.release.ReleaseMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.release.ReleaseMetadata.Initializer"></a>

```typescript
import { release } from '@cdktf/provider-helm'

const releaseMetadata: release.ReleaseMetadata = { ... }
```


### ReleasePostrender <a name="ReleasePostrender" id="@cdktf/provider-helm.release.ReleasePostrender"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.release.ReleasePostrender.Initializer"></a>

```typescript
import { release } from '@cdktf/provider-helm'

const releasePostrender: release.ReleasePostrender = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrender.property.binaryPath">binaryPath</a></code> | <code>string</code> | The command binary path. |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrender.property.args">args</a></code> | <code>string[]</code> | an argument to the post-renderer (can specify multiple). |

---

##### `binaryPath`<sup>Required</sup> <a name="binaryPath" id="@cdktf/provider-helm.release.ReleasePostrender.property.binaryPath"></a>

```typescript
public readonly binaryPath: string;
```

- *Type:* string

The command binary path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#binary_path Release#binary_path}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-helm.release.ReleasePostrender.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

an argument to the post-renderer (can specify multiple).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#args Release#args}

---

### ReleaseSet <a name="ReleaseSet" id="@cdktf/provider-helm.release.ReleaseSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.release.ReleaseSet.Initializer"></a>

```typescript
import { release } from '@cdktf/provider-helm'

const releaseSet: release.ReleaseSet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSet.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#name Release#name}. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSet.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#value Release#value}. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSet.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#type Release#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.ReleaseSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#name Release#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.ReleaseSet.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#value Release#value}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-helm.release.ReleaseSet.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#type Release#type}.

---

### ReleaseSetListStruct <a name="ReleaseSetListStruct" id="@cdktf/provider-helm.release.ReleaseSetListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.release.ReleaseSetListStruct.Initializer"></a>

```typescript
import { release } from '@cdktf/provider-helm'

const releaseSetListStruct: release.ReleaseSetListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStruct.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#name Release#name}. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStruct.property.value">value</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#value Release#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.ReleaseSetListStruct.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#name Release#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.ReleaseSetListStruct.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#value Release#value}.

---

### ReleaseSetSensitive <a name="ReleaseSetSensitive" id="@cdktf/provider-helm.release.ReleaseSetSensitive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.release.ReleaseSetSensitive.Initializer"></a>

```typescript
import { release } from '@cdktf/provider-helm'

const releaseSetSensitive: release.ReleaseSetSensitive = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitive.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#name Release#name}. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitive.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#value Release#value}. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitive.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#type Release#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.ReleaseSetSensitive.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#name Release#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.ReleaseSetSensitive.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#value Release#value}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-helm.release.ReleaseSetSensitive.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/resources/release#type Release#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ReleaseMetadataList <a name="ReleaseMetadataList" id="@cdktf/provider-helm.release.ReleaseMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseMetadataList.Initializer"></a>

```typescript
import { release } from '@cdktf/provider-helm'

new release.ReleaseMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.release.ReleaseMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-helm.release.ReleaseMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-helm.release.ReleaseMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.release.ReleaseMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.release.ReleaseMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-helm.release.ReleaseMetadataList.get"></a>

```typescript
public get(index: number): ReleaseMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-helm.release.ReleaseMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-helm.release.ReleaseMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.ReleaseMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ReleaseMetadataOutputReference <a name="ReleaseMetadataOutputReference" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer"></a>

```typescript
import { release } from '@cdktf/provider-helm'

new release.ReleaseMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.appVersion">appVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.chart">chart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.revision">revision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.values">values</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleaseMetadata">ReleaseMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appVersion`<sup>Required</sup> <a name="appVersion" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.appVersion"></a>

```typescript
public readonly appVersion: string;
```

- *Type:* string

---

##### `chart`<sup>Required</sup> <a name="chart" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.chart"></a>

```typescript
public readonly chart: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.values"></a>

```typescript
public readonly values: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ReleaseMetadata;
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleaseMetadata">ReleaseMetadata</a>

---


### ReleasePostrenderOutputReference <a name="ReleasePostrenderOutputReference" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.Initializer"></a>

```typescript
import { release } from '@cdktf/provider-helm'

new release.ReleasePostrenderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.resetArgs">resetArgs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.resetArgs"></a>

```typescript
public resetArgs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.argsInput">argsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.binaryPathInput">binaryPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.args">args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.binaryPath">binaryPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.argsInput"></a>

```typescript
public readonly argsInput: string[];
```

- *Type:* string[]

---

##### `binaryPathInput`<sup>Optional</sup> <a name="binaryPathInput" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.binaryPathInput"></a>

```typescript
public readonly binaryPathInput: string;
```

- *Type:* string

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.args"></a>

```typescript
public readonly args: string[];
```

- *Type:* string[]

---

##### `binaryPath`<sup>Required</sup> <a name="binaryPath" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.binaryPath"></a>

```typescript
public readonly binaryPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ReleasePostrender;
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a>

---


### ReleaseSetList <a name="ReleaseSetList" id="@cdktf/provider-helm.release.ReleaseSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseSetList.Initializer"></a>

```typescript
import { release } from '@cdktf/provider-helm'

new release.ReleaseSetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.release.ReleaseSetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-helm.release.ReleaseSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-helm.release.ReleaseSetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.release.ReleaseSetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseSetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.release.ReleaseSetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-helm.release.ReleaseSetList.get"></a>

```typescript
public get(index: number): ReleaseSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-helm.release.ReleaseSetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-helm.release.ReleaseSetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.ReleaseSetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-helm.release.ReleaseSetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ReleaseSet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a>[]

---


### ReleaseSetListStructList <a name="ReleaseSetListStructList" id="@cdktf/provider-helm.release.ReleaseSetListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseSetListStructList.Initializer"></a>

```typescript
import { release } from '@cdktf/provider-helm'

new release.ReleaseSetListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.release.ReleaseSetListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-helm.release.ReleaseSetListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-helm.release.ReleaseSetListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.release.ReleaseSetListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseSetListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.release.ReleaseSetListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-helm.release.ReleaseSetListStructList.get"></a>

```typescript
public get(index: number): ReleaseSetListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-helm.release.ReleaseSetListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-helm.release.ReleaseSetListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.ReleaseSetListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-helm.release.ReleaseSetListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ReleaseSetListStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>[]

---


### ReleaseSetListStructOutputReference <a name="ReleaseSetListStructOutputReference" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer"></a>

```typescript
import { release } from '@cdktf/provider-helm'

new release.ReleaseSetListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.valueInput">valueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.value">value</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ReleaseSetListStruct | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a> | cdktf.IResolvable

---


### ReleaseSetOutputReference <a name="ReleaseSetOutputReference" id="@cdktf/provider-helm.release.ReleaseSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer"></a>

```typescript
import { release } from '@cdktf/provider-helm'

new release.ReleaseSetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ReleaseSet | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a> | cdktf.IResolvable

---


### ReleaseSetSensitiveList <a name="ReleaseSetSensitiveList" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.Initializer"></a>

```typescript
import { release } from '@cdktf/provider-helm'

new release.ReleaseSetSensitiveList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.get"></a>

```typescript
public get(index: number): ReleaseSetSensitiveOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ReleaseSetSensitive[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>[]

---


### ReleaseSetSensitiveOutputReference <a name="ReleaseSetSensitiveOutputReference" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer"></a>

```typescript
import { release } from '@cdktf/provider-helm'

new release.ReleaseSetSensitiveOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ReleaseSetSensitive | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a> | cdktf.IResolvable

---



