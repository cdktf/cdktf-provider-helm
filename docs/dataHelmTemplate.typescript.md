# `data_helm_template`

Refer to the Terraform Registory for docs: [`data_helm_template`](https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template).

# `dataHelmTemplate` Submodule <a name="`dataHelmTemplate` Submodule" id="@cdktf/provider-helm.dataHelmTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHelmTemplate <a name="DataHelmTemplate" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template helm_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer"></a>

```typescript
import { dataHelmTemplate } from '@cdktf/provider-helm'

new dataHelmTemplate.DataHelmTemplate(scope: Construct, id: string, config: DataHelmTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig">DataHelmTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig">DataHelmTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putPostrender">putPostrender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSet">putSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetList">putSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetSensitive">putSetSensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetString">putSetString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetApiVersions">resetApiVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetAtomic">resetAtomic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetCrds">resetCrds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetCreateNamespace">resetCreateNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDependencyUpdate">resetDependencyUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDevel">resetDevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDisableOpenapiValidation">resetDisableOpenapiValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDisableWebhooks">resetDisableWebhooks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetIncludeCrds">resetIncludeCrds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetIsUpgrade">resetIsUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetKeyring">resetKeyring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetKubeVersion">resetKubeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetManifest">resetManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetManifests">resetManifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetNotes">resetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetPassCredentials">resetPassCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetPostrender">resetPostrender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRenderSubchartNotes">resetRenderSubchartNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetReplace">resetReplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepository">resetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryCaFile">resetRepositoryCaFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryCertFile">resetRepositoryCertFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryKeyFile">resetRepositoryKeyFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryPassword">resetRepositoryPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryUsername">resetRepositoryUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetResetValues">resetResetValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetReuseValues">resetReuseValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSet">resetSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSetList">resetSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSetSensitive">resetSetSensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSetString">resetSetString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetShowOnly">resetShowOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSkipCrds">resetSkipCrds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSkipTests">resetSkipTests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetTfValues">resetTfValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetValidate">resetValidate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetVerify">resetVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetVersion">resetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetWait">resetWait</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putPostrender` <a name="putPostrender" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putPostrender"></a>

```typescript
public putPostrender(value: DataHelmTemplatePostrender): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putPostrender.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a>

---

##### `putSet` <a name="putSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSet"></a>

```typescript
public putSet(value: IResolvable | DataHelmTemplateSet[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSet.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a>[]

---

##### `putSetList` <a name="putSetList" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetList"></a>

```typescript
public putSetList(value: IResolvable | DataHelmTemplateSetListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetList.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a>[]

---

##### `putSetSensitive` <a name="putSetSensitive" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetSensitive"></a>

```typescript
public putSetSensitive(value: IResolvable | DataHelmTemplateSetSensitive[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetSensitive.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a>[]

---

##### `putSetString` <a name="putSetString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetString"></a>

```typescript
public putSetString(value: IResolvable | DataHelmTemplateSetString[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetString.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString">DataHelmTemplateSetString</a>[]

---

##### `resetApiVersions` <a name="resetApiVersions" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetApiVersions"></a>

```typescript
public resetApiVersions(): void
```

##### `resetAtomic` <a name="resetAtomic" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetAtomic"></a>

```typescript
public resetAtomic(): void
```

##### `resetCrds` <a name="resetCrds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetCrds"></a>

```typescript
public resetCrds(): void
```

##### `resetCreateNamespace` <a name="resetCreateNamespace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetCreateNamespace"></a>

```typescript
public resetCreateNamespace(): void
```

##### `resetDependencyUpdate` <a name="resetDependencyUpdate" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDependencyUpdate"></a>

```typescript
public resetDependencyUpdate(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDevel` <a name="resetDevel" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDevel"></a>

```typescript
public resetDevel(): void
```

##### `resetDisableOpenapiValidation` <a name="resetDisableOpenapiValidation" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDisableOpenapiValidation"></a>

```typescript
public resetDisableOpenapiValidation(): void
```

##### `resetDisableWebhooks` <a name="resetDisableWebhooks" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDisableWebhooks"></a>

```typescript
public resetDisableWebhooks(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludeCrds` <a name="resetIncludeCrds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetIncludeCrds"></a>

```typescript
public resetIncludeCrds(): void
```

##### `resetIsUpgrade` <a name="resetIsUpgrade" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetIsUpgrade"></a>

```typescript
public resetIsUpgrade(): void
```

##### `resetKeyring` <a name="resetKeyring" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetKeyring"></a>

```typescript
public resetKeyring(): void
```

##### `resetKubeVersion` <a name="resetKubeVersion" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetKubeVersion"></a>

```typescript
public resetKubeVersion(): void
```

##### `resetManifest` <a name="resetManifest" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetManifest"></a>

```typescript
public resetManifest(): void
```

##### `resetManifests` <a name="resetManifests" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetManifests"></a>

```typescript
public resetManifests(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetNotes` <a name="resetNotes" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetNotes"></a>

```typescript
public resetNotes(): void
```

##### `resetPassCredentials` <a name="resetPassCredentials" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetPassCredentials"></a>

```typescript
public resetPassCredentials(): void
```

##### `resetPostrender` <a name="resetPostrender" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetPostrender"></a>

```typescript
public resetPostrender(): void
```

##### `resetRenderSubchartNotes` <a name="resetRenderSubchartNotes" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRenderSubchartNotes"></a>

```typescript
public resetRenderSubchartNotes(): void
```

##### `resetReplace` <a name="resetReplace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetReplace"></a>

```typescript
public resetReplace(): void
```

##### `resetRepository` <a name="resetRepository" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepository"></a>

```typescript
public resetRepository(): void
```

##### `resetRepositoryCaFile` <a name="resetRepositoryCaFile" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryCaFile"></a>

```typescript
public resetRepositoryCaFile(): void
```

##### `resetRepositoryCertFile` <a name="resetRepositoryCertFile" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryCertFile"></a>

```typescript
public resetRepositoryCertFile(): void
```

##### `resetRepositoryKeyFile` <a name="resetRepositoryKeyFile" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryKeyFile"></a>

```typescript
public resetRepositoryKeyFile(): void
```

##### `resetRepositoryPassword` <a name="resetRepositoryPassword" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryPassword"></a>

```typescript
public resetRepositoryPassword(): void
```

##### `resetRepositoryUsername` <a name="resetRepositoryUsername" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryUsername"></a>

```typescript
public resetRepositoryUsername(): void
```

##### `resetResetValues` <a name="resetResetValues" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetResetValues"></a>

```typescript
public resetResetValues(): void
```

##### `resetReuseValues` <a name="resetReuseValues" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetReuseValues"></a>

```typescript
public resetReuseValues(): void
```

##### `resetSet` <a name="resetSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSet"></a>

```typescript
public resetSet(): void
```

##### `resetSetList` <a name="resetSetList" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSetList"></a>

```typescript
public resetSetList(): void
```

##### `resetSetSensitive` <a name="resetSetSensitive" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSetSensitive"></a>

```typescript
public resetSetSensitive(): void
```

##### `resetSetString` <a name="resetSetString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSetString"></a>

```typescript
public resetSetString(): void
```

##### `resetShowOnly` <a name="resetShowOnly" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetShowOnly"></a>

```typescript
public resetShowOnly(): void
```

##### `resetSkipCrds` <a name="resetSkipCrds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSkipCrds"></a>

```typescript
public resetSkipCrds(): void
```

##### `resetSkipTests` <a name="resetSkipTests" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSkipTests"></a>

```typescript
public resetSkipTests(): void
```

##### `resetTfValues` <a name="resetTfValues" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetTfValues"></a>

```typescript
public resetTfValues(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetValidate` <a name="resetValidate" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetValidate"></a>

```typescript
public resetValidate(): void
```

##### `resetVerify` <a name="resetVerify" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetVerify"></a>

```typescript
public resetVerify(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetVersion"></a>

```typescript
public resetVersion(): void
```

##### `resetWait` <a name="resetWait" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetWait"></a>

```typescript
public resetWait(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isConstruct"></a>

```typescript
import { dataHelmTemplate } from '@cdktf/provider-helm'

dataHelmTemplate.DataHelmTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isTerraformElement"></a>

```typescript
import { dataHelmTemplate } from '@cdktf/provider-helm'

dataHelmTemplate.DataHelmTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isTerraformDataSource"></a>

```typescript
import { dataHelmTemplate } from '@cdktf/provider-helm'

dataHelmTemplate.DataHelmTemplate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.postrender">postrender</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference">DataHelmTemplatePostrenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.set">set</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList">DataHelmTemplateSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setList">setList</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList">DataHelmTemplateSetListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setSensitive">setSensitive</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList">DataHelmTemplateSetSensitiveList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setString">setString</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList">DataHelmTemplateSetStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.apiVersionsInput">apiVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.atomicInput">atomicInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.chartInput">chartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.crdsInput">crdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.createNamespaceInput">createNamespaceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.dependencyUpdateInput">dependencyUpdateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.develInput">develInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableOpenapiValidationInput">disableOpenapiValidationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableWebhooksInput">disableWebhooksInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.includeCrdsInput">includeCrdsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.isUpgradeInput">isUpgradeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.keyringInput">keyringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.kubeVersionInput">kubeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifestInput">manifestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifestsInput">manifestsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.notesInput">notesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.passCredentialsInput">passCredentialsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.postrenderInput">postrenderInput</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.renderSubchartNotesInput">renderSubchartNotesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.replaceInput">replaceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCaFileInput">repositoryCaFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCertFileInput">repositoryCertFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryKeyFileInput">repositoryKeyFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryPasswordInput">repositoryPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryUsernameInput">repositoryUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.resetValuesInput">resetValuesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.reuseValuesInput">reuseValuesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setInput">setInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setListInput">setListInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setSensitiveInput">setSensitiveInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setStringInput">setStringInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString">DataHelmTemplateSetString</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.showOnlyInput">showOnlyInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipCrdsInput">skipCrdsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipTestsInput">skipTestsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.validateInput">validateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.verifyInput">verifyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.waitInput">waitInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.apiVersions">apiVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.atomic">atomic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.chart">chart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.crds">crds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.createNamespace">createNamespace</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.dependencyUpdate">dependencyUpdate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.devel">devel</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableOpenapiValidation">disableOpenapiValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableWebhooks">disableWebhooks</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.includeCrds">includeCrds</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.isUpgrade">isUpgrade</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.keyring">keyring</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.kubeVersion">kubeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifest">manifest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifests">manifests</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.notes">notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.passCredentials">passCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.renderSubchartNotes">renderSubchartNotes</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.replace">replace</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repository">repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCaFile">repositoryCaFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCertFile">repositoryCertFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryKeyFile">repositoryKeyFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryPassword">repositoryPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryUsername">repositoryUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.resetValues">resetValues</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.reuseValues">reuseValues</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.showOnly">showOnly</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipCrds">skipCrds</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipTests">skipTests</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.validate">validate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.verify">verify</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.wait">wait</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `postrender`<sup>Required</sup> <a name="postrender" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.postrender"></a>

```typescript
public readonly postrender: DataHelmTemplatePostrenderOutputReference;
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference">DataHelmTemplatePostrenderOutputReference</a>

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.set"></a>

```typescript
public readonly set: DataHelmTemplateSetList;
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList">DataHelmTemplateSetList</a>

---

##### `setList`<sup>Required</sup> <a name="setList" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setList"></a>

```typescript
public readonly setList: DataHelmTemplateSetListStructList;
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList">DataHelmTemplateSetListStructList</a>

---

##### `setSensitive`<sup>Required</sup> <a name="setSensitive" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setSensitive"></a>

```typescript
public readonly setSensitive: DataHelmTemplateSetSensitiveList;
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList">DataHelmTemplateSetSensitiveList</a>

---

##### `setString`<sup>Required</sup> <a name="setString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setString"></a>

```typescript
public readonly setString: DataHelmTemplateSetStringList;
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList">DataHelmTemplateSetStringList</a>

---

##### `apiVersionsInput`<sup>Optional</sup> <a name="apiVersionsInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.apiVersionsInput"></a>

```typescript
public readonly apiVersionsInput: string[];
```

- *Type:* string[]

---

##### `atomicInput`<sup>Optional</sup> <a name="atomicInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.atomicInput"></a>

```typescript
public readonly atomicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `chartInput`<sup>Optional</sup> <a name="chartInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.chartInput"></a>

```typescript
public readonly chartInput: string;
```

- *Type:* string

---

##### `crdsInput`<sup>Optional</sup> <a name="crdsInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.crdsInput"></a>

```typescript
public readonly crdsInput: string[];
```

- *Type:* string[]

---

##### `createNamespaceInput`<sup>Optional</sup> <a name="createNamespaceInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.createNamespaceInput"></a>

```typescript
public readonly createNamespaceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dependencyUpdateInput`<sup>Optional</sup> <a name="dependencyUpdateInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.dependencyUpdateInput"></a>

```typescript
public readonly dependencyUpdateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `develInput`<sup>Optional</sup> <a name="develInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.develInput"></a>

```typescript
public readonly develInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableOpenapiValidationInput`<sup>Optional</sup> <a name="disableOpenapiValidationInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableOpenapiValidationInput"></a>

```typescript
public readonly disableOpenapiValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableWebhooksInput`<sup>Optional</sup> <a name="disableWebhooksInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableWebhooksInput"></a>

```typescript
public readonly disableWebhooksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includeCrdsInput`<sup>Optional</sup> <a name="includeCrdsInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.includeCrdsInput"></a>

```typescript
public readonly includeCrdsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isUpgradeInput`<sup>Optional</sup> <a name="isUpgradeInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.isUpgradeInput"></a>

```typescript
public readonly isUpgradeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyringInput`<sup>Optional</sup> <a name="keyringInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.keyringInput"></a>

```typescript
public readonly keyringInput: string;
```

- *Type:* string

---

##### `kubeVersionInput`<sup>Optional</sup> <a name="kubeVersionInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.kubeVersionInput"></a>

```typescript
public readonly kubeVersionInput: string;
```

- *Type:* string

---

##### `manifestInput`<sup>Optional</sup> <a name="manifestInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifestInput"></a>

```typescript
public readonly manifestInput: string;
```

- *Type:* string

---

##### `manifestsInput`<sup>Optional</sup> <a name="manifestsInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifestsInput"></a>

```typescript
public readonly manifestsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `notesInput`<sup>Optional</sup> <a name="notesInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.notesInput"></a>

```typescript
public readonly notesInput: string;
```

- *Type:* string

---

##### `passCredentialsInput`<sup>Optional</sup> <a name="passCredentialsInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.passCredentialsInput"></a>

```typescript
public readonly passCredentialsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `postrenderInput`<sup>Optional</sup> <a name="postrenderInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.postrenderInput"></a>

```typescript
public readonly postrenderInput: DataHelmTemplatePostrender;
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a>

---

##### `renderSubchartNotesInput`<sup>Optional</sup> <a name="renderSubchartNotesInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.renderSubchartNotesInput"></a>

```typescript
public readonly renderSubchartNotesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `replaceInput`<sup>Optional</sup> <a name="replaceInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.replaceInput"></a>

```typescript
public readonly replaceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repositoryCaFileInput`<sup>Optional</sup> <a name="repositoryCaFileInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCaFileInput"></a>

```typescript
public readonly repositoryCaFileInput: string;
```

- *Type:* string

---

##### `repositoryCertFileInput`<sup>Optional</sup> <a name="repositoryCertFileInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCertFileInput"></a>

```typescript
public readonly repositoryCertFileInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `repositoryKeyFileInput`<sup>Optional</sup> <a name="repositoryKeyFileInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryKeyFileInput"></a>

```typescript
public readonly repositoryKeyFileInput: string;
```

- *Type:* string

---

##### `repositoryPasswordInput`<sup>Optional</sup> <a name="repositoryPasswordInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryPasswordInput"></a>

```typescript
public readonly repositoryPasswordInput: string;
```

- *Type:* string

---

##### `repositoryUsernameInput`<sup>Optional</sup> <a name="repositoryUsernameInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryUsernameInput"></a>

```typescript
public readonly repositoryUsernameInput: string;
```

- *Type:* string

---

##### `resetValuesInput`<sup>Optional</sup> <a name="resetValuesInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.resetValuesInput"></a>

```typescript
public readonly resetValuesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reuseValuesInput`<sup>Optional</sup> <a name="reuseValuesInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.reuseValuesInput"></a>

```typescript
public readonly reuseValuesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `setInput`<sup>Optional</sup> <a name="setInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setInput"></a>

```typescript
public readonly setInput: IResolvable | DataHelmTemplateSet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a>[]

---

##### `setListInput`<sup>Optional</sup> <a name="setListInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setListInput"></a>

```typescript
public readonly setListInput: IResolvable | DataHelmTemplateSetListStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a>[]

---

##### `setSensitiveInput`<sup>Optional</sup> <a name="setSensitiveInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setSensitiveInput"></a>

```typescript
public readonly setSensitiveInput: IResolvable | DataHelmTemplateSetSensitive[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a>[]

---

##### `setStringInput`<sup>Optional</sup> <a name="setStringInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setStringInput"></a>

```typescript
public readonly setStringInput: IResolvable | DataHelmTemplateSetString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString">DataHelmTemplateSetString</a>[]

---

##### `showOnlyInput`<sup>Optional</sup> <a name="showOnlyInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.showOnlyInput"></a>

```typescript
public readonly showOnlyInput: string[];
```

- *Type:* string[]

---

##### `skipCrdsInput`<sup>Optional</sup> <a name="skipCrdsInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipCrdsInput"></a>

```typescript
public readonly skipCrdsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipTestsInput`<sup>Optional</sup> <a name="skipTestsInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipTestsInput"></a>

```typescript
public readonly skipTestsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `validateInput`<sup>Optional</sup> <a name="validateInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.validateInput"></a>

```typescript
public readonly validateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `verifyInput`<sup>Optional</sup> <a name="verifyInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.verifyInput"></a>

```typescript
public readonly verifyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `waitInput`<sup>Optional</sup> <a name="waitInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.waitInput"></a>

```typescript
public readonly waitInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `apiVersions`<sup>Required</sup> <a name="apiVersions" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.apiVersions"></a>

```typescript
public readonly apiVersions: string[];
```

- *Type:* string[]

---

##### `atomic`<sup>Required</sup> <a name="atomic" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.atomic"></a>

```typescript
public readonly atomic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `chart`<sup>Required</sup> <a name="chart" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.chart"></a>

```typescript
public readonly chart: string;
```

- *Type:* string

---

##### `crds`<sup>Required</sup> <a name="crds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.crds"></a>

```typescript
public readonly crds: string[];
```

- *Type:* string[]

---

##### `createNamespace`<sup>Required</sup> <a name="createNamespace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.createNamespace"></a>

```typescript
public readonly createNamespace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dependencyUpdate`<sup>Required</sup> <a name="dependencyUpdate" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.dependencyUpdate"></a>

```typescript
public readonly dependencyUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `devel`<sup>Required</sup> <a name="devel" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.devel"></a>

```typescript
public readonly devel: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableOpenapiValidation`<sup>Required</sup> <a name="disableOpenapiValidation" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableOpenapiValidation"></a>

```typescript
public readonly disableOpenapiValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableWebhooks`<sup>Required</sup> <a name="disableWebhooks" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableWebhooks"></a>

```typescript
public readonly disableWebhooks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includeCrds`<sup>Required</sup> <a name="includeCrds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.includeCrds"></a>

```typescript
public readonly includeCrds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isUpgrade`<sup>Required</sup> <a name="isUpgrade" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.isUpgrade"></a>

```typescript
public readonly isUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `keyring`<sup>Required</sup> <a name="keyring" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.keyring"></a>

```typescript
public readonly keyring: string;
```

- *Type:* string

---

##### `kubeVersion`<sup>Required</sup> <a name="kubeVersion" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.kubeVersion"></a>

```typescript
public readonly kubeVersion: string;
```

- *Type:* string

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifest"></a>

```typescript
public readonly manifest: string;
```

- *Type:* string

---

##### `manifests`<sup>Required</sup> <a name="manifests" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifests"></a>

```typescript
public readonly manifests: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

---

##### `passCredentials`<sup>Required</sup> <a name="passCredentials" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.passCredentials"></a>

```typescript
public readonly passCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `renderSubchartNotes`<sup>Required</sup> <a name="renderSubchartNotes" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.renderSubchartNotes"></a>

```typescript
public readonly renderSubchartNotes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `replace`<sup>Required</sup> <a name="replace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.replace"></a>

```typescript
public readonly replace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

##### `repositoryCaFile`<sup>Required</sup> <a name="repositoryCaFile" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCaFile"></a>

```typescript
public readonly repositoryCaFile: string;
```

- *Type:* string

---

##### `repositoryCertFile`<sup>Required</sup> <a name="repositoryCertFile" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCertFile"></a>

```typescript
public readonly repositoryCertFile: string;
```

- *Type:* string

---

##### `repositoryKeyFile`<sup>Required</sup> <a name="repositoryKeyFile" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryKeyFile"></a>

```typescript
public readonly repositoryKeyFile: string;
```

- *Type:* string

---

##### `repositoryPassword`<sup>Required</sup> <a name="repositoryPassword" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryPassword"></a>

```typescript
public readonly repositoryPassword: string;
```

- *Type:* string

---

##### `repositoryUsername`<sup>Required</sup> <a name="repositoryUsername" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryUsername"></a>

```typescript
public readonly repositoryUsername: string;
```

- *Type:* string

---

##### `resetValues`<sup>Required</sup> <a name="resetValues" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.resetValues"></a>

```typescript
public readonly resetValues: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `reuseValues`<sup>Required</sup> <a name="reuseValues" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.reuseValues"></a>

```typescript
public readonly reuseValues: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `showOnly`<sup>Required</sup> <a name="showOnly" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.showOnly"></a>

```typescript
public readonly showOnly: string[];
```

- *Type:* string[]

---

##### `skipCrds`<sup>Required</sup> <a name="skipCrds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipCrds"></a>

```typescript
public readonly skipCrds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipTests`<sup>Required</sup> <a name="skipTests" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipTests"></a>

```typescript
public readonly skipTests: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `validate`<sup>Required</sup> <a name="validate" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.validate"></a>

```typescript
public readonly validate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `verify`<sup>Required</sup> <a name="verify" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.verify"></a>

```typescript
public readonly verify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `wait`<sup>Required</sup> <a name="wait" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.wait"></a>

```typescript
public readonly wait: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHelmTemplateConfig <a name="DataHelmTemplateConfig" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.Initializer"></a>

```typescript
import { dataHelmTemplate } from '@cdktf/provider-helm'

const dataHelmTemplateConfig: dataHelmTemplate.DataHelmTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.chart">chart</a></code> | <code>string</code> | Chart name to be installed. A path may be used. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.name">name</a></code> | <code>string</code> | Release name. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.apiVersions">apiVersions</a></code> | <code>string[]</code> | Kubernetes api versions used for Capabilities.APIVersions. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.atomic">atomic</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.crds">crds</a></code> | <code>string[]</code> | List of rendered CRDs from the chart. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.createNamespace">createNamespace</a></code> | <code>boolean \| cdktf.IResolvable</code> | Create the namespace if it does not exist. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.dependencyUpdate">dependencyUpdate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Run helm dependency update before installing the chart. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.description">description</a></code> | <code>string</code> | Add a custom description. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.devel">devel</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.disableOpenapiValidation">disableOpenapiValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.disableWebhooks">disableWebhooks</a></code> | <code>boolean \| cdktf.IResolvable</code> | Prevent hooks from running. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#id DataHelmTemplate#id}. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.includeCrds">includeCrds</a></code> | <code>boolean \| cdktf.IResolvable</code> | Include CRDs in the templated output. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.isUpgrade">isUpgrade</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set .Release.IsUpgrade instead of .Release.IsInstall. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.keyring">keyring</a></code> | <code>string</code> | Location of public keys used for verification. Used only if `verify` is true. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.kubeVersion">kubeVersion</a></code> | <code>string</code> | Kubernetes version used for Capabilities.KubeVersion. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.manifest">manifest</a></code> | <code>string</code> | Concatenated rendered chart templates. This corresponds to the output of the `helm template` command. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.manifests">manifests</a></code> | <code>{[ key: string ]: string}</code> | Map of rendered chart templates indexed by the template name. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.namespace">namespace</a></code> | <code>string</code> | Namespace to install the release into. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.notes">notes</a></code> | <code>string</code> | Rendered notes if the chart contains a `NOTES.txt`. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.passCredentials">passCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | Pass credentials to all domains. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.postrender">postrender</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a></code> | postrender block. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.renderSubchartNotes">renderSubchartNotes</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, render subchart notes along with the parent. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.replace">replace</a></code> | <code>boolean \| cdktf.IResolvable</code> | Re-use the given name, even if that name is already used. This is unsafe in production. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repository">repository</a></code> | <code>string</code> | Repository where to locate the requested chart. If is a URL the chart is installed without installing the repository. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryCaFile">repositoryCaFile</a></code> | <code>string</code> | The Repositories CA File. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryCertFile">repositoryCertFile</a></code> | <code>string</code> | The repositories cert file. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryKeyFile">repositoryKeyFile</a></code> | <code>string</code> | The repositories cert key file. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryPassword">repositoryPassword</a></code> | <code>string</code> | Password for HTTP basic authentication. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryUsername">repositoryUsername</a></code> | <code>string</code> | Username for HTTP basic authentication. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.resetValues">resetValues</a></code> | <code>boolean \| cdktf.IResolvable</code> | When upgrading, reset the values to the ones built into the chart. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.reuseValues">reuseValues</a></code> | <code>boolean \| cdktf.IResolvable</code> | When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.set">set</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a>[]</code> | set block. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.setList">setList</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a>[]</code> | set_list block. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.setSensitive">setSensitive</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a>[]</code> | set_sensitive block. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.setString">setString</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString">DataHelmTemplateSetString</a>[]</code> | set_string block. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.showOnly">showOnly</a></code> | <code>string[]</code> | Only show manifests rendered from the given templates. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.skipCrds">skipCrds</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, no CRDs will be installed. By default, CRDs are installed if not already present. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.skipTests">skipTests</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, tests will not be rendered. By default, tests are rendered. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.timeout">timeout</a></code> | <code>number</code> | Time in seconds to wait for any individual kubernetes operation. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.validate">validate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Validate your manifests against the Kubernetes cluster you are currently pointing at. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.values">values</a></code> | <code>string[]</code> | List of values in raw yaml format to pass to helm. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.verify">verify</a></code> | <code>boolean \| cdktf.IResolvable</code> | Verify the package before installing it. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.version">version</a></code> | <code>string</code> | Specify the exact chart version to install. If this is not specified, the latest version is installed. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.wait">wait</a></code> | <code>boolean \| cdktf.IResolvable</code> | Will wait until all resources are in a ready state before marking the release as successful. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `chart`<sup>Required</sup> <a name="chart" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.chart"></a>

```typescript
public readonly chart: string;
```

- *Type:* string

Chart name to be installed. A path may be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#chart DataHelmTemplate#chart}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Release name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#name DataHelmTemplate#name}

---

##### `apiVersions`<sup>Optional</sup> <a name="apiVersions" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.apiVersions"></a>

```typescript
public readonly apiVersions: string[];
```

- *Type:* string[]

Kubernetes api versions used for Capabilities.APIVersions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#api_versions DataHelmTemplate#api_versions}

---

##### `atomic`<sup>Optional</sup> <a name="atomic" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.atomic"></a>

```typescript
public readonly atomic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#atomic DataHelmTemplate#atomic}

---

##### `crds`<sup>Optional</sup> <a name="crds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.crds"></a>

```typescript
public readonly crds: string[];
```

- *Type:* string[]

List of rendered CRDs from the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#crds DataHelmTemplate#crds}

---

##### `createNamespace`<sup>Optional</sup> <a name="createNamespace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.createNamespace"></a>

```typescript
public readonly createNamespace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Create the namespace if it does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#create_namespace DataHelmTemplate#create_namespace}

---

##### `dependencyUpdate`<sup>Optional</sup> <a name="dependencyUpdate" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.dependencyUpdate"></a>

```typescript
public readonly dependencyUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Run helm dependency update before installing the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#dependency_update DataHelmTemplate#dependency_update}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Add a custom description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#description DataHelmTemplate#description}

---

##### `devel`<sup>Optional</sup> <a name="devel" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.devel"></a>

```typescript
public readonly devel: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#devel DataHelmTemplate#devel}

---

##### `disableOpenapiValidation`<sup>Optional</sup> <a name="disableOpenapiValidation" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.disableOpenapiValidation"></a>

```typescript
public readonly disableOpenapiValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#disable_openapi_validation DataHelmTemplate#disable_openapi_validation}

---

##### `disableWebhooks`<sup>Optional</sup> <a name="disableWebhooks" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.disableWebhooks"></a>

```typescript
public readonly disableWebhooks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Prevent hooks from running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#disable_webhooks DataHelmTemplate#disable_webhooks}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#id DataHelmTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeCrds`<sup>Optional</sup> <a name="includeCrds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.includeCrds"></a>

```typescript
public readonly includeCrds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Include CRDs in the templated output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#include_crds DataHelmTemplate#include_crds}

---

##### `isUpgrade`<sup>Optional</sup> <a name="isUpgrade" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.isUpgrade"></a>

```typescript
public readonly isUpgrade: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set .Release.IsUpgrade instead of .Release.IsInstall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#is_upgrade DataHelmTemplate#is_upgrade}

---

##### `keyring`<sup>Optional</sup> <a name="keyring" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.keyring"></a>

```typescript
public readonly keyring: string;
```

- *Type:* string

Location of public keys used for verification. Used only if `verify` is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#keyring DataHelmTemplate#keyring}

---

##### `kubeVersion`<sup>Optional</sup> <a name="kubeVersion" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.kubeVersion"></a>

```typescript
public readonly kubeVersion: string;
```

- *Type:* string

Kubernetes version used for Capabilities.KubeVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#kube_version DataHelmTemplate#kube_version}

---

##### `manifest`<sup>Optional</sup> <a name="manifest" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.manifest"></a>

```typescript
public readonly manifest: string;
```

- *Type:* string

Concatenated rendered chart templates. This corresponds to the output of the `helm template` command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#manifest DataHelmTemplate#manifest}

---

##### `manifests`<sup>Optional</sup> <a name="manifests" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.manifests"></a>

```typescript
public readonly manifests: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of rendered chart templates indexed by the template name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#manifests DataHelmTemplate#manifests}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace to install the release into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#namespace DataHelmTemplate#namespace}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.notes"></a>

```typescript
public readonly notes: string;
```

- *Type:* string

Rendered notes if the chart contains a `NOTES.txt`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#notes DataHelmTemplate#notes}

---

##### `passCredentials`<sup>Optional</sup> <a name="passCredentials" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.passCredentials"></a>

```typescript
public readonly passCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Pass credentials to all domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#pass_credentials DataHelmTemplate#pass_credentials}

---

##### `postrender`<sup>Optional</sup> <a name="postrender" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.postrender"></a>

```typescript
public readonly postrender: DataHelmTemplatePostrender;
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a>

postrender block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#postrender DataHelmTemplate#postrender}

---

##### `renderSubchartNotes`<sup>Optional</sup> <a name="renderSubchartNotes" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.renderSubchartNotes"></a>

```typescript
public readonly renderSubchartNotes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, render subchart notes along with the parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#render_subchart_notes DataHelmTemplate#render_subchart_notes}

---

##### `replace`<sup>Optional</sup> <a name="replace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.replace"></a>

```typescript
public readonly replace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Re-use the given name, even if that name is already used. This is unsafe in production.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#replace DataHelmTemplate#replace}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

Repository where to locate the requested chart. If is a URL the chart is installed without installing the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#repository DataHelmTemplate#repository}

---

##### `repositoryCaFile`<sup>Optional</sup> <a name="repositoryCaFile" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryCaFile"></a>

```typescript
public readonly repositoryCaFile: string;
```

- *Type:* string

The Repositories CA File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#repository_ca_file DataHelmTemplate#repository_ca_file}

---

##### `repositoryCertFile`<sup>Optional</sup> <a name="repositoryCertFile" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryCertFile"></a>

```typescript
public readonly repositoryCertFile: string;
```

- *Type:* string

The repositories cert file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#repository_cert_file DataHelmTemplate#repository_cert_file}

---

##### `repositoryKeyFile`<sup>Optional</sup> <a name="repositoryKeyFile" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryKeyFile"></a>

```typescript
public readonly repositoryKeyFile: string;
```

- *Type:* string

The repositories cert key file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#repository_key_file DataHelmTemplate#repository_key_file}

---

##### `repositoryPassword`<sup>Optional</sup> <a name="repositoryPassword" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryPassword"></a>

```typescript
public readonly repositoryPassword: string;
```

- *Type:* string

Password for HTTP basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#repository_password DataHelmTemplate#repository_password}

---

##### `repositoryUsername`<sup>Optional</sup> <a name="repositoryUsername" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryUsername"></a>

```typescript
public readonly repositoryUsername: string;
```

- *Type:* string

Username for HTTP basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#repository_username DataHelmTemplate#repository_username}

---

##### `resetValues`<sup>Optional</sup> <a name="resetValues" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.resetValues"></a>

```typescript
public readonly resetValues: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When upgrading, reset the values to the ones built into the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#reset_values DataHelmTemplate#reset_values}

---

##### `reuseValues`<sup>Optional</sup> <a name="reuseValues" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.reuseValues"></a>

```typescript
public readonly reuseValues: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#reuse_values DataHelmTemplate#reuse_values}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.set"></a>

```typescript
public readonly set: IResolvable | DataHelmTemplateSet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a>[]

set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#set DataHelmTemplate#set}

---

##### `setList`<sup>Optional</sup> <a name="setList" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.setList"></a>

```typescript
public readonly setList: IResolvable | DataHelmTemplateSetListStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a>[]

set_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#set_list DataHelmTemplate#set_list}

---

##### `setSensitive`<sup>Optional</sup> <a name="setSensitive" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.setSensitive"></a>

```typescript
public readonly setSensitive: IResolvable | DataHelmTemplateSetSensitive[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a>[]

set_sensitive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#set_sensitive DataHelmTemplate#set_sensitive}

---

##### `setString`<sup>Optional</sup> <a name="setString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.setString"></a>

```typescript
public readonly setString: IResolvable | DataHelmTemplateSetString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString">DataHelmTemplateSetString</a>[]

set_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#set_string DataHelmTemplate#set_string}

---

##### `showOnly`<sup>Optional</sup> <a name="showOnly" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.showOnly"></a>

```typescript
public readonly showOnly: string[];
```

- *Type:* string[]

Only show manifests rendered from the given templates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#show_only DataHelmTemplate#show_only}

---

##### `skipCrds`<sup>Optional</sup> <a name="skipCrds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.skipCrds"></a>

```typescript
public readonly skipCrds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, no CRDs will be installed. By default, CRDs are installed if not already present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#skip_crds DataHelmTemplate#skip_crds}

---

##### `skipTests`<sup>Optional</sup> <a name="skipTests" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.skipTests"></a>

```typescript
public readonly skipTests: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, tests will not be rendered. By default, tests are rendered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#skip_tests DataHelmTemplate#skip_tests}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Time in seconds to wait for any individual kubernetes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#timeout DataHelmTemplate#timeout}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.validate"></a>

```typescript
public readonly validate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Validate your manifests against the Kubernetes cluster you are currently pointing at.

This is the same validation performed on an install

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#validate DataHelmTemplate#validate}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

List of values in raw yaml format to pass to helm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#values DataHelmTemplate#values}

---

##### `verify`<sup>Optional</sup> <a name="verify" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.verify"></a>

```typescript
public readonly verify: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Verify the package before installing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#verify DataHelmTemplate#verify}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Specify the exact chart version to install. If this is not specified, the latest version is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#version DataHelmTemplate#version}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.wait"></a>

```typescript
public readonly wait: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Will wait until all resources are in a ready state before marking the release as successful.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#wait DataHelmTemplate#wait}

---

### DataHelmTemplatePostrender <a name="DataHelmTemplatePostrender" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender.Initializer"></a>

```typescript
import { dataHelmTemplate } from '@cdktf/provider-helm'

const dataHelmTemplatePostrender: dataHelmTemplate.DataHelmTemplatePostrender = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender.property.binaryPath">binaryPath</a></code> | <code>string</code> | The command binary path. |

---

##### `binaryPath`<sup>Required</sup> <a name="binaryPath" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender.property.binaryPath"></a>

```typescript
public readonly binaryPath: string;
```

- *Type:* string

The command binary path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#binary_path DataHelmTemplate#binary_path}

---

### DataHelmTemplateSet <a name="DataHelmTemplateSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet.Initializer"></a>

```typescript
import { dataHelmTemplate } from '@cdktf/provider-helm'

const dataHelmTemplateSet: dataHelmTemplate.DataHelmTemplateSet = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#name DataHelmTemplate#name}. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#value DataHelmTemplate#value}. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#type DataHelmTemplate#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#name DataHelmTemplate#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#value DataHelmTemplate#value}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#type DataHelmTemplate#type}.

---

### DataHelmTemplateSetListStruct <a name="DataHelmTemplateSetListStruct" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct.Initializer"></a>

```typescript
import { dataHelmTemplate } from '@cdktf/provider-helm'

const dataHelmTemplateSetListStruct: dataHelmTemplate.DataHelmTemplateSetListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#name DataHelmTemplate#name}. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct.property.value">value</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#value DataHelmTemplate#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#name DataHelmTemplate#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#value DataHelmTemplate#value}.

---

### DataHelmTemplateSetSensitive <a name="DataHelmTemplateSetSensitive" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.Initializer"></a>

```typescript
import { dataHelmTemplate } from '@cdktf/provider-helm'

const dataHelmTemplateSetSensitive: dataHelmTemplate.DataHelmTemplateSetSensitive = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#name DataHelmTemplate#name}. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#value DataHelmTemplate#value}. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#type DataHelmTemplate#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#name DataHelmTemplate#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#value DataHelmTemplate#value}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#type DataHelmTemplate#type}.

---

### DataHelmTemplateSetString <a name="DataHelmTemplateSetString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString.Initializer"></a>

```typescript
import { dataHelmTemplate } from '@cdktf/provider-helm'

const dataHelmTemplateSetString: dataHelmTemplate.DataHelmTemplateSetString = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#name DataHelmTemplate#name}. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#value DataHelmTemplate#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#name DataHelmTemplate#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#value DataHelmTemplate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHelmTemplatePostrenderOutputReference <a name="DataHelmTemplatePostrenderOutputReference" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.Initializer"></a>

```typescript
import { dataHelmTemplate } from '@cdktf/provider-helm'

new dataHelmTemplate.DataHelmTemplatePostrenderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.binaryPathInput">binaryPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.binaryPath">binaryPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `binaryPathInput`<sup>Optional</sup> <a name="binaryPathInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.binaryPathInput"></a>

```typescript
public readonly binaryPathInput: string;
```

- *Type:* string

---

##### `binaryPath`<sup>Required</sup> <a name="binaryPath" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.binaryPath"></a>

```typescript
public readonly binaryPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataHelmTemplatePostrender;
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a>

---


### DataHelmTemplateSetList <a name="DataHelmTemplateSetList" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer"></a>

```typescript
import { dataHelmTemplate } from '@cdktf/provider-helm'

new dataHelmTemplate.DataHelmTemplateSetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.get"></a>

```typescript
public get(index: number): DataHelmTemplateSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataHelmTemplateSet[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a>[]

---


### DataHelmTemplateSetListStructList <a name="DataHelmTemplateSetListStructList" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer"></a>

```typescript
import { dataHelmTemplate } from '@cdktf/provider-helm'

new dataHelmTemplate.DataHelmTemplateSetListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.get"></a>

```typescript
public get(index: number): DataHelmTemplateSetListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataHelmTemplateSetListStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a>[]

---


### DataHelmTemplateSetListStructOutputReference <a name="DataHelmTemplateSetListStructOutputReference" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer"></a>

```typescript
import { dataHelmTemplate } from '@cdktf/provider-helm'

new dataHelmTemplate.DataHelmTemplateSetListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.valueInput">valueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.value">value</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.value"></a>

```typescript
public readonly value: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataHelmTemplateSetListStruct;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a>

---


### DataHelmTemplateSetOutputReference <a name="DataHelmTemplateSetOutputReference" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer"></a>

```typescript
import { dataHelmTemplate } from '@cdktf/provider-helm'

new dataHelmTemplate.DataHelmTemplateSetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataHelmTemplateSet;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a>

---


### DataHelmTemplateSetSensitiveList <a name="DataHelmTemplateSetSensitiveList" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer"></a>

```typescript
import { dataHelmTemplate } from '@cdktf/provider-helm'

new dataHelmTemplate.DataHelmTemplateSetSensitiveList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.get"></a>

```typescript
public get(index: number): DataHelmTemplateSetSensitiveOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataHelmTemplateSetSensitive[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a>[]

---


### DataHelmTemplateSetSensitiveOutputReference <a name="DataHelmTemplateSetSensitiveOutputReference" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer"></a>

```typescript
import { dataHelmTemplate } from '@cdktf/provider-helm'

new dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataHelmTemplateSetSensitive;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a>

---


### DataHelmTemplateSetStringList <a name="DataHelmTemplateSetStringList" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.Initializer"></a>

```typescript
import { dataHelmTemplate } from '@cdktf/provider-helm'

new dataHelmTemplate.DataHelmTemplateSetStringList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.get"></a>

```typescript
public get(index: number): DataHelmTemplateSetStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString">DataHelmTemplateSetString</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataHelmTemplateSetString[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString">DataHelmTemplateSetString</a>[]

---


### DataHelmTemplateSetStringOutputReference <a name="DataHelmTemplateSetStringOutputReference" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer"></a>

```typescript
import { dataHelmTemplate } from '@cdktf/provider-helm'

new dataHelmTemplate.DataHelmTemplateSetStringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString">DataHelmTemplateSetString</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataHelmTemplateSetString;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString">DataHelmTemplateSetString</a>

---



