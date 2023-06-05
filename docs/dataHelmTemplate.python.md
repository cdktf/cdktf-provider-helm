# `data_helm_template`

Refer to the Terraform Registory for docs: [`data_helm_template`](https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template).

# `dataHelmTemplate` Submodule <a name="`dataHelmTemplate` Submodule" id="@cdktf/provider-helm.dataHelmTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataHelmTemplate <a name="DataHelmTemplate" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template helm_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import data_helm_template

dataHelmTemplate.DataHelmTemplate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  chart: str,
  name: str,
  api_versions: typing.List[str] = None,
  atomic: typing.Union[bool, IResolvable] = None,
  crds: typing.List[str] = None,
  create_namespace: typing.Union[bool, IResolvable] = None,
  dependency_update: typing.Union[bool, IResolvable] = None,
  description: str = None,
  devel: typing.Union[bool, IResolvable] = None,
  disable_openapi_validation: typing.Union[bool, IResolvable] = None,
  disable_webhooks: typing.Union[bool, IResolvable] = None,
  id: str = None,
  include_crds: typing.Union[bool, IResolvable] = None,
  is_upgrade: typing.Union[bool, IResolvable] = None,
  keyring: str = None,
  kube_version: str = None,
  manifest: str = None,
  manifests: typing.Mapping[str] = None,
  namespace: str = None,
  notes: str = None,
  pass_credentials: typing.Union[bool, IResolvable] = None,
  postrender: DataHelmTemplatePostrender = None,
  render_subchart_notes: typing.Union[bool, IResolvable] = None,
  replace: typing.Union[bool, IResolvable] = None,
  repository: str = None,
  repository_ca_file: str = None,
  repository_cert_file: str = None,
  repository_key_file: str = None,
  repository_password: str = None,
  repository_username: str = None,
  reset_values: typing.Union[bool, IResolvable] = None,
  reuse_values: typing.Union[bool, IResolvable] = None,
  set: typing.Union[IResolvable, typing.List[DataHelmTemplateSet]] = None,
  set_list: typing.Union[IResolvable, typing.List[DataHelmTemplateSetListStruct]] = None,
  set_sensitive: typing.Union[IResolvable, typing.List[DataHelmTemplateSetSensitive]] = None,
  set_string: typing.Union[IResolvable, typing.List[DataHelmTemplateSetString]] = None,
  show_only: typing.List[str] = None,
  skip_crds: typing.Union[bool, IResolvable] = None,
  skip_tests: typing.Union[bool, IResolvable] = None,
  timeout: typing.Union[int, float] = None,
  validate: typing.Union[bool, IResolvable] = None,
  values: typing.List[str] = None,
  verify: typing.Union[bool, IResolvable] = None,
  version: str = None,
  wait: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.chart">chart</a></code> | <code>str</code> | Chart name to be installed. A path may be used. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | Release name. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.apiVersions">api_versions</a></code> | <code>typing.List[str]</code> | Kubernetes api versions used for Capabilities.APIVersions. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.atomic">atomic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.crds">crds</a></code> | <code>typing.List[str]</code> | List of rendered CRDs from the chart. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.createNamespace">create_namespace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Create the namespace if it does not exist. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.dependencyUpdate">dependency_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Run helm dependency update before installing the chart. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | Add a custom description. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.devel">devel</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.disableOpenapiValidation">disable_openapi_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.disableWebhooks">disable_webhooks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Prevent hooks from running. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#id DataHelmTemplate#id}. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.includeCrds">include_crds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include CRDs in the templated output. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.isUpgrade">is_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set .Release.IsUpgrade instead of .Release.IsInstall. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.keyring">keyring</a></code> | <code>str</code> | Location of public keys used for verification. Used only if `verify` is true. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.kubeVersion">kube_version</a></code> | <code>str</code> | Kubernetes version used for Capabilities.KubeVersion. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.manifest">manifest</a></code> | <code>str</code> | Concatenated rendered chart templates. This corresponds to the output of the `helm template` command. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.manifests">manifests</a></code> | <code>typing.Mapping[str]</code> | Map of rendered chart templates indexed by the template name. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Namespace to install the release into. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.notes">notes</a></code> | <code>str</code> | Rendered notes if the chart contains a `NOTES.txt`. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.passCredentials">pass_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Pass credentials to all domains. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.postrender">postrender</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a></code> | postrender block. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.renderSubchartNotes">render_subchart_notes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, render subchart notes along with the parent. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.replace">replace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Re-use the given name, even if that name is already used. This is unsafe in production. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.repository">repository</a></code> | <code>str</code> | Repository where to locate the requested chart. If is a URL the chart is installed without installing the repository. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.repositoryCaFile">repository_ca_file</a></code> | <code>str</code> | The Repositories CA File. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.repositoryCertFile">repository_cert_file</a></code> | <code>str</code> | The repositories cert file. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.repositoryKeyFile">repository_key_file</a></code> | <code>str</code> | The repositories cert key file. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.repositoryPassword">repository_password</a></code> | <code>str</code> | Password for HTTP basic authentication. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.repositoryUsername">repository_username</a></code> | <code>str</code> | Username for HTTP basic authentication. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.resetValues">reset_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When upgrading, reset the values to the ones built into the chart. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.reuseValues">reuse_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.set">set</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a>]]</code> | set block. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.setList">set_list</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a>]]</code> | set_list block. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.setSensitive">set_sensitive</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a>]]</code> | set_sensitive block. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.setString">set_string</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString">DataHelmTemplateSetString</a>]]</code> | set_string block. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.showOnly">show_only</a></code> | <code>typing.List[str]</code> | Only show manifests rendered from the given templates. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.skipCrds">skip_crds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, no CRDs will be installed. By default, CRDs are installed if not already present. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.skipTests">skip_tests</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, tests will not be rendered. By default, tests are rendered. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Time in seconds to wait for any individual kubernetes operation. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.validate">validate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Validate your manifests against the Kubernetes cluster you are currently pointing at. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.values">values</a></code> | <code>typing.List[str]</code> | List of values in raw yaml format to pass to helm. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.verify">verify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Verify the package before installing it. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.version">version</a></code> | <code>str</code> | Specify the exact chart version to install. If this is not specified, the latest version is installed. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.wait">wait</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Will wait until all resources are in a ready state before marking the release as successful. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `chart`<sup>Required</sup> <a name="chart" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.chart"></a>

- *Type:* str

Chart name to be installed. A path may be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#chart DataHelmTemplate#chart}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.name"></a>

- *Type:* str

Release name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#name DataHelmTemplate#name}

---

##### `api_versions`<sup>Optional</sup> <a name="api_versions" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.apiVersions"></a>

- *Type:* typing.List[str]

Kubernetes api versions used for Capabilities.APIVersions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#api_versions DataHelmTemplate#api_versions}

---

##### `atomic`<sup>Optional</sup> <a name="atomic" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.atomic"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#atomic DataHelmTemplate#atomic}

---

##### `crds`<sup>Optional</sup> <a name="crds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.crds"></a>

- *Type:* typing.List[str]

List of rendered CRDs from the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#crds DataHelmTemplate#crds}

---

##### `create_namespace`<sup>Optional</sup> <a name="create_namespace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.createNamespace"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Create the namespace if it does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#create_namespace DataHelmTemplate#create_namespace}

---

##### `dependency_update`<sup>Optional</sup> <a name="dependency_update" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.dependencyUpdate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Run helm dependency update before installing the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#dependency_update DataHelmTemplate#dependency_update}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.description"></a>

- *Type:* str

Add a custom description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#description DataHelmTemplate#description}

---

##### `devel`<sup>Optional</sup> <a name="devel" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.devel"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#devel DataHelmTemplate#devel}

---

##### `disable_openapi_validation`<sup>Optional</sup> <a name="disable_openapi_validation" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.disableOpenapiValidation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#disable_openapi_validation DataHelmTemplate#disable_openapi_validation}

---

##### `disable_webhooks`<sup>Optional</sup> <a name="disable_webhooks" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.disableWebhooks"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Prevent hooks from running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#disable_webhooks DataHelmTemplate#disable_webhooks}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#id DataHelmTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_crds`<sup>Optional</sup> <a name="include_crds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.includeCrds"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include CRDs in the templated output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#include_crds DataHelmTemplate#include_crds}

---

##### `is_upgrade`<sup>Optional</sup> <a name="is_upgrade" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.isUpgrade"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set .Release.IsUpgrade instead of .Release.IsInstall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#is_upgrade DataHelmTemplate#is_upgrade}

---

##### `keyring`<sup>Optional</sup> <a name="keyring" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.keyring"></a>

- *Type:* str

Location of public keys used for verification. Used only if `verify` is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#keyring DataHelmTemplate#keyring}

---

##### `kube_version`<sup>Optional</sup> <a name="kube_version" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.kubeVersion"></a>

- *Type:* str

Kubernetes version used for Capabilities.KubeVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#kube_version DataHelmTemplate#kube_version}

---

##### `manifest`<sup>Optional</sup> <a name="manifest" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.manifest"></a>

- *Type:* str

Concatenated rendered chart templates. This corresponds to the output of the `helm template` command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#manifest DataHelmTemplate#manifest}

---

##### `manifests`<sup>Optional</sup> <a name="manifests" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.manifests"></a>

- *Type:* typing.Mapping[str]

Map of rendered chart templates indexed by the template name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#manifests DataHelmTemplate#manifests}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.namespace"></a>

- *Type:* str

Namespace to install the release into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#namespace DataHelmTemplate#namespace}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.notes"></a>

- *Type:* str

Rendered notes if the chart contains a `NOTES.txt`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#notes DataHelmTemplate#notes}

---

##### `pass_credentials`<sup>Optional</sup> <a name="pass_credentials" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.passCredentials"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Pass credentials to all domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#pass_credentials DataHelmTemplate#pass_credentials}

---

##### `postrender`<sup>Optional</sup> <a name="postrender" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.postrender"></a>

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a>

postrender block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#postrender DataHelmTemplate#postrender}

---

##### `render_subchart_notes`<sup>Optional</sup> <a name="render_subchart_notes" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.renderSubchartNotes"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, render subchart notes along with the parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#render_subchart_notes DataHelmTemplate#render_subchart_notes}

---

##### `replace`<sup>Optional</sup> <a name="replace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.replace"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Re-use the given name, even if that name is already used. This is unsafe in production.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#replace DataHelmTemplate#replace}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.repository"></a>

- *Type:* str

Repository where to locate the requested chart. If is a URL the chart is installed without installing the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#repository DataHelmTemplate#repository}

---

##### `repository_ca_file`<sup>Optional</sup> <a name="repository_ca_file" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.repositoryCaFile"></a>

- *Type:* str

The Repositories CA File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#repository_ca_file DataHelmTemplate#repository_ca_file}

---

##### `repository_cert_file`<sup>Optional</sup> <a name="repository_cert_file" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.repositoryCertFile"></a>

- *Type:* str

The repositories cert file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#repository_cert_file DataHelmTemplate#repository_cert_file}

---

##### `repository_key_file`<sup>Optional</sup> <a name="repository_key_file" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.repositoryKeyFile"></a>

- *Type:* str

The repositories cert key file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#repository_key_file DataHelmTemplate#repository_key_file}

---

##### `repository_password`<sup>Optional</sup> <a name="repository_password" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.repositoryPassword"></a>

- *Type:* str

Password for HTTP basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#repository_password DataHelmTemplate#repository_password}

---

##### `repository_username`<sup>Optional</sup> <a name="repository_username" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.repositoryUsername"></a>

- *Type:* str

Username for HTTP basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#repository_username DataHelmTemplate#repository_username}

---

##### `reset_values`<sup>Optional</sup> <a name="reset_values" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.resetValues"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When upgrading, reset the values to the ones built into the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#reset_values DataHelmTemplate#reset_values}

---

##### `reuse_values`<sup>Optional</sup> <a name="reuse_values" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.reuseValues"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#reuse_values DataHelmTemplate#reuse_values}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.set"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a>]]

set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#set DataHelmTemplate#set}

---

##### `set_list`<sup>Optional</sup> <a name="set_list" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.setList"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a>]]

set_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#set_list DataHelmTemplate#set_list}

---

##### `set_sensitive`<sup>Optional</sup> <a name="set_sensitive" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.setSensitive"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a>]]

set_sensitive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#set_sensitive DataHelmTemplate#set_sensitive}

---

##### `set_string`<sup>Optional</sup> <a name="set_string" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.setString"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString">DataHelmTemplateSetString</a>]]

set_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#set_string DataHelmTemplate#set_string}

---

##### `show_only`<sup>Optional</sup> <a name="show_only" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.showOnly"></a>

- *Type:* typing.List[str]

Only show manifests rendered from the given templates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#show_only DataHelmTemplate#show_only}

---

##### `skip_crds`<sup>Optional</sup> <a name="skip_crds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.skipCrds"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, no CRDs will be installed. By default, CRDs are installed if not already present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#skip_crds DataHelmTemplate#skip_crds}

---

##### `skip_tests`<sup>Optional</sup> <a name="skip_tests" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.skipTests"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, tests will not be rendered. By default, tests are rendered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#skip_tests DataHelmTemplate#skip_tests}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

Time in seconds to wait for any individual kubernetes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#timeout DataHelmTemplate#timeout}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.validate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Validate your manifests against the Kubernetes cluster you are currently pointing at.

This is the same validation performed on an install

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#validate DataHelmTemplate#validate}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.values"></a>

- *Type:* typing.List[str]

List of values in raw yaml format to pass to helm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#values DataHelmTemplate#values}

---

##### `verify`<sup>Optional</sup> <a name="verify" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.verify"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Verify the package before installing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#verify DataHelmTemplate#verify}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.version"></a>

- *Type:* str

Specify the exact chart version to install. If this is not specified, the latest version is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#version DataHelmTemplate#version}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.Initializer.parameter.wait"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Will wait until all resources are in a ready state before marking the release as successful.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#wait DataHelmTemplate#wait}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putPostrender">put_postrender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSet">put_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetList">put_set_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetSensitive">put_set_sensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetString">put_set_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetApiVersions">reset_api_versions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetAtomic">reset_atomic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetCrds">reset_crds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetCreateNamespace">reset_create_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDependencyUpdate">reset_dependency_update</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDevel">reset_devel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDisableOpenapiValidation">reset_disable_openapi_validation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDisableWebhooks">reset_disable_webhooks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetIncludeCrds">reset_include_crds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetIsUpgrade">reset_is_upgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetKeyring">reset_keyring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetKubeVersion">reset_kube_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetManifest">reset_manifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetManifests">reset_manifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetNotes">reset_notes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetPassCredentials">reset_pass_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetPostrender">reset_postrender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRenderSubchartNotes">reset_render_subchart_notes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetReplace">reset_replace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepository">reset_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryCaFile">reset_repository_ca_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryCertFile">reset_repository_cert_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryKeyFile">reset_repository_key_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryPassword">reset_repository_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryUsername">reset_repository_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetResetValues">reset_reset_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetReuseValues">reset_reuse_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSet">reset_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSetList">reset_set_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSetSensitive">reset_set_sensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSetString">reset_set_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetShowOnly">reset_show_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSkipCrds">reset_skip_crds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSkipTests">reset_skip_tests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetTfValues">reset_tf_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetValidate">reset_validate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetVerify">reset_verify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetVersion">reset_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetWait">reset_wait</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_postrender` <a name="put_postrender" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putPostrender"></a>

```python
def put_postrender(
  binary_path: str
) -> None
```

###### `binary_path`<sup>Required</sup> <a name="binary_path" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putPostrender.parameter.binaryPath"></a>

- *Type:* str

The command binary path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#binary_path DataHelmTemplate#binary_path}

---

##### `put_set` <a name="put_set" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSet"></a>

```python
def put_set(
  value: typing.Union[IResolvable, typing.List[DataHelmTemplateSet]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSet.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a>]]

---

##### `put_set_list` <a name="put_set_list" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetList"></a>

```python
def put_set_list(
  value: typing.Union[IResolvable, typing.List[DataHelmTemplateSetListStruct]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetList.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a>]]

---

##### `put_set_sensitive` <a name="put_set_sensitive" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetSensitive"></a>

```python
def put_set_sensitive(
  value: typing.Union[IResolvable, typing.List[DataHelmTemplateSetSensitive]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetSensitive.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a>]]

---

##### `put_set_string` <a name="put_set_string" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetString"></a>

```python
def put_set_string(
  value: typing.Union[IResolvable, typing.List[DataHelmTemplateSetString]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.putSetString.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString">DataHelmTemplateSetString</a>]]

---

##### `reset_api_versions` <a name="reset_api_versions" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetApiVersions"></a>

```python
def reset_api_versions() -> None
```

##### `reset_atomic` <a name="reset_atomic" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetAtomic"></a>

```python
def reset_atomic() -> None
```

##### `reset_crds` <a name="reset_crds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetCrds"></a>

```python
def reset_crds() -> None
```

##### `reset_create_namespace` <a name="reset_create_namespace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetCreateNamespace"></a>

```python
def reset_create_namespace() -> None
```

##### `reset_dependency_update` <a name="reset_dependency_update" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDependencyUpdate"></a>

```python
def reset_dependency_update() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_devel` <a name="reset_devel" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDevel"></a>

```python
def reset_devel() -> None
```

##### `reset_disable_openapi_validation` <a name="reset_disable_openapi_validation" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDisableOpenapiValidation"></a>

```python
def reset_disable_openapi_validation() -> None
```

##### `reset_disable_webhooks` <a name="reset_disable_webhooks" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetDisableWebhooks"></a>

```python
def reset_disable_webhooks() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_include_crds` <a name="reset_include_crds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetIncludeCrds"></a>

```python
def reset_include_crds() -> None
```

##### `reset_is_upgrade` <a name="reset_is_upgrade" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetIsUpgrade"></a>

```python
def reset_is_upgrade() -> None
```

##### `reset_keyring` <a name="reset_keyring" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetKeyring"></a>

```python
def reset_keyring() -> None
```

##### `reset_kube_version` <a name="reset_kube_version" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetKubeVersion"></a>

```python
def reset_kube_version() -> None
```

##### `reset_manifest` <a name="reset_manifest" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetManifest"></a>

```python
def reset_manifest() -> None
```

##### `reset_manifests` <a name="reset_manifests" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetManifests"></a>

```python
def reset_manifests() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_notes` <a name="reset_notes" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetNotes"></a>

```python
def reset_notes() -> None
```

##### `reset_pass_credentials` <a name="reset_pass_credentials" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetPassCredentials"></a>

```python
def reset_pass_credentials() -> None
```

##### `reset_postrender` <a name="reset_postrender" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetPostrender"></a>

```python
def reset_postrender() -> None
```

##### `reset_render_subchart_notes` <a name="reset_render_subchart_notes" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRenderSubchartNotes"></a>

```python
def reset_render_subchart_notes() -> None
```

##### `reset_replace` <a name="reset_replace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetReplace"></a>

```python
def reset_replace() -> None
```

##### `reset_repository` <a name="reset_repository" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepository"></a>

```python
def reset_repository() -> None
```

##### `reset_repository_ca_file` <a name="reset_repository_ca_file" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryCaFile"></a>

```python
def reset_repository_ca_file() -> None
```

##### `reset_repository_cert_file` <a name="reset_repository_cert_file" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryCertFile"></a>

```python
def reset_repository_cert_file() -> None
```

##### `reset_repository_key_file` <a name="reset_repository_key_file" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryKeyFile"></a>

```python
def reset_repository_key_file() -> None
```

##### `reset_repository_password` <a name="reset_repository_password" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryPassword"></a>

```python
def reset_repository_password() -> None
```

##### `reset_repository_username` <a name="reset_repository_username" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetRepositoryUsername"></a>

```python
def reset_repository_username() -> None
```

##### `reset_reset_values` <a name="reset_reset_values" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetResetValues"></a>

```python
def reset_reset_values() -> None
```

##### `reset_reuse_values` <a name="reset_reuse_values" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetReuseValues"></a>

```python
def reset_reuse_values() -> None
```

##### `reset_set` <a name="reset_set" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSet"></a>

```python
def reset_set() -> None
```

##### `reset_set_list` <a name="reset_set_list" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSetList"></a>

```python
def reset_set_list() -> None
```

##### `reset_set_sensitive` <a name="reset_set_sensitive" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSetSensitive"></a>

```python
def reset_set_sensitive() -> None
```

##### `reset_set_string` <a name="reset_set_string" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSetString"></a>

```python
def reset_set_string() -> None
```

##### `reset_show_only` <a name="reset_show_only" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetShowOnly"></a>

```python
def reset_show_only() -> None
```

##### `reset_skip_crds` <a name="reset_skip_crds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSkipCrds"></a>

```python
def reset_skip_crds() -> None
```

##### `reset_skip_tests` <a name="reset_skip_tests" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetSkipTests"></a>

```python
def reset_skip_tests() -> None
```

##### `reset_tf_values` <a name="reset_tf_values" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetTfValues"></a>

```python
def reset_tf_values() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_validate` <a name="reset_validate" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetValidate"></a>

```python
def reset_validate() -> None
```

##### `reset_verify` <a name="reset_verify" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetVerify"></a>

```python
def reset_verify() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetVersion"></a>

```python
def reset_version() -> None
```

##### `reset_wait` <a name="reset_wait" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.resetWait"></a>

```python
def reset_wait() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isConstruct"></a>

```python
from cdktf_cdktf_provider_helm import data_helm_template

dataHelmTemplate.DataHelmTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_helm import data_helm_template

dataHelmTemplate.DataHelmTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_helm import data_helm_template

dataHelmTemplate.DataHelmTemplate.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.postrender">postrender</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference">DataHelmTemplatePostrenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.set">set</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList">DataHelmTemplateSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setList">set_list</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList">DataHelmTemplateSetListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setSensitive">set_sensitive</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList">DataHelmTemplateSetSensitiveList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setString">set_string</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList">DataHelmTemplateSetStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.apiVersionsInput">api_versions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.atomicInput">atomic_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.chartInput">chart_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.crdsInput">crds_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.createNamespaceInput">create_namespace_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.dependencyUpdateInput">dependency_update_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.develInput">devel_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableOpenapiValidationInput">disable_openapi_validation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableWebhooksInput">disable_webhooks_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.includeCrdsInput">include_crds_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.isUpgradeInput">is_upgrade_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.keyringInput">keyring_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.kubeVersionInput">kube_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifestInput">manifest_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifestsInput">manifests_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.notesInput">notes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.passCredentialsInput">pass_credentials_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.postrenderInput">postrender_input</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.renderSubchartNotesInput">render_subchart_notes_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.replaceInput">replace_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCaFileInput">repository_ca_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCertFileInput">repository_cert_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryKeyFileInput">repository_key_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryPasswordInput">repository_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryUsernameInput">repository_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.resetValuesInput">reset_values_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.reuseValuesInput">reuse_values_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setInput">set_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setListInput">set_list_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setSensitiveInput">set_sensitive_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setStringInput">set_string_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString">DataHelmTemplateSetString</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.showOnlyInput">show_only_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipCrdsInput">skip_crds_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipTestsInput">skip_tests_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.validateInput">validate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.verifyInput">verify_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.waitInput">wait_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.apiVersions">api_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.atomic">atomic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.chart">chart</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.crds">crds</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.createNamespace">create_namespace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.dependencyUpdate">dependency_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.devel">devel</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableOpenapiValidation">disable_openapi_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableWebhooks">disable_webhooks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.includeCrds">include_crds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.isUpgrade">is_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.keyring">keyring</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.kubeVersion">kube_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifest">manifest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifests">manifests</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.notes">notes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.passCredentials">pass_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.renderSubchartNotes">render_subchart_notes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.replace">replace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCaFile">repository_ca_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCertFile">repository_cert_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryKeyFile">repository_key_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryPassword">repository_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryUsername">repository_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.resetValues">reset_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.reuseValues">reuse_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.showOnly">show_only</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipCrds">skip_crds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipTests">skip_tests</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.validate">validate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.verify">verify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.wait">wait</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `postrender`<sup>Required</sup> <a name="postrender" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.postrender"></a>

```python
postrender: DataHelmTemplatePostrenderOutputReference
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference">DataHelmTemplatePostrenderOutputReference</a>

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.set"></a>

```python
set: DataHelmTemplateSetList
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList">DataHelmTemplateSetList</a>

---

##### `set_list`<sup>Required</sup> <a name="set_list" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setList"></a>

```python
set_list: DataHelmTemplateSetListStructList
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList">DataHelmTemplateSetListStructList</a>

---

##### `set_sensitive`<sup>Required</sup> <a name="set_sensitive" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setSensitive"></a>

```python
set_sensitive: DataHelmTemplateSetSensitiveList
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList">DataHelmTemplateSetSensitiveList</a>

---

##### `set_string`<sup>Required</sup> <a name="set_string" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setString"></a>

```python
set_string: DataHelmTemplateSetStringList
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList">DataHelmTemplateSetStringList</a>

---

##### `api_versions_input`<sup>Optional</sup> <a name="api_versions_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.apiVersionsInput"></a>

```python
api_versions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `atomic_input`<sup>Optional</sup> <a name="atomic_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.atomicInput"></a>

```python
atomic_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `chart_input`<sup>Optional</sup> <a name="chart_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.chartInput"></a>

```python
chart_input: str
```

- *Type:* str

---

##### `crds_input`<sup>Optional</sup> <a name="crds_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.crdsInput"></a>

```python
crds_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `create_namespace_input`<sup>Optional</sup> <a name="create_namespace_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.createNamespaceInput"></a>

```python
create_namespace_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dependency_update_input`<sup>Optional</sup> <a name="dependency_update_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.dependencyUpdateInput"></a>

```python
dependency_update_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `devel_input`<sup>Optional</sup> <a name="devel_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.develInput"></a>

```python
devel_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_openapi_validation_input`<sup>Optional</sup> <a name="disable_openapi_validation_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableOpenapiValidationInput"></a>

```python
disable_openapi_validation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_webhooks_input`<sup>Optional</sup> <a name="disable_webhooks_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableWebhooksInput"></a>

```python
disable_webhooks_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `include_crds_input`<sup>Optional</sup> <a name="include_crds_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.includeCrdsInput"></a>

```python
include_crds_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_upgrade_input`<sup>Optional</sup> <a name="is_upgrade_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.isUpgradeInput"></a>

```python
is_upgrade_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `keyring_input`<sup>Optional</sup> <a name="keyring_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.keyringInput"></a>

```python
keyring_input: str
```

- *Type:* str

---

##### `kube_version_input`<sup>Optional</sup> <a name="kube_version_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.kubeVersionInput"></a>

```python
kube_version_input: str
```

- *Type:* str

---

##### `manifest_input`<sup>Optional</sup> <a name="manifest_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifestInput"></a>

```python
manifest_input: str
```

- *Type:* str

---

##### `manifests_input`<sup>Optional</sup> <a name="manifests_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifestsInput"></a>

```python
manifests_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `notes_input`<sup>Optional</sup> <a name="notes_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.notesInput"></a>

```python
notes_input: str
```

- *Type:* str

---

##### `pass_credentials_input`<sup>Optional</sup> <a name="pass_credentials_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.passCredentialsInput"></a>

```python
pass_credentials_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `postrender_input`<sup>Optional</sup> <a name="postrender_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.postrenderInput"></a>

```python
postrender_input: DataHelmTemplatePostrender
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a>

---

##### `render_subchart_notes_input`<sup>Optional</sup> <a name="render_subchart_notes_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.renderSubchartNotesInput"></a>

```python
render_subchart_notes_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `replace_input`<sup>Optional</sup> <a name="replace_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.replaceInput"></a>

```python
replace_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repository_ca_file_input`<sup>Optional</sup> <a name="repository_ca_file_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCaFileInput"></a>

```python
repository_ca_file_input: str
```

- *Type:* str

---

##### `repository_cert_file_input`<sup>Optional</sup> <a name="repository_cert_file_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCertFileInput"></a>

```python
repository_cert_file_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `repository_key_file_input`<sup>Optional</sup> <a name="repository_key_file_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryKeyFileInput"></a>

```python
repository_key_file_input: str
```

- *Type:* str

---

##### `repository_password_input`<sup>Optional</sup> <a name="repository_password_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryPasswordInput"></a>

```python
repository_password_input: str
```

- *Type:* str

---

##### `repository_username_input`<sup>Optional</sup> <a name="repository_username_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryUsernameInput"></a>

```python
repository_username_input: str
```

- *Type:* str

---

##### `reset_values_input`<sup>Optional</sup> <a name="reset_values_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.resetValuesInput"></a>

```python
reset_values_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reuse_values_input`<sup>Optional</sup> <a name="reuse_values_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.reuseValuesInput"></a>

```python
reuse_values_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `set_input`<sup>Optional</sup> <a name="set_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setInput"></a>

```python
set_input: typing.Union[IResolvable, typing.List[DataHelmTemplateSet]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a>]]

---

##### `set_list_input`<sup>Optional</sup> <a name="set_list_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setListInput"></a>

```python
set_list_input: typing.Union[IResolvable, typing.List[DataHelmTemplateSetListStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a>]]

---

##### `set_sensitive_input`<sup>Optional</sup> <a name="set_sensitive_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setSensitiveInput"></a>

```python
set_sensitive_input: typing.Union[IResolvable, typing.List[DataHelmTemplateSetSensitive]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a>]]

---

##### `set_string_input`<sup>Optional</sup> <a name="set_string_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.setStringInput"></a>

```python
set_string_input: typing.Union[IResolvable, typing.List[DataHelmTemplateSetString]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString">DataHelmTemplateSetString</a>]]

---

##### `show_only_input`<sup>Optional</sup> <a name="show_only_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.showOnlyInput"></a>

```python
show_only_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skip_crds_input`<sup>Optional</sup> <a name="skip_crds_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipCrdsInput"></a>

```python
skip_crds_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_tests_input`<sup>Optional</sup> <a name="skip_tests_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipTestsInput"></a>

```python
skip_tests_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `validate_input`<sup>Optional</sup> <a name="validate_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.validateInput"></a>

```python
validate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `verify_input`<sup>Optional</sup> <a name="verify_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.verifyInput"></a>

```python
verify_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `wait_input`<sup>Optional</sup> <a name="wait_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.waitInput"></a>

```python
wait_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `api_versions`<sup>Required</sup> <a name="api_versions" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.apiVersions"></a>

```python
api_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `atomic`<sup>Required</sup> <a name="atomic" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.atomic"></a>

```python
atomic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `chart`<sup>Required</sup> <a name="chart" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.chart"></a>

```python
chart: str
```

- *Type:* str

---

##### `crds`<sup>Required</sup> <a name="crds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.crds"></a>

```python
crds: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `create_namespace`<sup>Required</sup> <a name="create_namespace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.createNamespace"></a>

```python
create_namespace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dependency_update`<sup>Required</sup> <a name="dependency_update" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.dependencyUpdate"></a>

```python
dependency_update: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `devel`<sup>Required</sup> <a name="devel" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.devel"></a>

```python
devel: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_openapi_validation`<sup>Required</sup> <a name="disable_openapi_validation" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableOpenapiValidation"></a>

```python
disable_openapi_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_webhooks`<sup>Required</sup> <a name="disable_webhooks" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.disableWebhooks"></a>

```python
disable_webhooks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `include_crds`<sup>Required</sup> <a name="include_crds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.includeCrds"></a>

```python
include_crds: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_upgrade`<sup>Required</sup> <a name="is_upgrade" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.isUpgrade"></a>

```python
is_upgrade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `keyring`<sup>Required</sup> <a name="keyring" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.keyring"></a>

```python
keyring: str
```

- *Type:* str

---

##### `kube_version`<sup>Required</sup> <a name="kube_version" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.kubeVersion"></a>

```python
kube_version: str
```

- *Type:* str

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifest"></a>

```python
manifest: str
```

- *Type:* str

---

##### `manifests`<sup>Required</sup> <a name="manifests" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.manifests"></a>

```python
manifests: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.notes"></a>

```python
notes: str
```

- *Type:* str

---

##### `pass_credentials`<sup>Required</sup> <a name="pass_credentials" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.passCredentials"></a>

```python
pass_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `render_subchart_notes`<sup>Required</sup> <a name="render_subchart_notes" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.renderSubchartNotes"></a>

```python
render_subchart_notes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `replace`<sup>Required</sup> <a name="replace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.replace"></a>

```python
replace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `repository_ca_file`<sup>Required</sup> <a name="repository_ca_file" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCaFile"></a>

```python
repository_ca_file: str
```

- *Type:* str

---

##### `repository_cert_file`<sup>Required</sup> <a name="repository_cert_file" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryCertFile"></a>

```python
repository_cert_file: str
```

- *Type:* str

---

##### `repository_key_file`<sup>Required</sup> <a name="repository_key_file" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryKeyFile"></a>

```python
repository_key_file: str
```

- *Type:* str

---

##### `repository_password`<sup>Required</sup> <a name="repository_password" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryPassword"></a>

```python
repository_password: str
```

- *Type:* str

---

##### `repository_username`<sup>Required</sup> <a name="repository_username" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.repositoryUsername"></a>

```python
repository_username: str
```

- *Type:* str

---

##### `reset_values`<sup>Required</sup> <a name="reset_values" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.resetValues"></a>

```python
reset_values: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reuse_values`<sup>Required</sup> <a name="reuse_values" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.reuseValues"></a>

```python
reuse_values: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `show_only`<sup>Required</sup> <a name="show_only" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.showOnly"></a>

```python
show_only: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skip_crds`<sup>Required</sup> <a name="skip_crds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipCrds"></a>

```python
skip_crds: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_tests`<sup>Required</sup> <a name="skip_tests" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.skipTests"></a>

```python
skip_tests: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `validate`<sup>Required</sup> <a name="validate" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.validate"></a>

```python
validate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `verify`<sup>Required</sup> <a name="verify" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.verify"></a>

```python
verify: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `wait`<sup>Required</sup> <a name="wait" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.wait"></a>

```python
wait: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataHelmTemplateConfig <a name="DataHelmTemplateConfig" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import data_helm_template

dataHelmTemplate.DataHelmTemplateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  chart: str,
  name: str,
  api_versions: typing.List[str] = None,
  atomic: typing.Union[bool, IResolvable] = None,
  crds: typing.List[str] = None,
  create_namespace: typing.Union[bool, IResolvable] = None,
  dependency_update: typing.Union[bool, IResolvable] = None,
  description: str = None,
  devel: typing.Union[bool, IResolvable] = None,
  disable_openapi_validation: typing.Union[bool, IResolvable] = None,
  disable_webhooks: typing.Union[bool, IResolvable] = None,
  id: str = None,
  include_crds: typing.Union[bool, IResolvable] = None,
  is_upgrade: typing.Union[bool, IResolvable] = None,
  keyring: str = None,
  kube_version: str = None,
  manifest: str = None,
  manifests: typing.Mapping[str] = None,
  namespace: str = None,
  notes: str = None,
  pass_credentials: typing.Union[bool, IResolvable] = None,
  postrender: DataHelmTemplatePostrender = None,
  render_subchart_notes: typing.Union[bool, IResolvable] = None,
  replace: typing.Union[bool, IResolvable] = None,
  repository: str = None,
  repository_ca_file: str = None,
  repository_cert_file: str = None,
  repository_key_file: str = None,
  repository_password: str = None,
  repository_username: str = None,
  reset_values: typing.Union[bool, IResolvable] = None,
  reuse_values: typing.Union[bool, IResolvable] = None,
  set: typing.Union[IResolvable, typing.List[DataHelmTemplateSet]] = None,
  set_list: typing.Union[IResolvable, typing.List[DataHelmTemplateSetListStruct]] = None,
  set_sensitive: typing.Union[IResolvable, typing.List[DataHelmTemplateSetSensitive]] = None,
  set_string: typing.Union[IResolvable, typing.List[DataHelmTemplateSetString]] = None,
  show_only: typing.List[str] = None,
  skip_crds: typing.Union[bool, IResolvable] = None,
  skip_tests: typing.Union[bool, IResolvable] = None,
  timeout: typing.Union[int, float] = None,
  validate: typing.Union[bool, IResolvable] = None,
  values: typing.List[str] = None,
  verify: typing.Union[bool, IResolvable] = None,
  version: str = None,
  wait: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.chart">chart</a></code> | <code>str</code> | Chart name to be installed. A path may be used. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.name">name</a></code> | <code>str</code> | Release name. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.apiVersions">api_versions</a></code> | <code>typing.List[str]</code> | Kubernetes api versions used for Capabilities.APIVersions. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.atomic">atomic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.crds">crds</a></code> | <code>typing.List[str]</code> | List of rendered CRDs from the chart. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.createNamespace">create_namespace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Create the namespace if it does not exist. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.dependencyUpdate">dependency_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Run helm dependency update before installing the chart. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.description">description</a></code> | <code>str</code> | Add a custom description. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.devel">devel</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.disableOpenapiValidation">disable_openapi_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.disableWebhooks">disable_webhooks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Prevent hooks from running. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#id DataHelmTemplate#id}. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.includeCrds">include_crds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Include CRDs in the templated output. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.isUpgrade">is_upgrade</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set .Release.IsUpgrade instead of .Release.IsInstall. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.keyring">keyring</a></code> | <code>str</code> | Location of public keys used for verification. Used only if `verify` is true. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.kubeVersion">kube_version</a></code> | <code>str</code> | Kubernetes version used for Capabilities.KubeVersion. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.manifest">manifest</a></code> | <code>str</code> | Concatenated rendered chart templates. This corresponds to the output of the `helm template` command. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.manifests">manifests</a></code> | <code>typing.Mapping[str]</code> | Map of rendered chart templates indexed by the template name. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.namespace">namespace</a></code> | <code>str</code> | Namespace to install the release into. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.notes">notes</a></code> | <code>str</code> | Rendered notes if the chart contains a `NOTES.txt`. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.passCredentials">pass_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Pass credentials to all domains. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.postrender">postrender</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a></code> | postrender block. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.renderSubchartNotes">render_subchart_notes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, render subchart notes along with the parent. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.replace">replace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Re-use the given name, even if that name is already used. This is unsafe in production. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repository">repository</a></code> | <code>str</code> | Repository where to locate the requested chart. If is a URL the chart is installed without installing the repository. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryCaFile">repository_ca_file</a></code> | <code>str</code> | The Repositories CA File. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryCertFile">repository_cert_file</a></code> | <code>str</code> | The repositories cert file. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryKeyFile">repository_key_file</a></code> | <code>str</code> | The repositories cert key file. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryPassword">repository_password</a></code> | <code>str</code> | Password for HTTP basic authentication. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryUsername">repository_username</a></code> | <code>str</code> | Username for HTTP basic authentication. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.resetValues">reset_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When upgrading, reset the values to the ones built into the chart. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.reuseValues">reuse_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.set">set</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a>]]</code> | set block. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.setList">set_list</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a>]]</code> | set_list block. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.setSensitive">set_sensitive</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a>]]</code> | set_sensitive block. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.setString">set_string</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString">DataHelmTemplateSetString</a>]]</code> | set_string block. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.showOnly">show_only</a></code> | <code>typing.List[str]</code> | Only show manifests rendered from the given templates. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.skipCrds">skip_crds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, no CRDs will be installed. By default, CRDs are installed if not already present. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.skipTests">skip_tests</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, tests will not be rendered. By default, tests are rendered. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Time in seconds to wait for any individual kubernetes operation. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.validate">validate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Validate your manifests against the Kubernetes cluster you are currently pointing at. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.values">values</a></code> | <code>typing.List[str]</code> | List of values in raw yaml format to pass to helm. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.verify">verify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Verify the package before installing it. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.version">version</a></code> | <code>str</code> | Specify the exact chart version to install. If this is not specified, the latest version is installed. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.wait">wait</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Will wait until all resources are in a ready state before marking the release as successful. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `chart`<sup>Required</sup> <a name="chart" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.chart"></a>

```python
chart: str
```

- *Type:* str

Chart name to be installed. A path may be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#chart DataHelmTemplate#chart}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Release name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#name DataHelmTemplate#name}

---

##### `api_versions`<sup>Optional</sup> <a name="api_versions" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.apiVersions"></a>

```python
api_versions: typing.List[str]
```

- *Type:* typing.List[str]

Kubernetes api versions used for Capabilities.APIVersions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#api_versions DataHelmTemplate#api_versions}

---

##### `atomic`<sup>Optional</sup> <a name="atomic" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.atomic"></a>

```python
atomic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#atomic DataHelmTemplate#atomic}

---

##### `crds`<sup>Optional</sup> <a name="crds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.crds"></a>

```python
crds: typing.List[str]
```

- *Type:* typing.List[str]

List of rendered CRDs from the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#crds DataHelmTemplate#crds}

---

##### `create_namespace`<sup>Optional</sup> <a name="create_namespace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.createNamespace"></a>

```python
create_namespace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Create the namespace if it does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#create_namespace DataHelmTemplate#create_namespace}

---

##### `dependency_update`<sup>Optional</sup> <a name="dependency_update" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.dependencyUpdate"></a>

```python
dependency_update: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Run helm dependency update before installing the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#dependency_update DataHelmTemplate#dependency_update}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Add a custom description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#description DataHelmTemplate#description}

---

##### `devel`<sup>Optional</sup> <a name="devel" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.devel"></a>

```python
devel: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use chart development versions, too. Equivalent to version '>0.0.0-0'. If `version` is set, this is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#devel DataHelmTemplate#devel}

---

##### `disable_openapi_validation`<sup>Optional</sup> <a name="disable_openapi_validation" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.disableOpenapiValidation"></a>

```python
disable_openapi_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#disable_openapi_validation DataHelmTemplate#disable_openapi_validation}

---

##### `disable_webhooks`<sup>Optional</sup> <a name="disable_webhooks" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.disableWebhooks"></a>

```python
disable_webhooks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Prevent hooks from running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#disable_webhooks DataHelmTemplate#disable_webhooks}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#id DataHelmTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `include_crds`<sup>Optional</sup> <a name="include_crds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.includeCrds"></a>

```python
include_crds: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Include CRDs in the templated output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#include_crds DataHelmTemplate#include_crds}

---

##### `is_upgrade`<sup>Optional</sup> <a name="is_upgrade" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.isUpgrade"></a>

```python
is_upgrade: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set .Release.IsUpgrade instead of .Release.IsInstall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#is_upgrade DataHelmTemplate#is_upgrade}

---

##### `keyring`<sup>Optional</sup> <a name="keyring" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.keyring"></a>

```python
keyring: str
```

- *Type:* str

Location of public keys used for verification. Used only if `verify` is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#keyring DataHelmTemplate#keyring}

---

##### `kube_version`<sup>Optional</sup> <a name="kube_version" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.kubeVersion"></a>

```python
kube_version: str
```

- *Type:* str

Kubernetes version used for Capabilities.KubeVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#kube_version DataHelmTemplate#kube_version}

---

##### `manifest`<sup>Optional</sup> <a name="manifest" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.manifest"></a>

```python
manifest: str
```

- *Type:* str

Concatenated rendered chart templates. This corresponds to the output of the `helm template` command.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#manifest DataHelmTemplate#manifest}

---

##### `manifests`<sup>Optional</sup> <a name="manifests" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.manifests"></a>

```python
manifests: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of rendered chart templates indexed by the template name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#manifests DataHelmTemplate#manifests}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace to install the release into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#namespace DataHelmTemplate#namespace}

---

##### `notes`<sup>Optional</sup> <a name="notes" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.notes"></a>

```python
notes: str
```

- *Type:* str

Rendered notes if the chart contains a `NOTES.txt`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#notes DataHelmTemplate#notes}

---

##### `pass_credentials`<sup>Optional</sup> <a name="pass_credentials" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.passCredentials"></a>

```python
pass_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Pass credentials to all domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#pass_credentials DataHelmTemplate#pass_credentials}

---

##### `postrender`<sup>Optional</sup> <a name="postrender" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.postrender"></a>

```python
postrender: DataHelmTemplatePostrender
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a>

postrender block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#postrender DataHelmTemplate#postrender}

---

##### `render_subchart_notes`<sup>Optional</sup> <a name="render_subchart_notes" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.renderSubchartNotes"></a>

```python
render_subchart_notes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, render subchart notes along with the parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#render_subchart_notes DataHelmTemplate#render_subchart_notes}

---

##### `replace`<sup>Optional</sup> <a name="replace" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.replace"></a>

```python
replace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Re-use the given name, even if that name is already used. This is unsafe in production.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#replace DataHelmTemplate#replace}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

Repository where to locate the requested chart. If is a URL the chart is installed without installing the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#repository DataHelmTemplate#repository}

---

##### `repository_ca_file`<sup>Optional</sup> <a name="repository_ca_file" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryCaFile"></a>

```python
repository_ca_file: str
```

- *Type:* str

The Repositories CA File.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#repository_ca_file DataHelmTemplate#repository_ca_file}

---

##### `repository_cert_file`<sup>Optional</sup> <a name="repository_cert_file" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryCertFile"></a>

```python
repository_cert_file: str
```

- *Type:* str

The repositories cert file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#repository_cert_file DataHelmTemplate#repository_cert_file}

---

##### `repository_key_file`<sup>Optional</sup> <a name="repository_key_file" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryKeyFile"></a>

```python
repository_key_file: str
```

- *Type:* str

The repositories cert key file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#repository_key_file DataHelmTemplate#repository_key_file}

---

##### `repository_password`<sup>Optional</sup> <a name="repository_password" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryPassword"></a>

```python
repository_password: str
```

- *Type:* str

Password for HTTP basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#repository_password DataHelmTemplate#repository_password}

---

##### `repository_username`<sup>Optional</sup> <a name="repository_username" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.repositoryUsername"></a>

```python
repository_username: str
```

- *Type:* str

Username for HTTP basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#repository_username DataHelmTemplate#repository_username}

---

##### `reset_values`<sup>Optional</sup> <a name="reset_values" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.resetValues"></a>

```python
reset_values: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When upgrading, reset the values to the ones built into the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#reset_values DataHelmTemplate#reset_values}

---

##### `reuse_values`<sup>Optional</sup> <a name="reuse_values" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.reuseValues"></a>

```python
reuse_values: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#reuse_values DataHelmTemplate#reuse_values}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.set"></a>

```python
set: typing.Union[IResolvable, typing.List[DataHelmTemplateSet]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a>]]

set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#set DataHelmTemplate#set}

---

##### `set_list`<sup>Optional</sup> <a name="set_list" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.setList"></a>

```python
set_list: typing.Union[IResolvable, typing.List[DataHelmTemplateSetListStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a>]]

set_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#set_list DataHelmTemplate#set_list}

---

##### `set_sensitive`<sup>Optional</sup> <a name="set_sensitive" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.setSensitive"></a>

```python
set_sensitive: typing.Union[IResolvable, typing.List[DataHelmTemplateSetSensitive]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a>]]

set_sensitive block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#set_sensitive DataHelmTemplate#set_sensitive}

---

##### `set_string`<sup>Optional</sup> <a name="set_string" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.setString"></a>

```python
set_string: typing.Union[IResolvable, typing.List[DataHelmTemplateSetString]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString">DataHelmTemplateSetString</a>]]

set_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#set_string DataHelmTemplate#set_string}

---

##### `show_only`<sup>Optional</sup> <a name="show_only" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.showOnly"></a>

```python
show_only: typing.List[str]
```

- *Type:* typing.List[str]

Only show manifests rendered from the given templates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#show_only DataHelmTemplate#show_only}

---

##### `skip_crds`<sup>Optional</sup> <a name="skip_crds" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.skipCrds"></a>

```python
skip_crds: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, no CRDs will be installed. By default, CRDs are installed if not already present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#skip_crds DataHelmTemplate#skip_crds}

---

##### `skip_tests`<sup>Optional</sup> <a name="skip_tests" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.skipTests"></a>

```python
skip_tests: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, tests will not be rendered. By default, tests are rendered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#skip_tests DataHelmTemplate#skip_tests}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time in seconds to wait for any individual kubernetes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#timeout DataHelmTemplate#timeout}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.validate"></a>

```python
validate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Validate your manifests against the Kubernetes cluster you are currently pointing at.

This is the same validation performed on an install

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#validate DataHelmTemplate#validate}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

List of values in raw yaml format to pass to helm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#values DataHelmTemplate#values}

---

##### `verify`<sup>Optional</sup> <a name="verify" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.verify"></a>

```python
verify: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Verify the package before installing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#verify DataHelmTemplate#verify}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Specify the exact chart version to install. If this is not specified, the latest version is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#version DataHelmTemplate#version}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateConfig.property.wait"></a>

```python
wait: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Will wait until all resources are in a ready state before marking the release as successful.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#wait DataHelmTemplate#wait}

---

### DataHelmTemplatePostrender <a name="DataHelmTemplatePostrender" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import data_helm_template

dataHelmTemplate.DataHelmTemplatePostrender(
  binary_path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender.property.binaryPath">binary_path</a></code> | <code>str</code> | The command binary path. |

---

##### `binary_path`<sup>Required</sup> <a name="binary_path" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender.property.binaryPath"></a>

```python
binary_path: str
```

- *Type:* str

The command binary path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#binary_path DataHelmTemplate#binary_path}

---

### DataHelmTemplateSet <a name="DataHelmTemplateSet" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import data_helm_template

dataHelmTemplate.DataHelmTemplateSet(
  name: str,
  value: str,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#name DataHelmTemplate#name}. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#value DataHelmTemplate#value}. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#type DataHelmTemplate#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#name DataHelmTemplate#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#value DataHelmTemplate#value}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#type DataHelmTemplate#type}.

---

### DataHelmTemplateSetListStruct <a name="DataHelmTemplateSetListStruct" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import data_helm_template

dataHelmTemplate.DataHelmTemplateSetListStruct(
  name: str,
  value: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#name DataHelmTemplate#name}. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct.property.value">value</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#value DataHelmTemplate#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#name DataHelmTemplate#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct.property.value"></a>

```python
value: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#value DataHelmTemplate#value}.

---

### DataHelmTemplateSetSensitive <a name="DataHelmTemplateSetSensitive" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import data_helm_template

dataHelmTemplate.DataHelmTemplateSetSensitive(
  name: str,
  value: str,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#name DataHelmTemplate#name}. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#value DataHelmTemplate#value}. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#type DataHelmTemplate#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#name DataHelmTemplate#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#value DataHelmTemplate#value}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#type DataHelmTemplate#type}.

---

### DataHelmTemplateSetString <a name="DataHelmTemplateSetString" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import data_helm_template

dataHelmTemplate.DataHelmTemplateSetString(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#name DataHelmTemplate#name}. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#value DataHelmTemplate#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#name DataHelmTemplate#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/2.10.1/docs/data-sources/template#value DataHelmTemplate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataHelmTemplatePostrenderOutputReference <a name="DataHelmTemplatePostrenderOutputReference" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import data_helm_template

dataHelmTemplate.DataHelmTemplatePostrenderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.binaryPathInput">binary_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.binaryPath">binary_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `binary_path_input`<sup>Optional</sup> <a name="binary_path_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.binaryPathInput"></a>

```python
binary_path_input: str
```

- *Type:* str

---

##### `binary_path`<sup>Required</sup> <a name="binary_path" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.binaryPath"></a>

```python
binary_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrenderOutputReference.property.internalValue"></a>

```python
internal_value: DataHelmTemplatePostrender
```

- *Type:* <a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplatePostrender">DataHelmTemplatePostrender</a>

---


### DataHelmTemplateSetList <a name="DataHelmTemplateSetList" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import data_helm_template

dataHelmTemplate.DataHelmTemplateSetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataHelmTemplateSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataHelmTemplateSet]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a>]]

---


### DataHelmTemplateSetListStructList <a name="DataHelmTemplateSetListStructList" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import data_helm_template

dataHelmTemplate.DataHelmTemplateSetListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataHelmTemplateSetListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataHelmTemplateSetListStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a>]]

---


### DataHelmTemplateSetListStructOutputReference <a name="DataHelmTemplateSetListStructOutputReference" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import data_helm_template

dataHelmTemplate.DataHelmTemplateSetListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.valueInput">value_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.value">value</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.valueInput"></a>

```python
value_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.value"></a>

```python
value: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStructOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataHelmTemplateSetListStruct, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetListStruct">DataHelmTemplateSetListStruct</a>, cdktf.IResolvable]

---


### DataHelmTemplateSetOutputReference <a name="DataHelmTemplateSetOutputReference" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import data_helm_template

dataHelmTemplate.DataHelmTemplateSetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataHelmTemplateSet, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSet">DataHelmTemplateSet</a>, cdktf.IResolvable]

---


### DataHelmTemplateSetSensitiveList <a name="DataHelmTemplateSetSensitiveList" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import data_helm_template

dataHelmTemplate.DataHelmTemplateSetSensitiveList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataHelmTemplateSetSensitiveOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataHelmTemplateSetSensitive]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a>]]

---


### DataHelmTemplateSetSensitiveOutputReference <a name="DataHelmTemplateSetSensitiveOutputReference" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import data_helm_template

dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitiveOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataHelmTemplateSetSensitive, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetSensitive">DataHelmTemplateSetSensitive</a>, cdktf.IResolvable]

---


### DataHelmTemplateSetStringList <a name="DataHelmTemplateSetStringList" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import data_helm_template

dataHelmTemplate.DataHelmTemplateSetStringList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataHelmTemplateSetStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString">DataHelmTemplateSetString</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataHelmTemplateSetString]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString">DataHelmTemplateSetString</a>]]

---


### DataHelmTemplateSetStringOutputReference <a name="DataHelmTemplateSetStringOutputReference" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import data_helm_template

dataHelmTemplate.DataHelmTemplateSetStringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString">DataHelmTemplateSetString</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetStringOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataHelmTemplateSetString, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-helm.dataHelmTemplate.DataHelmTemplateSetString">DataHelmTemplateSetString</a>, cdktf.IResolvable]

---



