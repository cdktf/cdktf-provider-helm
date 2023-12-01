# `dataHelmTemplate` Submodule <a name="`dataHelmTemplate` Submodule" id="@cdktf/provider-helm.dataHelmTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHelmTemplate <a name="DataHelmTemplate" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template helm_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Helm;

new DataHelmTemplate(Construct Scope, string Id, DataHelmTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig">DataHelmTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig">DataHelmTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putPostrender">PutPostrender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSet">PutSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetList">PutSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetSensitive">PutSetSensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetString">PutSetString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetApiVersions">ResetApiVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetAtomic">ResetAtomic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetCrds">ResetCrds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetCreateNamespace">ResetCreateNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDependencyUpdate">ResetDependencyUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDevel">ResetDevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDisableOpenapiValidation">ResetDisableOpenapiValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDisableWebhooks">ResetDisableWebhooks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetIncludeCrds">ResetIncludeCrds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetIsUpgrade">ResetIsUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetKeyring">ResetKeyring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetKubeVersion">ResetKubeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetManifest">ResetManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetManifests">ResetManifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetNotes">ResetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetPassCredentials">ResetPassCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetPostrender">ResetPostrender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRenderSubchartNotes">ResetRenderSubchartNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetReplace">ResetReplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepository">ResetRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryCaFile">ResetRepositoryCaFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryCertFile">ResetRepositoryCertFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryKeyFile">ResetRepositoryKeyFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryPassword">ResetRepositoryPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryUsername">ResetRepositoryUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetResetValues">ResetResetValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetReuseValues">ResetReuseValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSet">ResetSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSetList">ResetSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSetSensitive">ResetSetSensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSetString">ResetSetString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetShowOnly">ResetShowOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSkipCrds">ResetSkipCrds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSkipTests">ResetSkipTests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetTfValues">ResetTfValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetValidate">ResetValidate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetVerify">ResetVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetVersion">ResetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetWait">ResetWait</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutPostrender` <a name="PutPostrender" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putPostrender"></a>

```csharp
private void PutPostrender(DataHelmTemplatePostrender Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putPostrender.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a>

---

##### `PutSet` <a name="PutSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSet"></a>

```csharp
private void PutSet(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSet.parameter.value"></a>

- *Type:* object

---

##### `PutSetList` <a name="PutSetList" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetList"></a>

```csharp
private void PutSetList(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetList.parameter.value"></a>

- *Type:* object

---

##### `PutSetSensitive` <a name="PutSetSensitive" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetSensitive"></a>

```csharp
private void PutSetSensitive(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetSensitive.parameter.value"></a>

- *Type:* object

---

##### `PutSetString` <a name="PutSetString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetString"></a>

```csharp
private void PutSetString(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetString.parameter.value"></a>

- *Type:* object

---

##### `ResetApiVersions` <a name="ResetApiVersions" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetApiVersions"></a>

```csharp
private void ResetApiVersions()
```

##### `ResetAtomic` <a name="ResetAtomic" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetAtomic"></a>

```csharp
private void ResetAtomic()
```

##### `ResetCrds` <a name="ResetCrds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetCrds"></a>

```csharp
private void ResetCrds()
```

##### `ResetCreateNamespace` <a name="ResetCreateNamespace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetCreateNamespace"></a>

```csharp
private void ResetCreateNamespace()
```

##### `ResetDependencyUpdate` <a name="ResetDependencyUpdate" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDependencyUpdate"></a>

```csharp
private void ResetDependencyUpdate()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDevel` <a name="ResetDevel" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDevel"></a>

```csharp
private void ResetDevel()
```

##### `ResetDisableOpenapiValidation` <a name="ResetDisableOpenapiValidation" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDisableOpenapiValidation"></a>

```csharp
private void ResetDisableOpenapiValidation()
```

##### `ResetDisableWebhooks` <a name="ResetDisableWebhooks" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDisableWebhooks"></a>

```csharp
private void ResetDisableWebhooks()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludeCrds` <a name="ResetIncludeCrds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetIncludeCrds"></a>

```csharp
private void ResetIncludeCrds()
```

##### `ResetIsUpgrade` <a name="ResetIsUpgrade" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetIsUpgrade"></a>

```csharp
private void ResetIsUpgrade()
```

##### `ResetKeyring` <a name="ResetKeyring" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetKeyring"></a>

```csharp
private void ResetKeyring()
```

##### `ResetKubeVersion` <a name="ResetKubeVersion" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetKubeVersion"></a>

```csharp
private void ResetKubeVersion()
```

##### `ResetManifest` <a name="ResetManifest" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetManifest"></a>

```csharp
private void ResetManifest()
```

##### `ResetManifests` <a name="ResetManifests" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetManifests"></a>

```csharp
private void ResetManifests()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetNotes` <a name="ResetNotes" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetNotes"></a>

```csharp
private void ResetNotes()
```

##### `ResetPassCredentials` <a name="ResetPassCredentials" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetPassCredentials"></a>

```csharp
private void ResetPassCredentials()
```

##### `ResetPostrender` <a name="ResetPostrender" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetPostrender"></a>

```csharp
private void ResetPostrender()
```

##### `ResetRenderSubchartNotes` <a name="ResetRenderSubchartNotes" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRenderSubchartNotes"></a>

```csharp
private void ResetRenderSubchartNotes()
```

##### `ResetReplace` <a name="ResetReplace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetReplace"></a>

```csharp
private void ResetReplace()
```

##### `ResetRepository` <a name="ResetRepository" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepository"></a>

```csharp
private void ResetRepository()
```

##### `ResetRepositoryCaFile` <a name="ResetRepositoryCaFile" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryCaFile"></a>

```csharp
private void ResetRepositoryCaFile()
```

##### `ResetRepositoryCertFile` <a name="ResetRepositoryCertFile" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryCertFile"></a>

```csharp
private void ResetRepositoryCertFile()
```

##### `ResetRepositoryKeyFile` <a name="ResetRepositoryKeyFile" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryKeyFile"></a>

```csharp
private void ResetRepositoryKeyFile()
```

##### `ResetRepositoryPassword` <a name="ResetRepositoryPassword" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryPassword"></a>

```csharp
private void ResetRepositoryPassword()
```

##### `ResetRepositoryUsername` <a name="ResetRepositoryUsername" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryUsername"></a>

```csharp
private void ResetRepositoryUsername()
```

##### `ResetResetValues` <a name="ResetResetValues" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetResetValues"></a>

```csharp
private void ResetResetValues()
```

##### `ResetReuseValues` <a name="ResetReuseValues" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetReuseValues"></a>

```csharp
private void ResetReuseValues()
```

##### `ResetSet` <a name="ResetSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSet"></a>

```csharp
private void ResetSet()
```

##### `ResetSetList` <a name="ResetSetList" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSetList"></a>

```csharp
private void ResetSetList()
```

##### `ResetSetSensitive` <a name="ResetSetSensitive" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSetSensitive"></a>

```csharp
private void ResetSetSensitive()
```

##### `ResetSetString` <a name="ResetSetString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSetString"></a>

```csharp
private void ResetSetString()
```

##### `ResetShowOnly` <a name="ResetShowOnly" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetShowOnly"></a>

```csharp
private void ResetShowOnly()
```

##### `ResetSkipCrds` <a name="ResetSkipCrds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSkipCrds"></a>

```csharp
private void ResetSkipCrds()
```

##### `ResetSkipTests` <a name="ResetSkipTests" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSkipTests"></a>

```csharp
private void ResetSkipTests()
```

##### `ResetTfValues` <a name="ResetTfValues" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetTfValues"></a>

```csharp
private void ResetTfValues()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetTimeout"></a>

```csharp
private void ResetTimeout()
```

##### `ResetValidate` <a name="ResetValidate" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetValidate"></a>

```csharp
private void ResetValidate()
```

##### `ResetVerify` <a name="ResetVerify" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetVerify"></a>

```csharp
private void ResetVerify()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetVersion"></a>

```csharp
private void ResetVersion()
```

##### `ResetWait` <a name="ResetWait" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetWait"></a>

```csharp
private void ResetWait()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataHelmTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Helm;

DataHelmTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Helm;

DataHelmTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Helm;

DataHelmTemplate.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Helm;

DataHelmTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataHelmTemplate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataHelmTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataHelmTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataHelmTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.postrender">Postrender</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference">DataHelmTemplatePostrenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.set">Set</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList">DataHelmTemplateSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setList">SetList</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList">DataHelmTemplateSetListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setSensitive">SetSensitive</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList">DataHelmTemplateSetSensitiveList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setString">SetString</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList">DataHelmTemplateSetStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.apiVersionsInput">ApiVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.atomicInput">AtomicInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.chartInput">ChartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.crdsInput">CrdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.createNamespaceInput">CreateNamespaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.dependencyUpdateInput">DependencyUpdateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.develInput">DevelInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableOpenapiValidationInput">DisableOpenapiValidationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableWebhooksInput">DisableWebhooksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.includeCrdsInput">IncludeCrdsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.isUpgradeInput">IsUpgradeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.keyringInput">KeyringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.kubeVersionInput">KubeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifestInput">ManifestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifestsInput">ManifestsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.notesInput">NotesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.passCredentialsInput">PassCredentialsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.postrenderInput">PostrenderInput</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.renderSubchartNotesInput">RenderSubchartNotesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.replaceInput">ReplaceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCaFileInput">RepositoryCaFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCertFileInput">RepositoryCertFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryKeyFileInput">RepositoryKeyFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryPasswordInput">RepositoryPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryUsernameInput">RepositoryUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.resetValuesInput">ResetValuesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.reuseValuesInput">ReuseValuesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setInput">SetInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setListInput">SetListInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setSensitiveInput">SetSensitiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setStringInput">SetStringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.showOnlyInput">ShowOnlyInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipCrdsInput">SkipCrdsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipTestsInput">SkipTestsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.validateInput">ValidateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.verifyInput">VerifyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.waitInput">WaitInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.apiVersions">ApiVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.atomic">Atomic</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.chart">Chart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.crds">Crds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.createNamespace">CreateNamespace</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.dependencyUpdate">DependencyUpdate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.devel">Devel</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableOpenapiValidation">DisableOpenapiValidation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableWebhooks">DisableWebhooks</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.includeCrds">IncludeCrds</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.isUpgrade">IsUpgrade</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.keyring">Keyring</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.kubeVersion">KubeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifest">Manifest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifests">Manifests</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.notes">Notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.passCredentials">PassCredentials</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.renderSubchartNotes">RenderSubchartNotes</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.replace">Replace</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCaFile">RepositoryCaFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCertFile">RepositoryCertFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryKeyFile">RepositoryKeyFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryPassword">RepositoryPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryUsername">RepositoryUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.resetValues">ResetValues</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.reuseValues">ReuseValues</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.showOnly">ShowOnly</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipCrds">SkipCrds</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipTests">SkipTests</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.validate">Validate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.verify">Verify</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.wait">Wait</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Postrender`<sup>Required</sup> <a name="Postrender" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.postrender"></a>

```csharp
public DataHelmTemplatePostrenderOutputReference Postrender { get; }
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference">DataHelmTemplatePostrenderOutputReference</a>

---

##### `Set`<sup>Required</sup> <a name="Set" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.set"></a>

```csharp
public DataHelmTemplateSetList Set { get; }
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList">DataHelmTemplateSetList</a>

---

##### `SetList`<sup>Required</sup> <a name="SetList" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setList"></a>

```csharp
public DataHelmTemplateSetListStructList SetList { get; }
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList">DataHelmTemplateSetListStructList</a>

---

##### `SetSensitive`<sup>Required</sup> <a name="SetSensitive" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setSensitive"></a>

```csharp
public DataHelmTemplateSetSensitiveList SetSensitive { get; }
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList">DataHelmTemplateSetSensitiveList</a>

---

##### `SetString`<sup>Required</sup> <a name="SetString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setString"></a>

```csharp
public DataHelmTemplateSetStringList SetString { get; }
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList">DataHelmTemplateSetStringList</a>

---

##### `ApiVersionsInput`<sup>Optional</sup> <a name="ApiVersionsInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.apiVersionsInput"></a>

```csharp
public string[] ApiVersionsInput { get; }
```

- *Type:* string[]

---

##### `AtomicInput`<sup>Optional</sup> <a name="AtomicInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.atomicInput"></a>

```csharp
public object AtomicInput { get; }
```

- *Type:* object

---

##### `ChartInput`<sup>Optional</sup> <a name="ChartInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.chartInput"></a>

```csharp
public string ChartInput { get; }
```

- *Type:* string

---

##### `CrdsInput`<sup>Optional</sup> <a name="CrdsInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.crdsInput"></a>

```csharp
public string[] CrdsInput { get; }
```

- *Type:* string[]

---

##### `CreateNamespaceInput`<sup>Optional</sup> <a name="CreateNamespaceInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.createNamespaceInput"></a>

```csharp
public object CreateNamespaceInput { get; }
```

- *Type:* object

---

##### `DependencyUpdateInput`<sup>Optional</sup> <a name="DependencyUpdateInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.dependencyUpdateInput"></a>

```csharp
public object DependencyUpdateInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DevelInput`<sup>Optional</sup> <a name="DevelInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.develInput"></a>

```csharp
public object DevelInput { get; }
```

- *Type:* object

---

##### `DisableOpenapiValidationInput`<sup>Optional</sup> <a name="DisableOpenapiValidationInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableOpenapiValidationInput"></a>

```csharp
public object DisableOpenapiValidationInput { get; }
```

- *Type:* object

---

##### `DisableWebhooksInput`<sup>Optional</sup> <a name="DisableWebhooksInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableWebhooksInput"></a>

```csharp
public object DisableWebhooksInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeCrdsInput`<sup>Optional</sup> <a name="IncludeCrdsInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.includeCrdsInput"></a>

```csharp
public object IncludeCrdsInput { get; }
```

- *Type:* object

---

##### `IsUpgradeInput`<sup>Optional</sup> <a name="IsUpgradeInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.isUpgradeInput"></a>

```csharp
public object IsUpgradeInput { get; }
```

- *Type:* object

---

##### `KeyringInput`<sup>Optional</sup> <a name="KeyringInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.keyringInput"></a>

```csharp
public string KeyringInput { get; }
```

- *Type:* string

---

##### `KubeVersionInput`<sup>Optional</sup> <a name="KubeVersionInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.kubeVersionInput"></a>

```csharp
public string KubeVersionInput { get; }
```

- *Type:* string

---

##### `ManifestInput`<sup>Optional</sup> <a name="ManifestInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifestInput"></a>

```csharp
public string ManifestInput { get; }
```

- *Type:* string

---

##### `ManifestsInput`<sup>Optional</sup> <a name="ManifestsInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifestsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ManifestsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `NotesInput`<sup>Optional</sup> <a name="NotesInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.notesInput"></a>

```csharp
public string NotesInput { get; }
```

- *Type:* string

---

##### `PassCredentialsInput`<sup>Optional</sup> <a name="PassCredentialsInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.passCredentialsInput"></a>

```csharp
public object PassCredentialsInput { get; }
```

- *Type:* object

---

##### `PostrenderInput`<sup>Optional</sup> <a name="PostrenderInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.postrenderInput"></a>

```csharp
public DataHelmTemplatePostrender PostrenderInput { get; }
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a>

---

##### `RenderSubchartNotesInput`<sup>Optional</sup> <a name="RenderSubchartNotesInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.renderSubchartNotesInput"></a>

```csharp
public object RenderSubchartNotesInput { get; }
```

- *Type:* object

---

##### `ReplaceInput`<sup>Optional</sup> <a name="ReplaceInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.replaceInput"></a>

```csharp
public object ReplaceInput { get; }
```

- *Type:* object

---

##### `RepositoryCaFileInput`<sup>Optional</sup> <a name="RepositoryCaFileInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCaFileInput"></a>

```csharp
public string RepositoryCaFileInput { get; }
```

- *Type:* string

---

##### `RepositoryCertFileInput`<sup>Optional</sup> <a name="RepositoryCertFileInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCertFileInput"></a>

```csharp
public string RepositoryCertFileInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `RepositoryKeyFileInput`<sup>Optional</sup> <a name="RepositoryKeyFileInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryKeyFileInput"></a>

```csharp
public string RepositoryKeyFileInput { get; }
```

- *Type:* string

---

##### `RepositoryPasswordInput`<sup>Optional</sup> <a name="RepositoryPasswordInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryPasswordInput"></a>

```csharp
public string RepositoryPasswordInput { get; }
```

- *Type:* string

---

##### `RepositoryUsernameInput`<sup>Optional</sup> <a name="RepositoryUsernameInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryUsernameInput"></a>

```csharp
public string RepositoryUsernameInput { get; }
```

- *Type:* string

---

##### `ResetValuesInput`<sup>Optional</sup> <a name="ResetValuesInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.resetValuesInput"></a>

```csharp
public object ResetValuesInput { get; }
```

- *Type:* object

---

##### `ReuseValuesInput`<sup>Optional</sup> <a name="ReuseValuesInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.reuseValuesInput"></a>

```csharp
public object ReuseValuesInput { get; }
```

- *Type:* object

---

##### `SetInput`<sup>Optional</sup> <a name="SetInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setInput"></a>

```csharp
public object SetInput { get; }
```

- *Type:* object

---

##### `SetListInput`<sup>Optional</sup> <a name="SetListInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setListInput"></a>

```csharp
public object SetListInput { get; }
```

- *Type:* object

---

##### `SetSensitiveInput`<sup>Optional</sup> <a name="SetSensitiveInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setSensitiveInput"></a>

```csharp
public object SetSensitiveInput { get; }
```

- *Type:* object

---

##### `SetStringInput`<sup>Optional</sup> <a name="SetStringInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setStringInput"></a>

```csharp
public object SetStringInput { get; }
```

- *Type:* object

---

##### `ShowOnlyInput`<sup>Optional</sup> <a name="ShowOnlyInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.showOnlyInput"></a>

```csharp
public string[] ShowOnlyInput { get; }
```

- *Type:* string[]

---

##### `SkipCrdsInput`<sup>Optional</sup> <a name="SkipCrdsInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipCrdsInput"></a>

```csharp
public object SkipCrdsInput { get; }
```

- *Type:* object

---

##### `SkipTestsInput`<sup>Optional</sup> <a name="SkipTestsInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipTestsInput"></a>

```csharp
public object SkipTestsInput { get; }
```

- *Type:* object

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `ValidateInput`<sup>Optional</sup> <a name="ValidateInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.validateInput"></a>

```csharp
public object ValidateInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `VerifyInput`<sup>Optional</sup> <a name="VerifyInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.verifyInput"></a>

```csharp
public object VerifyInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `WaitInput`<sup>Optional</sup> <a name="WaitInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.waitInput"></a>

```csharp
public object WaitInput { get; }
```

- *Type:* object

---

##### `ApiVersions`<sup>Required</sup> <a name="ApiVersions" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.apiVersions"></a>

```csharp
public string[] ApiVersions { get; }
```

- *Type:* string[]

---

##### `Atomic`<sup>Required</sup> <a name="Atomic" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.atomic"></a>

```csharp
public object Atomic { get; }
```

- *Type:* object

---

##### `Chart`<sup>Required</sup> <a name="Chart" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.chart"></a>

```csharp
public string Chart { get; }
```

- *Type:* string

---

##### `Crds`<sup>Required</sup> <a name="Crds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.crds"></a>

```csharp
public string[] Crds { get; }
```

- *Type:* string[]

---

##### `CreateNamespace`<sup>Required</sup> <a name="CreateNamespace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.createNamespace"></a>

```csharp
public object CreateNamespace { get; }
```

- *Type:* object

---

##### `DependencyUpdate`<sup>Required</sup> <a name="DependencyUpdate" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.dependencyUpdate"></a>

```csharp
public object DependencyUpdate { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Devel`<sup>Required</sup> <a name="Devel" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.devel"></a>

```csharp
public object Devel { get; }
```

- *Type:* object

---

##### `DisableOpenapiValidation`<sup>Required</sup> <a name="DisableOpenapiValidation" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableOpenapiValidation"></a>

```csharp
public object DisableOpenapiValidation { get; }
```

- *Type:* object

---

##### `DisableWebhooks`<sup>Required</sup> <a name="DisableWebhooks" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableWebhooks"></a>

```csharp
public object DisableWebhooks { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludeCrds`<sup>Required</sup> <a name="IncludeCrds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.includeCrds"></a>

```csharp
public object IncludeCrds { get; }
```

- *Type:* object

---

##### `IsUpgrade`<sup>Required</sup> <a name="IsUpgrade" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.isUpgrade"></a>

```csharp
public object IsUpgrade { get; }
```

- *Type:* object

---

##### `Keyring`<sup>Required</sup> <a name="Keyring" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.keyring"></a>

```csharp
public string Keyring { get; }
```

- *Type:* string

---

##### `KubeVersion`<sup>Required</sup> <a name="KubeVersion" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.kubeVersion"></a>

```csharp
public string KubeVersion { get; }
```

- *Type:* string

---

##### `Manifest`<sup>Required</sup> <a name="Manifest" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifest"></a>

```csharp
public string Manifest { get; }
```

- *Type:* string

---

##### `Manifests`<sup>Required</sup> <a name="Manifests" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifests"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Manifests { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.notes"></a>

```csharp
public string Notes { get; }
```

- *Type:* string

---

##### `PassCredentials`<sup>Required</sup> <a name="PassCredentials" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.passCredentials"></a>

```csharp
public object PassCredentials { get; }
```

- *Type:* object

---

##### `RenderSubchartNotes`<sup>Required</sup> <a name="RenderSubchartNotes" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.renderSubchartNotes"></a>

```csharp
public object RenderSubchartNotes { get; }
```

- *Type:* object

---

##### `Replace`<sup>Required</sup> <a name="Replace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.replace"></a>

```csharp
public object Replace { get; }
```

- *Type:* object

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `RepositoryCaFile`<sup>Required</sup> <a name="RepositoryCaFile" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCaFile"></a>

```csharp
public string RepositoryCaFile { get; }
```

- *Type:* string

---

##### `RepositoryCertFile`<sup>Required</sup> <a name="RepositoryCertFile" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCertFile"></a>

```csharp
public string RepositoryCertFile { get; }
```

- *Type:* string

---

##### `RepositoryKeyFile`<sup>Required</sup> <a name="RepositoryKeyFile" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryKeyFile"></a>

```csharp
public string RepositoryKeyFile { get; }
```

- *Type:* string

---

##### `RepositoryPassword`<sup>Required</sup> <a name="RepositoryPassword" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryPassword"></a>

```csharp
public string RepositoryPassword { get; }
```

- *Type:* string

---

##### `RepositoryUsername`<sup>Required</sup> <a name="RepositoryUsername" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryUsername"></a>

```csharp
public string RepositoryUsername { get; }
```

- *Type:* string

---

##### `ResetValues`<sup>Required</sup> <a name="ResetValues" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.resetValues"></a>

```csharp
public object ResetValues { get; }
```

- *Type:* object

---

##### `ReuseValues`<sup>Required</sup> <a name="ReuseValues" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.reuseValues"></a>

```csharp
public object ReuseValues { get; }
```

- *Type:* object

---

##### `ShowOnly`<sup>Required</sup> <a name="ShowOnly" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.showOnly"></a>

```csharp
public string[] ShowOnly { get; }
```

- *Type:* string[]

---

##### `SkipCrds`<sup>Required</sup> <a name="SkipCrds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipCrds"></a>

```csharp
public object SkipCrds { get; }
```

- *Type:* object

---

##### `SkipTests`<sup>Required</sup> <a name="SkipTests" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipTests"></a>

```csharp
public object SkipTests { get; }
```

- *Type:* object

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `Validate`<sup>Required</sup> <a name="Validate" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.validate"></a>

```csharp
public object Validate { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `Verify`<sup>Required</sup> <a name="Verify" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.verify"></a>

```csharp
public object Verify { get; }
```

- *Type:* object

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `Wait`<sup>Required</sup> <a name="Wait" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.wait"></a>

```csharp
public object Wait { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataHelmTemplateConfig <a name="DataHelmTemplateConfig" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Helm;

new DataHelmTemplateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Chart,
    string Name,
    string[] ApiVersions = null,
    object Atomic = null,
    string[] Crds = null,
    object CreateNamespace = null,
    object DependencyUpdate = null,
    string Description = null,
    object Devel = null,
    object DisableOpenapiValidation = null,
    object DisableWebhooks = null,
    string Id = null,
    object IncludeCrds = null,
    object IsUpgrade = null,
    string Keyring = null,
    string KubeVersion = null,
    string Manifest = null,
    System.Collections.Generic.IDictionary<string, string> Manifests = null,
    string Namespace = null,
    string Notes = null,
    object PassCredentials = null,
    DataHelmTemplatePostrender Postrender = null,
    object RenderSubchartNotes = null,
    object Replace = null,
    string Repository = null,
    string RepositoryCaFile = null,
    string RepositoryCertFile = null,
    string RepositoryKeyFile = null,
    string RepositoryPassword = null,
    string RepositoryUsername = null,
    object ResetValues = null,
    object ReuseValues = null,
    object Set = null,
    object SetList = null,
    object SetSensitive = null,
    object SetString = null,
    string[] ShowOnly = null,
    object SkipCrds = null,
    object SkipTests = null,
    double Timeout = null,
    object Validate = null,
    string[] Values = null,
    object Verify = null,
    string Version = null,
    object Wait = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.chart">Chart</a></code> | <code>string</code> | Chart name to be installed. A path may be used. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.name">Name</a></code> | <code>string</code> | Release name. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.apiVersions">ApiVersions</a></code> | <code>string[]</code> | Kubernetes api versions used for Capabilities.APIVersions. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.atomic">Atomic</a></code> | <code>object</code> | If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.crds">Crds</a></code> | <code>string[]</code> | List of rendered CRDs from the chart. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.createNamespace">CreateNamespace</a></code> | <code>object</code> | Create the namespace if it does not exist. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.dependencyUpdate">DependencyUpdate</a></code> | <code>object</code> | Run helm dependency update before installing the chart. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.description">Description</a></code> | <code>string</code> | Add a custom description. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.devel">Devel</a></code> | <code>object</code> | Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.disableOpenapiValidation">DisableOpenapiValidation</a></code> | <code>object</code> | If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.disableWebhooks">DisableWebhooks</a></code> | <code>object</code> | Prevent hooks from running. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#id DataHelmTemplate#id}. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.includeCrds">IncludeCrds</a></code> | <code>object</code> | Include CRDs in the templated output. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.isUpgrade">IsUpgrade</a></code> | <code>object</code> | Set .Release.IsUpgrade instead of .Release.IsInstall. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.keyring">Keyring</a></code> | <code>string</code> | Location of public keys used for verification. Used only if `verify` is true. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.kubeVersion">KubeVersion</a></code> | <code>string</code> | Kubernetes version used for Capabilities.KubeVersion. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.manifest">Manifest</a></code> | <code>string</code> | Concatenated rendered chart templates. This corresponds to the output of the `helm template` command. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.manifests">Manifests</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of rendered chart templates indexed by the template name. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.namespace">Namespace</a></code> | <code>string</code> | Namespace to install the release into. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.notes">Notes</a></code> | <code>string</code> | Rendered notes if the chart contains a `NOTES.txt`. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.passCredentials">PassCredentials</a></code> | <code>object</code> | Pass credentials to all domains. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.postrender">Postrender</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a></code> | postrender block. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.renderSubchartNotes">RenderSubchartNotes</a></code> | <code>object</code> | If set, render subchart notes along with the parent. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.replace">Replace</a></code> | <code>object</code> | Re-use the given name, even if that name is already used. This is unsafe in production. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repository">Repository</a></code> | <code>string</code> | Repository where to locate the requested chart. If is a URL the chart is installed without installing the repository. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryCaFile">RepositoryCaFile</a></code> | <code>string</code> | The Repositories CA File. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryCertFile">RepositoryCertFile</a></code> | <code>string</code> | The repositories cert file. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryKeyFile">RepositoryKeyFile</a></code> | <code>string</code> | The repositories cert key file. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryPassword">RepositoryPassword</a></code> | <code>string</code> | Password for HTTP basic authentication. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryUsername">RepositoryUsername</a></code> | <code>string</code> | Username for HTTP basic authentication. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.resetValues">ResetValues</a></code> | <code>object</code> | When upgrading, reset the values to the ones built into the chart. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.reuseValues">ReuseValues</a></code> | <code>object</code> | When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.set">Set</a></code> | <code>object</code> | set block. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.setList">SetList</a></code> | <code>object</code> | set_list block. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.setSensitive">SetSensitive</a></code> | <code>object</code> | set_sensitive block. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.setString">SetString</a></code> | <code>object</code> | set_string block. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.showOnly">ShowOnly</a></code> | <code>string[]</code> | Only show manifests rendered from the given templates. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.skipCrds">SkipCrds</a></code> | <code>object</code> | If set, no CRDs will be installed. By default, CRDs are installed if not already present. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.skipTests">SkipTests</a></code> | <code>object</code> | If set, tests will not be rendered. By default, tests are rendered. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.timeout">Timeout</a></code> | <code>double</code> | Time in seconds to wait for any individual kubernetes operation. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.validate">Validate</a></code> | <code>object</code> | Validate your manifests against the Kubernetes cluster you are currently pointing at. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.values">Values</a></code> | <code>string[]</code> | List of values in raw yaml format to pass to helm. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.verify">Verify</a></code> | <code>object</code> | Verify the package before installing it. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.version">Version</a></code> | <code>string</code> | Specify the exact chart version to install. If this is not specified, the latest version is installed. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.wait">Wait</a></code> | <code>object</code> | Will wait until all resources are in a ready state before marking the release as successful. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Chart`<sup>Required</sup> <a name="Chart" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.chart"></a>

```csharp
public string Chart { get; set; }
```

- *Type:* string

Chart name to be installed. A path may be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#chart DataHelmTemplate#chart}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Release name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#name DataHelmTemplate#name}

---

##### `ApiVersions`<sup>Optional</sup> <a name="ApiVersions" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.apiVersions"></a>

```csharp
public string[] ApiVersions { get; set; }
```

- *Type:* string[]

Kubernetes api versions used for Capabilities.APIVersions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#api_versions DataHelmTemplate#api_versions}

---

##### `Atomic`<sup>Optional</sup> <a name="Atomic" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.atomic"></a>

```csharp
public object Atomic { get; set; }
```

- *Type:* object

If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#atomic DataHelmTemplate#atomic}

---

##### `Crds`<sup>Optional</sup> <a name="Crds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.crds"></a>

```csharp
public string[] Crds { get; set; }
```

- *Type:* string[]

List of rendered CRDs from the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#crds DataHelmTemplate#crds}

---

##### `CreateNamespace`<sup>Optional</sup> <a name="CreateNamespace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.createNamespace"></a>

```csharp
public object CreateNamespace { get; set; }
```

- *Type:* object

Create the namespace if it does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#create_namespace DataHelmTemplate#create_namespace}

---

##### `DependencyUpdate`<sup>Optional</sup> <a name="DependencyUpdate" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.dependencyUpdate"></a>

```csharp
public object DependencyUpdate { get; set; }
```

- *Type:* object

Run helm dependency update before installing the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#dependency_update DataHelmTemplate#dependency_update}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Add a custom description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#description DataHelmTemplate#description}

---

##### `Devel`<sup>Optional</sup> <a name="Devel" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.devel"></a>

```csharp
public object Devel { get; set; }
```

- *Type:* object

Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#devel DataHelmTemplate#devel}

---

##### `DisableOpenapiValidation`<sup>Optional</sup> <a name="DisableOpenapiValidation" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.disableOpenapiValidation"></a>

```csharp
public object DisableOpenapiValidation { get; set; }
```

- *Type:* object

If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#disable_openapi_validation DataHelmTemplate#disable_openapi_validation}

---

##### `DisableWebhooks`<sup>Optional</sup> <a name="DisableWebhooks" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.disableWebhooks"></a>

```csharp
public object DisableWebhooks { get; set; }
```

- *Type:* object

Prevent hooks from running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#disable_webhooks DataHelmTemplate#disable_webhooks}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#id DataHelmTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeCrds`<sup>Optional</sup> <a name="IncludeCrds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.includeCrds"></a>

```csharp
public object IncludeCrds { get; set; }
```

- *Type:* object

Include CRDs in the templated output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#include_crds DataHelmTemplate#include_crds}

---

##### `IsUpgrade`<sup>Optional</sup> <a name="IsUpgrade" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.isUpgrade"></a>

```csharp
public object IsUpgrade { get; set; }
```

- *Type:* object

Set .Release.IsUpgrade instead of .Release.IsInstall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#is_upgrade DataHelmTemplate#is_upgrade}

---

##### `Keyring`<sup>Optional</sup> <a name="Keyring" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.keyring"></a>

```csharp
public string Keyring { get; set; }
```

- *Type:* string

Location of public keys used for verification. Used only if `verify` is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#keyring DataHelmTemplate#keyring}

---

##### `KubeVersion`<sup>Optional</sup> <a name="KubeVersion" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.kubeVersion"></a>

```csharp
public string KubeVersion { get; set; }
```

- *Type:* string

Kubernetes version used for Capabilities.KubeVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#kube_version DataHelmTemplate#kube_version}

---

##### `Manifest`<sup>Optional</sup> <a name="Manifest" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.manifest"></a>

```csharp
public string Manifest { get; set; }
```

- *Type:* string

Concatenated rendered chart templates. This corresponds to the output of the `helm template` command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#manifest DataHelmTemplate#manifest}

---

##### `Manifests`<sup>Optional</sup> <a name="Manifests" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.manifests"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Manifests { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of rendered chart templates indexed by the template name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#manifests DataHelmTemplate#manifests}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace to install the release into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#namespace DataHelmTemplate#namespace}

---

##### `Notes`<sup>Optional</sup> <a name="Notes" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.notes"></a>

```csharp
public string Notes { get; set; }
```

- *Type:* string

Rendered notes if the chart contains a `NOTES.txt`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#notes DataHelmTemplate#notes}

---

##### `PassCredentials`<sup>Optional</sup> <a name="PassCredentials" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.passCredentials"></a>

```csharp
public object PassCredentials { get; set; }
```

- *Type:* object

Pass credentials to all domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#pass_credentials DataHelmTemplate#pass_credentials}

---

##### `Postrender`<sup>Optional</sup> <a name="Postrender" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.postrender"></a>

```csharp
public DataHelmTemplatePostrender Postrender { get; set; }
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a>

postrender block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#postrender DataHelmTemplate#postrender}

---

##### `RenderSubchartNotes`<sup>Optional</sup> <a name="RenderSubchartNotes" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.renderSubchartNotes"></a>

```csharp
public object RenderSubchartNotes { get; set; }
```

- *Type:* object

If set, render subchart notes along with the parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#render_subchart_notes DataHelmTemplate#render_subchart_notes}

---

##### `Replace`<sup>Optional</sup> <a name="Replace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.replace"></a>

```csharp
public object Replace { get; set; }
```

- *Type:* object

Re-use the given name, even if that name is already used. This is unsafe in production.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#replace DataHelmTemplate#replace}

---

##### `Repository`<sup>Optional</sup> <a name="Repository" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

Repository where to locate the requested chart. If is a URL the chart is installed without installing the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#repository DataHelmTemplate#repository}

---

##### `RepositoryCaFile`<sup>Optional</sup> <a name="RepositoryCaFile" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryCaFile"></a>

```csharp
public string RepositoryCaFile { get; set; }
```

- *Type:* string

The Repositories CA File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#repository_ca_file DataHelmTemplate#repository_ca_file}

---

##### `RepositoryCertFile`<sup>Optional</sup> <a name="RepositoryCertFile" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryCertFile"></a>

```csharp
public string RepositoryCertFile { get; set; }
```

- *Type:* string

The repositories cert file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#repository_cert_file DataHelmTemplate#repository_cert_file}

---

##### `RepositoryKeyFile`<sup>Optional</sup> <a name="RepositoryKeyFile" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryKeyFile"></a>

```csharp
public string RepositoryKeyFile { get; set; }
```

- *Type:* string

The repositories cert key file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#repository_key_file DataHelmTemplate#repository_key_file}

---

##### `RepositoryPassword`<sup>Optional</sup> <a name="RepositoryPassword" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryPassword"></a>

```csharp
public string RepositoryPassword { get; set; }
```

- *Type:* string

Password for HTTP basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#repository_password DataHelmTemplate#repository_password}

---

##### `RepositoryUsername`<sup>Optional</sup> <a name="RepositoryUsername" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryUsername"></a>

```csharp
public string RepositoryUsername { get; set; }
```

- *Type:* string

Username for HTTP basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#repository_username DataHelmTemplate#repository_username}

---

##### `ResetValues`<sup>Optional</sup> <a name="ResetValues" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.resetValues"></a>

```csharp
public object ResetValues { get; set; }
```

- *Type:* object

When upgrading, reset the values to the ones built into the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#reset_values DataHelmTemplate#reset_values}

---

##### `ReuseValues`<sup>Optional</sup> <a name="ReuseValues" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.reuseValues"></a>

```csharp
public object ReuseValues { get; set; }
```

- *Type:* object

When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#reuse_values DataHelmTemplate#reuse_values}

---

##### `Set`<sup>Optional</sup> <a name="Set" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.set"></a>

```csharp
public object Set { get; set; }
```

- *Type:* object

set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#set DataHelmTemplate#set}

---

##### `SetList`<sup>Optional</sup> <a name="SetList" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.setList"></a>

```csharp
public object SetList { get; set; }
```

- *Type:* object

set_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#set_list DataHelmTemplate#set_list}

---

##### `SetSensitive`<sup>Optional</sup> <a name="SetSensitive" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.setSensitive"></a>

```csharp
public object SetSensitive { get; set; }
```

- *Type:* object

set_sensitive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#set_sensitive DataHelmTemplate#set_sensitive}

---

##### `SetString`<sup>Optional</sup> <a name="SetString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.setString"></a>

```csharp
public object SetString { get; set; }
```

- *Type:* object

set_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#set_string DataHelmTemplate#set_string}

---

##### `ShowOnly`<sup>Optional</sup> <a name="ShowOnly" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.showOnly"></a>

```csharp
public string[] ShowOnly { get; set; }
```

- *Type:* string[]

Only show manifests rendered from the given templates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#show_only DataHelmTemplate#show_only}

---

##### `SkipCrds`<sup>Optional</sup> <a name="SkipCrds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.skipCrds"></a>

```csharp
public object SkipCrds { get; set; }
```

- *Type:* object

If set, no CRDs will be installed. By default, CRDs are installed if not already present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#skip_crds DataHelmTemplate#skip_crds}

---

##### `SkipTests`<sup>Optional</sup> <a name="SkipTests" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.skipTests"></a>

```csharp
public object SkipTests { get; set; }
```

- *Type:* object

If set, tests will not be rendered. By default, tests are rendered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#skip_tests DataHelmTemplate#skip_tests}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

Time in seconds to wait for any individual kubernetes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#timeout DataHelmTemplate#timeout}

---

##### `Validate`<sup>Optional</sup> <a name="Validate" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.validate"></a>

```csharp
public object Validate { get; set; }
```

- *Type:* object

Validate your manifests against the Kubernetes cluster you are currently pointing at.

This is the same validation performed on an install

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#validate DataHelmTemplate#validate}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

List of values in raw yaml format to pass to helm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#values DataHelmTemplate#values}

---

##### `Verify`<sup>Optional</sup> <a name="Verify" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.verify"></a>

```csharp
public object Verify { get; set; }
```

- *Type:* object

Verify the package before installing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#verify DataHelmTemplate#verify}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Specify the exact chart version to install. If this is not specified, the latest version is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#version DataHelmTemplate#version}

---

##### `Wait`<sup>Optional</sup> <a name="Wait" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.wait"></a>

```csharp
public object Wait { get; set; }
```

- *Type:* object

Will wait until all resources are in a ready state before marking the release as successful.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#wait DataHelmTemplate#wait}

---

### DataHelmTemplatePostrender <a name="DataHelmTemplatePostrender" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Helm;

new DataHelmTemplatePostrender {
    string BinaryPath
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender.property.binaryPath">BinaryPath</a></code> | <code>string</code> | The command binary path. |

---

##### `BinaryPath`<sup>Required</sup> <a name="BinaryPath" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender.property.binaryPath"></a>

```csharp
public string BinaryPath { get; set; }
```

- *Type:* string

The command binary path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#binary_path DataHelmTemplate#binary_path}

---

### DataHelmTemplateSet <a name="DataHelmTemplateSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Helm;

new DataHelmTemplateSet {
    string Name,
    string Value,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#name DataHelmTemplate#name}. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#value DataHelmTemplate#value}. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#type DataHelmTemplate#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#name DataHelmTemplate#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#value DataHelmTemplate#value}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#type DataHelmTemplate#type}.

---

### DataHelmTemplateSetListStruct <a name="DataHelmTemplateSetListStruct" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Helm;

new DataHelmTemplateSetListStruct {
    string Name,
    string[] Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#name DataHelmTemplate#name}. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct.property.value">Value</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#value DataHelmTemplate#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#name DataHelmTemplate#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct.property.value"></a>

```csharp
public string[] Value { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#value DataHelmTemplate#value}.

---

### DataHelmTemplateSetSensitive <a name="DataHelmTemplateSetSensitive" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Helm;

new DataHelmTemplateSetSensitive {
    string Name,
    string Value,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#name DataHelmTemplate#name}. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#value DataHelmTemplate#value}. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#type DataHelmTemplate#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#name DataHelmTemplate#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#value DataHelmTemplate#value}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#type DataHelmTemplate#type}.

---

### DataHelmTemplateSetString <a name="DataHelmTemplateSetString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Helm;

new DataHelmTemplateSetString {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#name DataHelmTemplate#name}. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#value DataHelmTemplate#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#name DataHelmTemplate#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.12.1/docs/data-sources/template#value DataHelmTemplate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHelmTemplatePostrenderOutputReference <a name="DataHelmTemplatePostrenderOutputReference" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Helm;

new DataHelmTemplatePostrenderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.binaryPathInput">BinaryPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.binaryPath">BinaryPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BinaryPathInput`<sup>Optional</sup> <a name="BinaryPathInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.binaryPathInput"></a>

```csharp
public string BinaryPathInput { get; }
```

- *Type:* string

---

##### `BinaryPath`<sup>Required</sup> <a name="BinaryPath" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.binaryPath"></a>

```csharp
public string BinaryPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.internalValue"></a>

```csharp
public DataHelmTemplatePostrender InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a>

---


### DataHelmTemplateSetList <a name="DataHelmTemplateSetList" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Helm;

new DataHelmTemplateSetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.get"></a>

```csharp
private DataHelmTemplateSetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataHelmTemplateSetListStructList <a name="DataHelmTemplateSetListStructList" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Helm;

new DataHelmTemplateSetListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.get"></a>

```csharp
private DataHelmTemplateSetListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataHelmTemplateSetListStructOutputReference <a name="DataHelmTemplateSetListStructOutputReference" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Helm;

new DataHelmTemplateSetListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.valueInput">ValueInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.value">Value</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.valueInput"></a>

```csharp
public string[] ValueInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.value"></a>

```csharp
public string[] Value { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataHelmTemplateSetOutputReference <a name="DataHelmTemplateSetOutputReference" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Helm;

new DataHelmTemplateSetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataHelmTemplateSetSensitiveList <a name="DataHelmTemplateSetSensitiveList" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Helm;

new DataHelmTemplateSetSensitiveList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.get"></a>

```csharp
private DataHelmTemplateSetSensitiveOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataHelmTemplateSetSensitiveOutputReference <a name="DataHelmTemplateSetSensitiveOutputReference" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Helm;

new DataHelmTemplateSetSensitiveOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataHelmTemplateSetStringList <a name="DataHelmTemplateSetStringList" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Helm;

new DataHelmTemplateSetStringList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.get"></a>

```csharp
private DataHelmTemplateSetStringOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataHelmTemplateSetStringOutputReference <a name="DataHelmTemplateSetStringOutputReference" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Helm;

new DataHelmTemplateSetStringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



