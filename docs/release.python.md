# `release` Submodule <a name="`release` Submodule" id="@cdktf/provider-helm.release"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Release <a name="Release" id="@cdktf/provider-helm.release.Release"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release helm_release}.

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.Release.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import release

release.Release(
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
  atomic: typing.Union[bool, IResolvable] = None,
  cleanup_on_fail: typing.Union[bool, IResolvable] = None,
  create_namespace: typing.Union[bool, IResolvable] = None,
  dependency_update: typing.Union[bool, IResolvable] = None,
  description: str = None,
  devel: typing.Union[bool, IResolvable] = None,
  disable_crd_hooks: typing.Union[bool, IResolvable] = None,
  disable_openapi_validation: typing.Union[bool, IResolvable] = None,
  disable_webhooks: typing.Union[bool, IResolvable] = None,
  force_update: typing.Union[bool, IResolvable] = None,
  keyring: str = None,
  lint: typing.Union[bool, IResolvable] = None,
  max_history: typing.Union[int, float] = None,
  namespace: str = None,
  pass_credentials: typing.Union[bool, IResolvable] = None,
  postrender: ReleasePostrender = None,
  recreate_pods: typing.Union[bool, IResolvable] = None,
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
  set: typing.Union[IResolvable, typing.List[ReleaseSet]] = None,
  set_list: typing.Union[IResolvable, typing.List[ReleaseSetListStruct]] = None,
  set_sensitive: typing.Union[IResolvable, typing.List[ReleaseSetSensitive]] = None,
  set_wo: typing.Union[IResolvable, typing.List[ReleaseSetWo]] = None,
  set_wo_revision: typing.Union[int, float] = None,
  skip_crds: typing.Union[bool, IResolvable] = None,
  timeout: typing.Union[int, float] = None,
  values: typing.List[str] = None,
  verify: typing.Union[bool, IResolvable] = None,
  version: str = None,
  wait: typing.Union[bool, IResolvable] = None,
  wait_for_jobs: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.chart">chart</a></code> | <code>str</code> | Chart name to be installed. A path may be used. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.name">name</a></code> | <code>str</code> | Release name. The length must not be longer than 53 characters. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.atomic">atomic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.cleanupOnFail">cleanup_on_fail</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow deletion of new resources created in this upgrade when upgrade fails. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.createNamespace">create_namespace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Create the namespace if it does not exist. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.dependencyUpdate">dependency_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Run helm dependency update before installing the chart. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.description">description</a></code> | <code>str</code> | Add a custom description. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.devel">devel</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use chart development versions, too. Equivalent to version '>0.0.0-0'. If 'version' is set, this is ignored. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.disableCrdHooks">disable_crd_hooks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Prevent CRD hooks from running, but run other hooks. See helm install --no-crd-hook. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.disableOpenapiValidation">disable_openapi_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.disableWebhooks">disable_webhooks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Prevent hooks from running. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.forceUpdate">force_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Force resource update through delete/recreate if needed. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.keyring">keyring</a></code> | <code>str</code> | Location of public keys used for verification, Used only if 'verify is true'. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.lint">lint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Run helm lint when planning. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.maxHistory">max_history</a></code> | <code>typing.Union[int, float]</code> | Limit the maximum number of revisions saved per release. Use 0 for no limit. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Namespace to install the release into. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.passCredentials">pass_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Pass credentials to all domains. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.postrender">postrender</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a></code> | Postrender command config. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.recreatePods">recreate_pods</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Perform pods restart during upgrade/rollback. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.renderSubchartNotes">render_subchart_notes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, render subchart notes along with the parent. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.replace">replace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Re-use the given name, even if that name is already used. This is unsafe in production. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.repository">repository</a></code> | <code>str</code> | Repository where to locate the requested chart. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.repositoryCaFile">repository_ca_file</a></code> | <code>str</code> | The Repositories CA file. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.repositoryCertFile">repository_cert_file</a></code> | <code>str</code> | The repositories cert file. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.repositoryKeyFile">repository_key_file</a></code> | <code>str</code> | The repositories cert key file. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.repositoryPassword">repository_password</a></code> | <code>str</code> | Password for HTTP basic authentication. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.repositoryUsername">repository_username</a></code> | <code>str</code> | Username for HTTP basic authentication. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.resetValues">reset_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When upgrading, reset the values to the ones built into the chart. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.reuseValues">reuse_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.set">set</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a>]]</code> | Custom values to be merged with the values. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.setList">set_list</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>]]</code> | Custom sensitive values to be merged with the values. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.setSensitive">set_sensitive</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>]]</code> | Custom sensitive values to be merged with the values. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.setWo">set_wo</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSetWo">ReleaseSetWo</a>]]</code> | Custom values to be merged with the values. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.setWoRevision">set_wo_revision</a></code> | <code>typing.Union[int, float]</code> | The current revision of the write-only "set_wo" attribute. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.skipCrds">skip_crds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, no CRDs will be installed. By default, CRDs are installed if not already present. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Time in seconds to wait for any individual kubernetes operation. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.values">values</a></code> | <code>typing.List[str]</code> | List of values in raw YAML format to pass to helm. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.verify">verify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Verify the package before installing it. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.version">version</a></code> | <code>str</code> | Specify the exact chart version to install. If this is not specified, the latest version is installed. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.wait">wait</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Will wait until all resources are in a ready state before marking the release as successful. |
| <code><a href="#@cdktf/provider-helm.release.Release.Initializer.parameter.waitForJobs">wait_for_jobs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If wait is enabled, will wait until all Jobs have been completed before marking the release as successful. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-helm.release.Release.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-helm.release.Release.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-helm.release.Release.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-helm.release.Release.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-helm.release.Release.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-helm.release.Release.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-helm.release.Release.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-helm.release.Release.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-helm.release.Release.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `chart`<sup>Required</sup> <a name="chart" id="@cdktf/provider-helm.release.Release.Initializer.parameter.chart"></a>

- *Type:* str

Chart name to be installed. A path may be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#chart Release#chart}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.Release.Initializer.parameter.name"></a>

- *Type:* str

Release name. The length must not be longer than 53 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#name Release#name}

---

##### `atomic`<sup>Optional</sup> <a name="atomic" id="@cdktf/provider-helm.release.Release.Initializer.parameter.atomic"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#atomic Release#atomic}

---

##### `cleanup_on_fail`<sup>Optional</sup> <a name="cleanup_on_fail" id="@cdktf/provider-helm.release.Release.Initializer.parameter.cleanupOnFail"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow deletion of new resources created in this upgrade when upgrade fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#cleanup_on_fail Release#cleanup_on_fail}

---

##### `create_namespace`<sup>Optional</sup> <a name="create_namespace" id="@cdktf/provider-helm.release.Release.Initializer.parameter.createNamespace"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Create the namespace if it does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#create_namespace Release#create_namespace}

---

##### `dependency_update`<sup>Optional</sup> <a name="dependency_update" id="@cdktf/provider-helm.release.Release.Initializer.parameter.dependencyUpdate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Run helm dependency update before installing the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#dependency_update Release#dependency_update}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-helm.release.Release.Initializer.parameter.description"></a>

- *Type:* str

Add a custom description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#description Release#description}

---

##### `devel`<sup>Optional</sup> <a name="devel" id="@cdktf/provider-helm.release.Release.Initializer.parameter.devel"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use chart development versions, too. Equivalent to version '>0.0.0-0'. If 'version' is set, this is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#devel Release#devel}

---

##### `disable_crd_hooks`<sup>Optional</sup> <a name="disable_crd_hooks" id="@cdktf/provider-helm.release.Release.Initializer.parameter.disableCrdHooks"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Prevent CRD hooks from running, but run other hooks. See helm install --no-crd-hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#disable_crd_hooks Release#disable_crd_hooks}

---

##### `disable_openapi_validation`<sup>Optional</sup> <a name="disable_openapi_validation" id="@cdktf/provider-helm.release.Release.Initializer.parameter.disableOpenapiValidation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#disable_openapi_validation Release#disable_openapi_validation}

---

##### `disable_webhooks`<sup>Optional</sup> <a name="disable_webhooks" id="@cdktf/provider-helm.release.Release.Initializer.parameter.disableWebhooks"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Prevent hooks from running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#disable_webhooks Release#disable_webhooks}

---

##### `force_update`<sup>Optional</sup> <a name="force_update" id="@cdktf/provider-helm.release.Release.Initializer.parameter.forceUpdate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Force resource update through delete/recreate if needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#force_update Release#force_update}

---

##### `keyring`<sup>Optional</sup> <a name="keyring" id="@cdktf/provider-helm.release.Release.Initializer.parameter.keyring"></a>

- *Type:* str

Location of public keys used for verification, Used only if 'verify is true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#keyring Release#keyring}

---

##### `lint`<sup>Optional</sup> <a name="lint" id="@cdktf/provider-helm.release.Release.Initializer.parameter.lint"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Run helm lint when planning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#lint Release#lint}

---

##### `max_history`<sup>Optional</sup> <a name="max_history" id="@cdktf/provider-helm.release.Release.Initializer.parameter.maxHistory"></a>

- *Type:* typing.Union[int, float]

Limit the maximum number of revisions saved per release. Use 0 for no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#max_history Release#max_history}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-helm.release.Release.Initializer.parameter.namespace"></a>

- *Type:* str

Namespace to install the release into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#namespace Release#namespace}

---

##### `pass_credentials`<sup>Optional</sup> <a name="pass_credentials" id="@cdktf/provider-helm.release.Release.Initializer.parameter.passCredentials"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Pass credentials to all domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#pass_credentials Release#pass_credentials}

---

##### `postrender`<sup>Optional</sup> <a name="postrender" id="@cdktf/provider-helm.release.Release.Initializer.parameter.postrender"></a>

- *Type:* <a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a>

Postrender command config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#postrender Release#postrender}

---

##### `recreate_pods`<sup>Optional</sup> <a name="recreate_pods" id="@cdktf/provider-helm.release.Release.Initializer.parameter.recreatePods"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Perform pods restart during upgrade/rollback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#recreate_pods Release#recreate_pods}

---

##### `render_subchart_notes`<sup>Optional</sup> <a name="render_subchart_notes" id="@cdktf/provider-helm.release.Release.Initializer.parameter.renderSubchartNotes"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, render subchart notes along with the parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#render_subchart_notes Release#render_subchart_notes}

---

##### `replace`<sup>Optional</sup> <a name="replace" id="@cdktf/provider-helm.release.Release.Initializer.parameter.replace"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Re-use the given name, even if that name is already used. This is unsafe in production.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#replace Release#replace}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-helm.release.Release.Initializer.parameter.repository"></a>

- *Type:* str

Repository where to locate the requested chart.

If it is a URL, the chart is installed without installing the repository

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#repository Release#repository}

---

##### `repository_ca_file`<sup>Optional</sup> <a name="repository_ca_file" id="@cdktf/provider-helm.release.Release.Initializer.parameter.repositoryCaFile"></a>

- *Type:* str

The Repositories CA file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#repository_ca_file Release#repository_ca_file}

---

##### `repository_cert_file`<sup>Optional</sup> <a name="repository_cert_file" id="@cdktf/provider-helm.release.Release.Initializer.parameter.repositoryCertFile"></a>

- *Type:* str

The repositories cert file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#repository_cert_file Release#repository_cert_file}

---

##### `repository_key_file`<sup>Optional</sup> <a name="repository_key_file" id="@cdktf/provider-helm.release.Release.Initializer.parameter.repositoryKeyFile"></a>

- *Type:* str

The repositories cert key file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#repository_key_file Release#repository_key_file}

---

##### `repository_password`<sup>Optional</sup> <a name="repository_password" id="@cdktf/provider-helm.release.Release.Initializer.parameter.repositoryPassword"></a>

- *Type:* str

Password for HTTP basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#repository_password Release#repository_password}

---

##### `repository_username`<sup>Optional</sup> <a name="repository_username" id="@cdktf/provider-helm.release.Release.Initializer.parameter.repositoryUsername"></a>

- *Type:* str

Username for HTTP basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#repository_username Release#repository_username}

---

##### `reset_values`<sup>Optional</sup> <a name="reset_values" id="@cdktf/provider-helm.release.Release.Initializer.parameter.resetValues"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When upgrading, reset the values to the ones built into the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#reset_values Release#reset_values}

---

##### `reuse_values`<sup>Optional</sup> <a name="reuse_values" id="@cdktf/provider-helm.release.Release.Initializer.parameter.reuseValues"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#reuse_values Release#reuse_values}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-helm.release.Release.Initializer.parameter.set"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a>]]

Custom values to be merged with the values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#set Release#set}

---

##### `set_list`<sup>Optional</sup> <a name="set_list" id="@cdktf/provider-helm.release.Release.Initializer.parameter.setList"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>]]

Custom sensitive values to be merged with the values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#set_list Release#set_list}

---

##### `set_sensitive`<sup>Optional</sup> <a name="set_sensitive" id="@cdktf/provider-helm.release.Release.Initializer.parameter.setSensitive"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>]]

Custom sensitive values to be merged with the values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#set_sensitive Release#set_sensitive}

---

##### `set_wo`<sup>Optional</sup> <a name="set_wo" id="@cdktf/provider-helm.release.Release.Initializer.parameter.setWo"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSetWo">ReleaseSetWo</a>]]

Custom values to be merged with the values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#set_wo Release#set_wo}

---

##### `set_wo_revision`<sup>Optional</sup> <a name="set_wo_revision" id="@cdktf/provider-helm.release.Release.Initializer.parameter.setWoRevision"></a>

- *Type:* typing.Union[int, float]

The current revision of the write-only "set_wo" attribute.

Incrementing this integer value will cause Terraform to update the write-only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#set_wo_revision Release#set_wo_revision}

---

##### `skip_crds`<sup>Optional</sup> <a name="skip_crds" id="@cdktf/provider-helm.release.Release.Initializer.parameter.skipCrds"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, no CRDs will be installed. By default, CRDs are installed if not already present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#skip_crds Release#skip_crds}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-helm.release.Release.Initializer.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

Time in seconds to wait for any individual kubernetes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#timeout Release#timeout}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-helm.release.Release.Initializer.parameter.values"></a>

- *Type:* typing.List[str]

List of values in raw YAML format to pass to helm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#values Release#values}

---

##### `verify`<sup>Optional</sup> <a name="verify" id="@cdktf/provider-helm.release.Release.Initializer.parameter.verify"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Verify the package before installing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#verify Release#verify}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-helm.release.Release.Initializer.parameter.version"></a>

- *Type:* str

Specify the exact chart version to install. If this is not specified, the latest version is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#version Release#version}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-helm.release.Release.Initializer.parameter.wait"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Will wait until all resources are in a ready state before marking the release as successful.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#wait Release#wait}

---

##### `wait_for_jobs`<sup>Optional</sup> <a name="wait_for_jobs" id="@cdktf/provider-helm.release.Release.Initializer.parameter.waitForJobs"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If wait is enabled, will wait until all Jobs have been completed before marking the release as successful.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#wait_for_jobs Release#wait_for_jobs}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.Release.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-helm.release.Release.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-helm.release.Release.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-helm.release.Release.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-helm.release.Release.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-helm.release.Release.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-helm.release.Release.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-helm.release.Release.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-helm.release.Release.putPostrender">put_postrender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.putSet">put_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.putSetList">put_set_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.putSetSensitive">put_set_sensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.putSetWo">put_set_wo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetAtomic">reset_atomic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetCleanupOnFail">reset_cleanup_on_fail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetCreateNamespace">reset_create_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetDependencyUpdate">reset_dependency_update</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetDevel">reset_devel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetDisableCrdHooks">reset_disable_crd_hooks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetDisableOpenapiValidation">reset_disable_openapi_validation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetDisableWebhooks">reset_disable_webhooks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetForceUpdate">reset_force_update</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetKeyring">reset_keyring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetLint">reset_lint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetMaxHistory">reset_max_history</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetPassCredentials">reset_pass_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetPostrender">reset_postrender</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRecreatePods">reset_recreate_pods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRenderSubchartNotes">reset_render_subchart_notes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetReplace">reset_replace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRepository">reset_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRepositoryCaFile">reset_repository_ca_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRepositoryCertFile">reset_repository_cert_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRepositoryKeyFile">reset_repository_key_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRepositoryPassword">reset_repository_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetRepositoryUsername">reset_repository_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetResetValues">reset_reset_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetReuseValues">reset_reuse_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetSet">reset_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetSetList">reset_set_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetSetSensitive">reset_set_sensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetSetWo">reset_set_wo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetSetWoRevision">reset_set_wo_revision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetSkipCrds">reset_skip_crds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetTfValues">reset_tf_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetVerify">reset_verify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetVersion">reset_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetWait">reset_wait</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.resetWaitForJobs">reset_wait_for_jobs</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-helm.release.Release.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-helm.release.Release.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-helm.release.Release.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.Release.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-helm.release.Release.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-helm.release.Release.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-helm.release.Release.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-helm.release.Release.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-helm.release.Release.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-helm.release.Release.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-helm.release.Release.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-helm.release.Release.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-helm.release.Release.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.Release.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-helm.release.Release.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.Release.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-helm.release.Release.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.Release.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-helm.release.Release.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.Release.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-helm.release.Release.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.Release.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-helm.release.Release.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.Release.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-helm.release.Release.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.Release.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-helm.release.Release.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.Release.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-helm.release.Release.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.Release.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-helm.release.Release.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-helm.release.Release.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-helm.release.Release.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-helm.release.Release.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-helm.release.Release.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.Release.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-helm.release.Release.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-helm.release.Release.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-helm.release.Release.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-helm.release.Release.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-helm.release.Release.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-helm.release.Release.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-helm.release.Release.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_postrender` <a name="put_postrender" id="@cdktf/provider-helm.release.Release.putPostrender"></a>

```python
def put_postrender(
  binary_path: str,
  args: typing.List[str] = None
) -> None
```

###### `binary_path`<sup>Required</sup> <a name="binary_path" id="@cdktf/provider-helm.release.Release.putPostrender.parameter.binaryPath"></a>

- *Type:* str

The common binary path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#binary_path Release#binary_path}

---

###### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-helm.release.Release.putPostrender.parameter.args"></a>

- *Type:* typing.List[str]

An argument to the post-renderer (can specify multiple).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#args Release#args}

---

##### `put_set` <a name="put_set" id="@cdktf/provider-helm.release.Release.putSet"></a>

```python
def put_set(
  value: typing.Union[IResolvable, typing.List[ReleaseSet]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.Release.putSet.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a>]]

---

##### `put_set_list` <a name="put_set_list" id="@cdktf/provider-helm.release.Release.putSetList"></a>

```python
def put_set_list(
  value: typing.Union[IResolvable, typing.List[ReleaseSetListStruct]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.Release.putSetList.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>]]

---

##### `put_set_sensitive` <a name="put_set_sensitive" id="@cdktf/provider-helm.release.Release.putSetSensitive"></a>

```python
def put_set_sensitive(
  value: typing.Union[IResolvable, typing.List[ReleaseSetSensitive]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.Release.putSetSensitive.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>]]

---

##### `put_set_wo` <a name="put_set_wo" id="@cdktf/provider-helm.release.Release.putSetWo"></a>

```python
def put_set_wo(
  value: typing.Union[IResolvable, typing.List[ReleaseSetWo]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.Release.putSetWo.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSetWo">ReleaseSetWo</a>]]

---

##### `reset_atomic` <a name="reset_atomic" id="@cdktf/provider-helm.release.Release.resetAtomic"></a>

```python
def reset_atomic() -> None
```

##### `reset_cleanup_on_fail` <a name="reset_cleanup_on_fail" id="@cdktf/provider-helm.release.Release.resetCleanupOnFail"></a>

```python
def reset_cleanup_on_fail() -> None
```

##### `reset_create_namespace` <a name="reset_create_namespace" id="@cdktf/provider-helm.release.Release.resetCreateNamespace"></a>

```python
def reset_create_namespace() -> None
```

##### `reset_dependency_update` <a name="reset_dependency_update" id="@cdktf/provider-helm.release.Release.resetDependencyUpdate"></a>

```python
def reset_dependency_update() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-helm.release.Release.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_devel` <a name="reset_devel" id="@cdktf/provider-helm.release.Release.resetDevel"></a>

```python
def reset_devel() -> None
```

##### `reset_disable_crd_hooks` <a name="reset_disable_crd_hooks" id="@cdktf/provider-helm.release.Release.resetDisableCrdHooks"></a>

```python
def reset_disable_crd_hooks() -> None
```

##### `reset_disable_openapi_validation` <a name="reset_disable_openapi_validation" id="@cdktf/provider-helm.release.Release.resetDisableOpenapiValidation"></a>

```python
def reset_disable_openapi_validation() -> None
```

##### `reset_disable_webhooks` <a name="reset_disable_webhooks" id="@cdktf/provider-helm.release.Release.resetDisableWebhooks"></a>

```python
def reset_disable_webhooks() -> None
```

##### `reset_force_update` <a name="reset_force_update" id="@cdktf/provider-helm.release.Release.resetForceUpdate"></a>

```python
def reset_force_update() -> None
```

##### `reset_keyring` <a name="reset_keyring" id="@cdktf/provider-helm.release.Release.resetKeyring"></a>

```python
def reset_keyring() -> None
```

##### `reset_lint` <a name="reset_lint" id="@cdktf/provider-helm.release.Release.resetLint"></a>

```python
def reset_lint() -> None
```

##### `reset_max_history` <a name="reset_max_history" id="@cdktf/provider-helm.release.Release.resetMaxHistory"></a>

```python
def reset_max_history() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-helm.release.Release.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_pass_credentials` <a name="reset_pass_credentials" id="@cdktf/provider-helm.release.Release.resetPassCredentials"></a>

```python
def reset_pass_credentials() -> None
```

##### `reset_postrender` <a name="reset_postrender" id="@cdktf/provider-helm.release.Release.resetPostrender"></a>

```python
def reset_postrender() -> None
```

##### `reset_recreate_pods` <a name="reset_recreate_pods" id="@cdktf/provider-helm.release.Release.resetRecreatePods"></a>

```python
def reset_recreate_pods() -> None
```

##### `reset_render_subchart_notes` <a name="reset_render_subchart_notes" id="@cdktf/provider-helm.release.Release.resetRenderSubchartNotes"></a>

```python
def reset_render_subchart_notes() -> None
```

##### `reset_replace` <a name="reset_replace" id="@cdktf/provider-helm.release.Release.resetReplace"></a>

```python
def reset_replace() -> None
```

##### `reset_repository` <a name="reset_repository" id="@cdktf/provider-helm.release.Release.resetRepository"></a>

```python
def reset_repository() -> None
```

##### `reset_repository_ca_file` <a name="reset_repository_ca_file" id="@cdktf/provider-helm.release.Release.resetRepositoryCaFile"></a>

```python
def reset_repository_ca_file() -> None
```

##### `reset_repository_cert_file` <a name="reset_repository_cert_file" id="@cdktf/provider-helm.release.Release.resetRepositoryCertFile"></a>

```python
def reset_repository_cert_file() -> None
```

##### `reset_repository_key_file` <a name="reset_repository_key_file" id="@cdktf/provider-helm.release.Release.resetRepositoryKeyFile"></a>

```python
def reset_repository_key_file() -> None
```

##### `reset_repository_password` <a name="reset_repository_password" id="@cdktf/provider-helm.release.Release.resetRepositoryPassword"></a>

```python
def reset_repository_password() -> None
```

##### `reset_repository_username` <a name="reset_repository_username" id="@cdktf/provider-helm.release.Release.resetRepositoryUsername"></a>

```python
def reset_repository_username() -> None
```

##### `reset_reset_values` <a name="reset_reset_values" id="@cdktf/provider-helm.release.Release.resetResetValues"></a>

```python
def reset_reset_values() -> None
```

##### `reset_reuse_values` <a name="reset_reuse_values" id="@cdktf/provider-helm.release.Release.resetReuseValues"></a>

```python
def reset_reuse_values() -> None
```

##### `reset_set` <a name="reset_set" id="@cdktf/provider-helm.release.Release.resetSet"></a>

```python
def reset_set() -> None
```

##### `reset_set_list` <a name="reset_set_list" id="@cdktf/provider-helm.release.Release.resetSetList"></a>

```python
def reset_set_list() -> None
```

##### `reset_set_sensitive` <a name="reset_set_sensitive" id="@cdktf/provider-helm.release.Release.resetSetSensitive"></a>

```python
def reset_set_sensitive() -> None
```

##### `reset_set_wo` <a name="reset_set_wo" id="@cdktf/provider-helm.release.Release.resetSetWo"></a>

```python
def reset_set_wo() -> None
```

##### `reset_set_wo_revision` <a name="reset_set_wo_revision" id="@cdktf/provider-helm.release.Release.resetSetWoRevision"></a>

```python
def reset_set_wo_revision() -> None
```

##### `reset_skip_crds` <a name="reset_skip_crds" id="@cdktf/provider-helm.release.Release.resetSkipCrds"></a>

```python
def reset_skip_crds() -> None
```

##### `reset_tf_values` <a name="reset_tf_values" id="@cdktf/provider-helm.release.Release.resetTfValues"></a>

```python
def reset_tf_values() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-helm.release.Release.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_verify` <a name="reset_verify" id="@cdktf/provider-helm.release.Release.resetVerify"></a>

```python
def reset_verify() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-helm.release.Release.resetVersion"></a>

```python
def reset_version() -> None
```

##### `reset_wait` <a name="reset_wait" id="@cdktf/provider-helm.release.Release.resetWait"></a>

```python
def reset_wait() -> None
```

##### `reset_wait_for_jobs` <a name="reset_wait_for_jobs" id="@cdktf/provider-helm.release.Release.resetWaitForJobs"></a>

```python
def reset_wait_for_jobs() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.Release.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-helm.release.Release.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Release resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-helm.release.Release.isConstruct"></a>

```python
from cdktf_cdktf_provider_helm import release

release.Release.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-helm.release.Release.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-helm.release.Release.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_helm import release

release.Release.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-helm.release.Release.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-helm.release.Release.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_helm import release

release.Release.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-helm.release.Release.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-helm.release.Release.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_helm import release

release.Release.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Release resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-helm.release.Release.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-helm.release.Release.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Release to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-helm.release.Release.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Release that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-helm.release.Release.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Release to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.Release.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-helm.release.Release.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.manifest">manifest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference">ReleaseMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.postrender">postrender</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference">ReleasePostrenderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.set">set</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleaseSetList">ReleaseSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.setList">set_list</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList">ReleaseSetListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.setSensitive">set_sensitive</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList">ReleaseSetSensitiveList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.setWo">set_wo</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoList">ReleaseSetWoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.atomicInput">atomic_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.chartInput">chart_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.cleanupOnFailInput">cleanup_on_fail_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.createNamespaceInput">create_namespace_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.dependencyUpdateInput">dependency_update_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.develInput">devel_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.disableCrdHooksInput">disable_crd_hooks_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.disableOpenapiValidationInput">disable_openapi_validation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.disableWebhooksInput">disable_webhooks_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.forceUpdateInput">force_update_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.keyringInput">keyring_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.lintInput">lint_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.maxHistoryInput">max_history_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.passCredentialsInput">pass_credentials_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.postrenderInput">postrender_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.recreatePodsInput">recreate_pods_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.renderSubchartNotesInput">render_subchart_notes_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.replaceInput">replace_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryCaFileInput">repository_ca_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryCertFileInput">repository_cert_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryKeyFileInput">repository_key_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryPasswordInput">repository_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryUsernameInput">repository_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.resetValuesInput">reset_values_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.reuseValuesInput">reuse_values_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.setInput">set_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.setListInput">set_list_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.setSensitiveInput">set_sensitive_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.setWoInput">set_wo_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSetWo">ReleaseSetWo</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.setWoRevisionInput">set_wo_revision_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.skipCrdsInput">skip_crds_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.verifyInput">verify_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.waitForJobsInput">wait_for_jobs_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.waitInput">wait_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.atomic">atomic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.chart">chart</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.cleanupOnFail">cleanup_on_fail</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.createNamespace">create_namespace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.dependencyUpdate">dependency_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.devel">devel</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.disableCrdHooks">disable_crd_hooks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.disableOpenapiValidation">disable_openapi_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.disableWebhooks">disable_webhooks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.forceUpdate">force_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.keyring">keyring</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.lint">lint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.maxHistory">max_history</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.passCredentials">pass_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.recreatePods">recreate_pods</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.renderSubchartNotes">render_subchart_notes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.replace">replace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryCaFile">repository_ca_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryCertFile">repository_cert_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryKeyFile">repository_key_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryPassword">repository_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.repositoryUsername">repository_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.resetValues">reset_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.reuseValues">reuse_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.setWoRevision">set_wo_revision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.skipCrds">skip_crds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.verify">verify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.wait">wait</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.Release.property.waitForJobs">wait_for_jobs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-helm.release.Release.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-helm.release.Release.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.Release.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-helm.release.Release.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-helm.release.Release.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-helm.release.Release.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-helm.release.Release.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-helm.release.Release.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-helm.release.Release.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-helm.release.Release.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-helm.release.Release.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-helm.release.Release.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-helm.release.Release.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-helm.release.Release.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-helm.release.Release.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-helm.release.Release.property.manifest"></a>

```python
manifest: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-helm.release.Release.property.metadata"></a>

```python
metadata: ReleaseMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference">ReleaseMetadataOutputReference</a>

---

##### `postrender`<sup>Required</sup> <a name="postrender" id="@cdktf/provider-helm.release.Release.property.postrender"></a>

```python
postrender: ReleasePostrenderOutputReference
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference">ReleasePostrenderOutputReference</a>

---

##### `set`<sup>Required</sup> <a name="set" id="@cdktf/provider-helm.release.Release.property.set"></a>

```python
set: ReleaseSetList
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleaseSetList">ReleaseSetList</a>

---

##### `set_list`<sup>Required</sup> <a name="set_list" id="@cdktf/provider-helm.release.Release.property.setList"></a>

```python
set_list: ReleaseSetListStructList
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleaseSetListStructList">ReleaseSetListStructList</a>

---

##### `set_sensitive`<sup>Required</sup> <a name="set_sensitive" id="@cdktf/provider-helm.release.Release.property.setSensitive"></a>

```python
set_sensitive: ReleaseSetSensitiveList
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList">ReleaseSetSensitiveList</a>

---

##### `set_wo`<sup>Required</sup> <a name="set_wo" id="@cdktf/provider-helm.release.Release.property.setWo"></a>

```python
set_wo: ReleaseSetWoList
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleaseSetWoList">ReleaseSetWoList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-helm.release.Release.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `atomic_input`<sup>Optional</sup> <a name="atomic_input" id="@cdktf/provider-helm.release.Release.property.atomicInput"></a>

```python
atomic_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `chart_input`<sup>Optional</sup> <a name="chart_input" id="@cdktf/provider-helm.release.Release.property.chartInput"></a>

```python
chart_input: str
```

- *Type:* str

---

##### `cleanup_on_fail_input`<sup>Optional</sup> <a name="cleanup_on_fail_input" id="@cdktf/provider-helm.release.Release.property.cleanupOnFailInput"></a>

```python
cleanup_on_fail_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_namespace_input`<sup>Optional</sup> <a name="create_namespace_input" id="@cdktf/provider-helm.release.Release.property.createNamespaceInput"></a>

```python
create_namespace_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dependency_update_input`<sup>Optional</sup> <a name="dependency_update_input" id="@cdktf/provider-helm.release.Release.property.dependencyUpdateInput"></a>

```python
dependency_update_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-helm.release.Release.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `devel_input`<sup>Optional</sup> <a name="devel_input" id="@cdktf/provider-helm.release.Release.property.develInput"></a>

```python
devel_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_crd_hooks_input`<sup>Optional</sup> <a name="disable_crd_hooks_input" id="@cdktf/provider-helm.release.Release.property.disableCrdHooksInput"></a>

```python
disable_crd_hooks_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_openapi_validation_input`<sup>Optional</sup> <a name="disable_openapi_validation_input" id="@cdktf/provider-helm.release.Release.property.disableOpenapiValidationInput"></a>

```python
disable_openapi_validation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_webhooks_input`<sup>Optional</sup> <a name="disable_webhooks_input" id="@cdktf/provider-helm.release.Release.property.disableWebhooksInput"></a>

```python
disable_webhooks_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_update_input`<sup>Optional</sup> <a name="force_update_input" id="@cdktf/provider-helm.release.Release.property.forceUpdateInput"></a>

```python
force_update_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `keyring_input`<sup>Optional</sup> <a name="keyring_input" id="@cdktf/provider-helm.release.Release.property.keyringInput"></a>

```python
keyring_input: str
```

- *Type:* str

---

##### `lint_input`<sup>Optional</sup> <a name="lint_input" id="@cdktf/provider-helm.release.Release.property.lintInput"></a>

```python
lint_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_history_input`<sup>Optional</sup> <a name="max_history_input" id="@cdktf/provider-helm.release.Release.property.maxHistoryInput"></a>

```python
max_history_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-helm.release.Release.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-helm.release.Release.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `pass_credentials_input`<sup>Optional</sup> <a name="pass_credentials_input" id="@cdktf/provider-helm.release.Release.property.passCredentialsInput"></a>

```python
pass_credentials_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `postrender_input`<sup>Optional</sup> <a name="postrender_input" id="@cdktf/provider-helm.release.Release.property.postrenderInput"></a>

```python
postrender_input: typing.Union[IResolvable, ReleasePostrender]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a>]

---

##### `recreate_pods_input`<sup>Optional</sup> <a name="recreate_pods_input" id="@cdktf/provider-helm.release.Release.property.recreatePodsInput"></a>

```python
recreate_pods_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `render_subchart_notes_input`<sup>Optional</sup> <a name="render_subchart_notes_input" id="@cdktf/provider-helm.release.Release.property.renderSubchartNotesInput"></a>

```python
render_subchart_notes_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `replace_input`<sup>Optional</sup> <a name="replace_input" id="@cdktf/provider-helm.release.Release.property.replaceInput"></a>

```python
replace_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repository_ca_file_input`<sup>Optional</sup> <a name="repository_ca_file_input" id="@cdktf/provider-helm.release.Release.property.repositoryCaFileInput"></a>

```python
repository_ca_file_input: str
```

- *Type:* str

---

##### `repository_cert_file_input`<sup>Optional</sup> <a name="repository_cert_file_input" id="@cdktf/provider-helm.release.Release.property.repositoryCertFileInput"></a>

```python
repository_cert_file_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-helm.release.Release.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `repository_key_file_input`<sup>Optional</sup> <a name="repository_key_file_input" id="@cdktf/provider-helm.release.Release.property.repositoryKeyFileInput"></a>

```python
repository_key_file_input: str
```

- *Type:* str

---

##### `repository_password_input`<sup>Optional</sup> <a name="repository_password_input" id="@cdktf/provider-helm.release.Release.property.repositoryPasswordInput"></a>

```python
repository_password_input: str
```

- *Type:* str

---

##### `repository_username_input`<sup>Optional</sup> <a name="repository_username_input" id="@cdktf/provider-helm.release.Release.property.repositoryUsernameInput"></a>

```python
repository_username_input: str
```

- *Type:* str

---

##### `reset_values_input`<sup>Optional</sup> <a name="reset_values_input" id="@cdktf/provider-helm.release.Release.property.resetValuesInput"></a>

```python
reset_values_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reuse_values_input`<sup>Optional</sup> <a name="reuse_values_input" id="@cdktf/provider-helm.release.Release.property.reuseValuesInput"></a>

```python
reuse_values_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `set_input`<sup>Optional</sup> <a name="set_input" id="@cdktf/provider-helm.release.Release.property.setInput"></a>

```python
set_input: typing.Union[IResolvable, typing.List[ReleaseSet]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a>]]

---

##### `set_list_input`<sup>Optional</sup> <a name="set_list_input" id="@cdktf/provider-helm.release.Release.property.setListInput"></a>

```python
set_list_input: typing.Union[IResolvable, typing.List[ReleaseSetListStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>]]

---

##### `set_sensitive_input`<sup>Optional</sup> <a name="set_sensitive_input" id="@cdktf/provider-helm.release.Release.property.setSensitiveInput"></a>

```python
set_sensitive_input: typing.Union[IResolvable, typing.List[ReleaseSetSensitive]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>]]

---

##### `set_wo_input`<sup>Optional</sup> <a name="set_wo_input" id="@cdktf/provider-helm.release.Release.property.setWoInput"></a>

```python
set_wo_input: typing.Union[IResolvable, typing.List[ReleaseSetWo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSetWo">ReleaseSetWo</a>]]

---

##### `set_wo_revision_input`<sup>Optional</sup> <a name="set_wo_revision_input" id="@cdktf/provider-helm.release.Release.property.setWoRevisionInput"></a>

```python
set_wo_revision_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `skip_crds_input`<sup>Optional</sup> <a name="skip_crds_input" id="@cdktf/provider-helm.release.Release.property.skipCrdsInput"></a>

```python
skip_crds_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-helm.release.Release.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-helm.release.Release.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `verify_input`<sup>Optional</sup> <a name="verify_input" id="@cdktf/provider-helm.release.Release.property.verifyInput"></a>

```python
verify_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-helm.release.Release.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `wait_for_jobs_input`<sup>Optional</sup> <a name="wait_for_jobs_input" id="@cdktf/provider-helm.release.Release.property.waitForJobsInput"></a>

```python
wait_for_jobs_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `wait_input`<sup>Optional</sup> <a name="wait_input" id="@cdktf/provider-helm.release.Release.property.waitInput"></a>

```python
wait_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `atomic`<sup>Required</sup> <a name="atomic" id="@cdktf/provider-helm.release.Release.property.atomic"></a>

```python
atomic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `chart`<sup>Required</sup> <a name="chart" id="@cdktf/provider-helm.release.Release.property.chart"></a>

```python
chart: str
```

- *Type:* str

---

##### `cleanup_on_fail`<sup>Required</sup> <a name="cleanup_on_fail" id="@cdktf/provider-helm.release.Release.property.cleanupOnFail"></a>

```python
cleanup_on_fail: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_namespace`<sup>Required</sup> <a name="create_namespace" id="@cdktf/provider-helm.release.Release.property.createNamespace"></a>

```python
create_namespace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dependency_update`<sup>Required</sup> <a name="dependency_update" id="@cdktf/provider-helm.release.Release.property.dependencyUpdate"></a>

```python
dependency_update: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-helm.release.Release.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `devel`<sup>Required</sup> <a name="devel" id="@cdktf/provider-helm.release.Release.property.devel"></a>

```python
devel: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_crd_hooks`<sup>Required</sup> <a name="disable_crd_hooks" id="@cdktf/provider-helm.release.Release.property.disableCrdHooks"></a>

```python
disable_crd_hooks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_openapi_validation`<sup>Required</sup> <a name="disable_openapi_validation" id="@cdktf/provider-helm.release.Release.property.disableOpenapiValidation"></a>

```python
disable_openapi_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_webhooks`<sup>Required</sup> <a name="disable_webhooks" id="@cdktf/provider-helm.release.Release.property.disableWebhooks"></a>

```python
disable_webhooks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_update`<sup>Required</sup> <a name="force_update" id="@cdktf/provider-helm.release.Release.property.forceUpdate"></a>

```python
force_update: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `keyring`<sup>Required</sup> <a name="keyring" id="@cdktf/provider-helm.release.Release.property.keyring"></a>

```python
keyring: str
```

- *Type:* str

---

##### `lint`<sup>Required</sup> <a name="lint" id="@cdktf/provider-helm.release.Release.property.lint"></a>

```python
lint: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_history`<sup>Required</sup> <a name="max_history" id="@cdktf/provider-helm.release.Release.property.maxHistory"></a>

```python
max_history: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.Release.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-helm.release.Release.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `pass_credentials`<sup>Required</sup> <a name="pass_credentials" id="@cdktf/provider-helm.release.Release.property.passCredentials"></a>

```python
pass_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `recreate_pods`<sup>Required</sup> <a name="recreate_pods" id="@cdktf/provider-helm.release.Release.property.recreatePods"></a>

```python
recreate_pods: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `render_subchart_notes`<sup>Required</sup> <a name="render_subchart_notes" id="@cdktf/provider-helm.release.Release.property.renderSubchartNotes"></a>

```python
render_subchart_notes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `replace`<sup>Required</sup> <a name="replace" id="@cdktf/provider-helm.release.Release.property.replace"></a>

```python
replace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-helm.release.Release.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `repository_ca_file`<sup>Required</sup> <a name="repository_ca_file" id="@cdktf/provider-helm.release.Release.property.repositoryCaFile"></a>

```python
repository_ca_file: str
```

- *Type:* str

---

##### `repository_cert_file`<sup>Required</sup> <a name="repository_cert_file" id="@cdktf/provider-helm.release.Release.property.repositoryCertFile"></a>

```python
repository_cert_file: str
```

- *Type:* str

---

##### `repository_key_file`<sup>Required</sup> <a name="repository_key_file" id="@cdktf/provider-helm.release.Release.property.repositoryKeyFile"></a>

```python
repository_key_file: str
```

- *Type:* str

---

##### `repository_password`<sup>Required</sup> <a name="repository_password" id="@cdktf/provider-helm.release.Release.property.repositoryPassword"></a>

```python
repository_password: str
```

- *Type:* str

---

##### `repository_username`<sup>Required</sup> <a name="repository_username" id="@cdktf/provider-helm.release.Release.property.repositoryUsername"></a>

```python
repository_username: str
```

- *Type:* str

---

##### `reset_values`<sup>Required</sup> <a name="reset_values" id="@cdktf/provider-helm.release.Release.property.resetValues"></a>

```python
reset_values: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reuse_values`<sup>Required</sup> <a name="reuse_values" id="@cdktf/provider-helm.release.Release.property.reuseValues"></a>

```python
reuse_values: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `set_wo_revision`<sup>Required</sup> <a name="set_wo_revision" id="@cdktf/provider-helm.release.Release.property.setWoRevision"></a>

```python
set_wo_revision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `skip_crds`<sup>Required</sup> <a name="skip_crds" id="@cdktf/provider-helm.release.Release.property.skipCrds"></a>

```python
skip_crds: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-helm.release.Release.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-helm.release.Release.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `verify`<sup>Required</sup> <a name="verify" id="@cdktf/provider-helm.release.Release.property.verify"></a>

```python
verify: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-helm.release.Release.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `wait`<sup>Required</sup> <a name="wait" id="@cdktf/provider-helm.release.Release.property.wait"></a>

```python
wait: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `wait_for_jobs`<sup>Required</sup> <a name="wait_for_jobs" id="@cdktf/provider-helm.release.Release.property.waitForJobs"></a>

```python
wait_for_jobs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.Release.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-helm.release.Release.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ReleaseConfig <a name="ReleaseConfig" id="@cdktf/provider-helm.release.ReleaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.release.ReleaseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import release

release.ReleaseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  chart: str,
  name: str,
  atomic: typing.Union[bool, IResolvable] = None,
  cleanup_on_fail: typing.Union[bool, IResolvable] = None,
  create_namespace: typing.Union[bool, IResolvable] = None,
  dependency_update: typing.Union[bool, IResolvable] = None,
  description: str = None,
  devel: typing.Union[bool, IResolvable] = None,
  disable_crd_hooks: typing.Union[bool, IResolvable] = None,
  disable_openapi_validation: typing.Union[bool, IResolvable] = None,
  disable_webhooks: typing.Union[bool, IResolvable] = None,
  force_update: typing.Union[bool, IResolvable] = None,
  keyring: str = None,
  lint: typing.Union[bool, IResolvable] = None,
  max_history: typing.Union[int, float] = None,
  namespace: str = None,
  pass_credentials: typing.Union[bool, IResolvable] = None,
  postrender: ReleasePostrender = None,
  recreate_pods: typing.Union[bool, IResolvable] = None,
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
  set: typing.Union[IResolvable, typing.List[ReleaseSet]] = None,
  set_list: typing.Union[IResolvable, typing.List[ReleaseSetListStruct]] = None,
  set_sensitive: typing.Union[IResolvable, typing.List[ReleaseSetSensitive]] = None,
  set_wo: typing.Union[IResolvable, typing.List[ReleaseSetWo]] = None,
  set_wo_revision: typing.Union[int, float] = None,
  skip_crds: typing.Union[bool, IResolvable] = None,
  timeout: typing.Union[int, float] = None,
  values: typing.List[str] = None,
  verify: typing.Union[bool, IResolvable] = None,
  version: str = None,
  wait: typing.Union[bool, IResolvable] = None,
  wait_for_jobs: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.chart">chart</a></code> | <code>str</code> | Chart name to be installed. A path may be used. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.name">name</a></code> | <code>str</code> | Release name. The length must not be longer than 53 characters. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.atomic">atomic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.cleanupOnFail">cleanup_on_fail</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow deletion of new resources created in this upgrade when upgrade fails. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.createNamespace">create_namespace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Create the namespace if it does not exist. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.dependencyUpdate">dependency_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Run helm dependency update before installing the chart. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.description">description</a></code> | <code>str</code> | Add a custom description. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.devel">devel</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use chart development versions, too. Equivalent to version '>0.0.0-0'. If 'version' is set, this is ignored. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.disableCrdHooks">disable_crd_hooks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Prevent CRD hooks from running, but run other hooks. See helm install --no-crd-hook. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.disableOpenapiValidation">disable_openapi_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.disableWebhooks">disable_webhooks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Prevent hooks from running. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.forceUpdate">force_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Force resource update through delete/recreate if needed. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.keyring">keyring</a></code> | <code>str</code> | Location of public keys used for verification, Used only if 'verify is true'. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.lint">lint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Run helm lint when planning. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.maxHistory">max_history</a></code> | <code>typing.Union[int, float]</code> | Limit the maximum number of revisions saved per release. Use 0 for no limit. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.namespace">namespace</a></code> | <code>str</code> | Namespace to install the release into. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.passCredentials">pass_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Pass credentials to all domains. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.postrender">postrender</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a></code> | Postrender command config. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.recreatePods">recreate_pods</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Perform pods restart during upgrade/rollback. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.renderSubchartNotes">render_subchart_notes</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, render subchart notes along with the parent. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.replace">replace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Re-use the given name, even if that name is already used. This is unsafe in production. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.repository">repository</a></code> | <code>str</code> | Repository where to locate the requested chart. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.repositoryCaFile">repository_ca_file</a></code> | <code>str</code> | The Repositories CA file. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.repositoryCertFile">repository_cert_file</a></code> | <code>str</code> | The repositories cert file. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.repositoryKeyFile">repository_key_file</a></code> | <code>str</code> | The repositories cert key file. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.repositoryPassword">repository_password</a></code> | <code>str</code> | Password for HTTP basic authentication. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.repositoryUsername">repository_username</a></code> | <code>str</code> | Username for HTTP basic authentication. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.resetValues">reset_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When upgrading, reset the values to the ones built into the chart. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.reuseValues">reuse_values</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.set">set</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a>]]</code> | Custom values to be merged with the values. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.setList">set_list</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>]]</code> | Custom sensitive values to be merged with the values. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.setSensitive">set_sensitive</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>]]</code> | Custom sensitive values to be merged with the values. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.setWo">set_wo</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSetWo">ReleaseSetWo</a>]]</code> | Custom values to be merged with the values. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.setWoRevision">set_wo_revision</a></code> | <code>typing.Union[int, float]</code> | The current revision of the write-only "set_wo" attribute. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.skipCrds">skip_crds</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, no CRDs will be installed. By default, CRDs are installed if not already present. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Time in seconds to wait for any individual kubernetes operation. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.values">values</a></code> | <code>typing.List[str]</code> | List of values in raw YAML format to pass to helm. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.verify">verify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Verify the package before installing it. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.version">version</a></code> | <code>str</code> | Specify the exact chart version to install. If this is not specified, the latest version is installed. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.wait">wait</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Will wait until all resources are in a ready state before marking the release as successful. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseConfig.property.waitForJobs">wait_for_jobs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If wait is enabled, will wait until all Jobs have been completed before marking the release as successful. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-helm.release.ReleaseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-helm.release.ReleaseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-helm.release.ReleaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-helm.release.ReleaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-helm.release.ReleaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-helm.release.ReleaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-helm.release.ReleaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `chart`<sup>Required</sup> <a name="chart" id="@cdktf/provider-helm.release.ReleaseConfig.property.chart"></a>

```python
chart: str
```

- *Type:* str

Chart name to be installed. A path may be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#chart Release#chart}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.ReleaseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Release name. The length must not be longer than 53 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#name Release#name}

---

##### `atomic`<sup>Optional</sup> <a name="atomic" id="@cdktf/provider-helm.release.ReleaseConfig.property.atomic"></a>

```python
atomic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, installation process purges chart on fail. The wait flag will be set automatically if atomic is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#atomic Release#atomic}

---

##### `cleanup_on_fail`<sup>Optional</sup> <a name="cleanup_on_fail" id="@cdktf/provider-helm.release.ReleaseConfig.property.cleanupOnFail"></a>

```python
cleanup_on_fail: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow deletion of new resources created in this upgrade when upgrade fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#cleanup_on_fail Release#cleanup_on_fail}

---

##### `create_namespace`<sup>Optional</sup> <a name="create_namespace" id="@cdktf/provider-helm.release.ReleaseConfig.property.createNamespace"></a>

```python
create_namespace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Create the namespace if it does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#create_namespace Release#create_namespace}

---

##### `dependency_update`<sup>Optional</sup> <a name="dependency_update" id="@cdktf/provider-helm.release.ReleaseConfig.property.dependencyUpdate"></a>

```python
dependency_update: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Run helm dependency update before installing the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#dependency_update Release#dependency_update}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-helm.release.ReleaseConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Add a custom description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#description Release#description}

---

##### `devel`<sup>Optional</sup> <a name="devel" id="@cdktf/provider-helm.release.ReleaseConfig.property.devel"></a>

```python
devel: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use chart development versions, too. Equivalent to version '>0.0.0-0'. If 'version' is set, this is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#devel Release#devel}

---

##### `disable_crd_hooks`<sup>Optional</sup> <a name="disable_crd_hooks" id="@cdktf/provider-helm.release.ReleaseConfig.property.disableCrdHooks"></a>

```python
disable_crd_hooks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Prevent CRD hooks from running, but run other hooks. See helm install --no-crd-hook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#disable_crd_hooks Release#disable_crd_hooks}

---

##### `disable_openapi_validation`<sup>Optional</sup> <a name="disable_openapi_validation" id="@cdktf/provider-helm.release.ReleaseConfig.property.disableOpenapiValidation"></a>

```python
disable_openapi_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, the installation process will not validate rendered templates against the Kubernetes OpenAPI Schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#disable_openapi_validation Release#disable_openapi_validation}

---

##### `disable_webhooks`<sup>Optional</sup> <a name="disable_webhooks" id="@cdktf/provider-helm.release.ReleaseConfig.property.disableWebhooks"></a>

```python
disable_webhooks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Prevent hooks from running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#disable_webhooks Release#disable_webhooks}

---

##### `force_update`<sup>Optional</sup> <a name="force_update" id="@cdktf/provider-helm.release.ReleaseConfig.property.forceUpdate"></a>

```python
force_update: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Force resource update through delete/recreate if needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#force_update Release#force_update}

---

##### `keyring`<sup>Optional</sup> <a name="keyring" id="@cdktf/provider-helm.release.ReleaseConfig.property.keyring"></a>

```python
keyring: str
```

- *Type:* str

Location of public keys used for verification, Used only if 'verify is true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#keyring Release#keyring}

---

##### `lint`<sup>Optional</sup> <a name="lint" id="@cdktf/provider-helm.release.ReleaseConfig.property.lint"></a>

```python
lint: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Run helm lint when planning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#lint Release#lint}

---

##### `max_history`<sup>Optional</sup> <a name="max_history" id="@cdktf/provider-helm.release.ReleaseConfig.property.maxHistory"></a>

```python
max_history: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Limit the maximum number of revisions saved per release. Use 0 for no limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#max_history Release#max_history}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-helm.release.ReleaseConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace to install the release into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#namespace Release#namespace}

---

##### `pass_credentials`<sup>Optional</sup> <a name="pass_credentials" id="@cdktf/provider-helm.release.ReleaseConfig.property.passCredentials"></a>

```python
pass_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Pass credentials to all domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#pass_credentials Release#pass_credentials}

---

##### `postrender`<sup>Optional</sup> <a name="postrender" id="@cdktf/provider-helm.release.ReleaseConfig.property.postrender"></a>

```python
postrender: ReleasePostrender
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a>

Postrender command config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#postrender Release#postrender}

---

##### `recreate_pods`<sup>Optional</sup> <a name="recreate_pods" id="@cdktf/provider-helm.release.ReleaseConfig.property.recreatePods"></a>

```python
recreate_pods: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Perform pods restart during upgrade/rollback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#recreate_pods Release#recreate_pods}

---

##### `render_subchart_notes`<sup>Optional</sup> <a name="render_subchart_notes" id="@cdktf/provider-helm.release.ReleaseConfig.property.renderSubchartNotes"></a>

```python
render_subchart_notes: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, render subchart notes along with the parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#render_subchart_notes Release#render_subchart_notes}

---

##### `replace`<sup>Optional</sup> <a name="replace" id="@cdktf/provider-helm.release.ReleaseConfig.property.replace"></a>

```python
replace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Re-use the given name, even if that name is already used. This is unsafe in production.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#replace Release#replace}

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@cdktf/provider-helm.release.ReleaseConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

Repository where to locate the requested chart.

If it is a URL, the chart is installed without installing the repository

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#repository Release#repository}

---

##### `repository_ca_file`<sup>Optional</sup> <a name="repository_ca_file" id="@cdktf/provider-helm.release.ReleaseConfig.property.repositoryCaFile"></a>

```python
repository_ca_file: str
```

- *Type:* str

The Repositories CA file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#repository_ca_file Release#repository_ca_file}

---

##### `repository_cert_file`<sup>Optional</sup> <a name="repository_cert_file" id="@cdktf/provider-helm.release.ReleaseConfig.property.repositoryCertFile"></a>

```python
repository_cert_file: str
```

- *Type:* str

The repositories cert file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#repository_cert_file Release#repository_cert_file}

---

##### `repository_key_file`<sup>Optional</sup> <a name="repository_key_file" id="@cdktf/provider-helm.release.ReleaseConfig.property.repositoryKeyFile"></a>

```python
repository_key_file: str
```

- *Type:* str

The repositories cert key file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#repository_key_file Release#repository_key_file}

---

##### `repository_password`<sup>Optional</sup> <a name="repository_password" id="@cdktf/provider-helm.release.ReleaseConfig.property.repositoryPassword"></a>

```python
repository_password: str
```

- *Type:* str

Password for HTTP basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#repository_password Release#repository_password}

---

##### `repository_username`<sup>Optional</sup> <a name="repository_username" id="@cdktf/provider-helm.release.ReleaseConfig.property.repositoryUsername"></a>

```python
repository_username: str
```

- *Type:* str

Username for HTTP basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#repository_username Release#repository_username}

---

##### `reset_values`<sup>Optional</sup> <a name="reset_values" id="@cdktf/provider-helm.release.ReleaseConfig.property.resetValues"></a>

```python
reset_values: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When upgrading, reset the values to the ones built into the chart.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#reset_values Release#reset_values}

---

##### `reuse_values`<sup>Optional</sup> <a name="reuse_values" id="@cdktf/provider-helm.release.ReleaseConfig.property.reuseValues"></a>

```python
reuse_values: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When upgrading, reuse the last release's values and merge in any overrides. If 'reset_values' is specified, this is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#reuse_values Release#reuse_values}

---

##### `set`<sup>Optional</sup> <a name="set" id="@cdktf/provider-helm.release.ReleaseConfig.property.set"></a>

```python
set: typing.Union[IResolvable, typing.List[ReleaseSet]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a>]]

Custom values to be merged with the values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#set Release#set}

---

##### `set_list`<sup>Optional</sup> <a name="set_list" id="@cdktf/provider-helm.release.ReleaseConfig.property.setList"></a>

```python
set_list: typing.Union[IResolvable, typing.List[ReleaseSetListStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>]]

Custom sensitive values to be merged with the values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#set_list Release#set_list}

---

##### `set_sensitive`<sup>Optional</sup> <a name="set_sensitive" id="@cdktf/provider-helm.release.ReleaseConfig.property.setSensitive"></a>

```python
set_sensitive: typing.Union[IResolvable, typing.List[ReleaseSetSensitive]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>]]

Custom sensitive values to be merged with the values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#set_sensitive Release#set_sensitive}

---

##### `set_wo`<sup>Optional</sup> <a name="set_wo" id="@cdktf/provider-helm.release.ReleaseConfig.property.setWo"></a>

```python
set_wo: typing.Union[IResolvable, typing.List[ReleaseSetWo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSetWo">ReleaseSetWo</a>]]

Custom values to be merged with the values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#set_wo Release#set_wo}

---

##### `set_wo_revision`<sup>Optional</sup> <a name="set_wo_revision" id="@cdktf/provider-helm.release.ReleaseConfig.property.setWoRevision"></a>

```python
set_wo_revision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The current revision of the write-only "set_wo" attribute.

Incrementing this integer value will cause Terraform to update the write-only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#set_wo_revision Release#set_wo_revision}

---

##### `skip_crds`<sup>Optional</sup> <a name="skip_crds" id="@cdktf/provider-helm.release.ReleaseConfig.property.skipCrds"></a>

```python
skip_crds: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, no CRDs will be installed. By default, CRDs are installed if not already present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#skip_crds Release#skip_crds}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-helm.release.ReleaseConfig.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Time in seconds to wait for any individual kubernetes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#timeout Release#timeout}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-helm.release.ReleaseConfig.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

List of values in raw YAML format to pass to helm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#values Release#values}

---

##### `verify`<sup>Optional</sup> <a name="verify" id="@cdktf/provider-helm.release.ReleaseConfig.property.verify"></a>

```python
verify: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Verify the package before installing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#verify Release#verify}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-helm.release.ReleaseConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Specify the exact chart version to install. If this is not specified, the latest version is installed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#version Release#version}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-helm.release.ReleaseConfig.property.wait"></a>

```python
wait: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Will wait until all resources are in a ready state before marking the release as successful.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#wait Release#wait}

---

##### `wait_for_jobs`<sup>Optional</sup> <a name="wait_for_jobs" id="@cdktf/provider-helm.release.ReleaseConfig.property.waitForJobs"></a>

```python
wait_for_jobs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If wait is enabled, will wait until all Jobs have been completed before marking the release as successful.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#wait_for_jobs Release#wait_for_jobs}

---

### ReleaseMetadata <a name="ReleaseMetadata" id="@cdktf/provider-helm.release.ReleaseMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.release.ReleaseMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import release

release.ReleaseMetadata()
```


### ReleasePostrender <a name="ReleasePostrender" id="@cdktf/provider-helm.release.ReleasePostrender"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.release.ReleasePostrender.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import release

release.ReleasePostrender(
  binary_path: str,
  args: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrender.property.binaryPath">binary_path</a></code> | <code>str</code> | The common binary path. |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrender.property.args">args</a></code> | <code>typing.List[str]</code> | An argument to the post-renderer (can specify multiple). |

---

##### `binary_path`<sup>Required</sup> <a name="binary_path" id="@cdktf/provider-helm.release.ReleasePostrender.property.binaryPath"></a>

```python
binary_path: str
```

- *Type:* str

The common binary path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#binary_path Release#binary_path}

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-helm.release.ReleasePostrender.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

An argument to the post-renderer (can specify multiple).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#args Release#args}

---

### ReleaseSet <a name="ReleaseSet" id="@cdktf/provider-helm.release.ReleaseSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.release.ReleaseSet.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import release

release.ReleaseSet(
  name: str,
  type: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSet.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#name Release#name}. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSet.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#type Release#type}. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSet.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#value Release#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.ReleaseSet.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#name Release#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-helm.release.ReleaseSet.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#type Release#type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-helm.release.ReleaseSet.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#value Release#value}.

---

### ReleaseSetListStruct <a name="ReleaseSetListStruct" id="@cdktf/provider-helm.release.ReleaseSetListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.release.ReleaseSetListStruct.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import release

release.ReleaseSetListStruct(
  name: str,
  value: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStruct.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#name Release#name}. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStruct.property.value">value</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#value Release#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.ReleaseSetListStruct.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#name Release#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.ReleaseSetListStruct.property.value"></a>

```python
value: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#value Release#value}.

---

### ReleaseSetSensitive <a name="ReleaseSetSensitive" id="@cdktf/provider-helm.release.ReleaseSetSensitive"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.release.ReleaseSetSensitive.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import release

release.ReleaseSetSensitive(
  name: str,
  value: str,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitive.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#name Release#name}. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitive.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#value Release#value}. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitive.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#type Release#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.ReleaseSetSensitive.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#name Release#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.ReleaseSetSensitive.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#value Release#value}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-helm.release.ReleaseSetSensitive.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#type Release#type}.

---

### ReleaseSetWo <a name="ReleaseSetWo" id="@cdktf/provider-helm.release.ReleaseSetWo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-helm.release.ReleaseSetWo.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import release

release.ReleaseSetWo(
  name: str,
  value: str,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWo.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#name Release#name}. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWo.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#value Release#value}. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWo.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#type Release#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.ReleaseSetWo.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#name Release#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.ReleaseSetWo.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#value Release#value}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-helm.release.ReleaseSetWo.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/helm/3.0.2/docs/resources/release#type Release#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ReleaseMetadataOutputReference <a name="ReleaseMetadataOutputReference" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import release

release.ReleaseMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.appVersion">app_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.chart">chart</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.firstDeployed">first_deployed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.lastDeployed">last_deployed</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.notes">notes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.revision">revision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.values">values</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-helm.release.ReleaseMetadata">ReleaseMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_version`<sup>Required</sup> <a name="app_version" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.appVersion"></a>

```python
app_version: str
```

- *Type:* str

---

##### `chart`<sup>Required</sup> <a name="chart" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.chart"></a>

```python
chart: str
```

- *Type:* str

---

##### `first_deployed`<sup>Required</sup> <a name="first_deployed" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.firstDeployed"></a>

```python
first_deployed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_deployed`<sup>Required</sup> <a name="last_deployed" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.lastDeployed"></a>

```python
last_deployed: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `notes`<sup>Required</sup> <a name="notes" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.notes"></a>

```python
notes: str
```

- *Type:* str

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.revision"></a>

```python
revision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.values"></a>

```python
values: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-helm.release.ReleaseMetadataOutputReference.property.internalValue"></a>

```python
internal_value: ReleaseMetadata
```

- *Type:* <a href="#@cdktf/provider-helm.release.ReleaseMetadata">ReleaseMetadata</a>

---


### ReleasePostrenderOutputReference <a name="ReleasePostrenderOutputReference" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import release

release.ReleasePostrenderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.resetArgs">reset_args</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_args` <a name="reset_args" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.resetArgs"></a>

```python
def reset_args() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.argsInput">args_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.binaryPathInput">binary_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.args">args</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.binaryPath">binary_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `args_input`<sup>Optional</sup> <a name="args_input" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.argsInput"></a>

```python
args_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `binary_path_input`<sup>Optional</sup> <a name="binary_path_input" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.binaryPathInput"></a>

```python
binary_path_input: str
```

- *Type:* str

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.args"></a>

```python
args: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `binary_path`<sup>Required</sup> <a name="binary_path" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.binaryPath"></a>

```python
binary_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-helm.release.ReleasePostrenderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ReleasePostrender]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-helm.release.ReleasePostrender">ReleasePostrender</a>]

---


### ReleaseSetList <a name="ReleaseSetList" id="@cdktf/provider-helm.release.ReleaseSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseSetList.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import release

release.ReleaseSetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-helm.release.ReleaseSetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-helm.release.ReleaseSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-helm.release.ReleaseSetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-helm.release.ReleaseSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-helm.release.ReleaseSetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.release.ReleaseSetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseSetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-helm.release.ReleaseSetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-helm.release.ReleaseSetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ReleaseSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-helm.release.ReleaseSetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-helm.release.ReleaseSetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.ReleaseSetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-helm.release.ReleaseSetList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ReleaseSet]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a>]]

---


### ReleaseSetListStructList <a name="ReleaseSetListStructList" id="@cdktf/provider-helm.release.ReleaseSetListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseSetListStructList.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import release

release.ReleaseSetListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-helm.release.ReleaseSetListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-helm.release.ReleaseSetListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-helm.release.ReleaseSetListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-helm.release.ReleaseSetListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-helm.release.ReleaseSetListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.release.ReleaseSetListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseSetListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-helm.release.ReleaseSetListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-helm.release.ReleaseSetListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ReleaseSetListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-helm.release.ReleaseSetListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-helm.release.ReleaseSetListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.ReleaseSetListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-helm.release.ReleaseSetListStructList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ReleaseSetListStruct]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>]]

---


### ReleaseSetListStructOutputReference <a name="ReleaseSetListStructOutputReference" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import release

release.ReleaseSetListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.valueInput">value_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.value">value</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.valueInput"></a>

```python
value_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.value"></a>

```python
value: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-helm.release.ReleaseSetListStructOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ReleaseSetListStruct]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-helm.release.ReleaseSetListStruct">ReleaseSetListStruct</a>]

---


### ReleaseSetOutputReference <a name="ReleaseSetOutputReference" id="@cdktf/provider-helm.release.ReleaseSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import release

release.ReleaseSetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-helm.release.ReleaseSetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ReleaseSet]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-helm.release.ReleaseSet">ReleaseSet</a>]

---


### ReleaseSetSensitiveList <a name="ReleaseSetSensitiveList" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import release

release.ReleaseSetSensitiveList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ReleaseSetSensitiveOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-helm.release.ReleaseSetSensitiveList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ReleaseSetSensitive]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>]]

---


### ReleaseSetSensitiveOutputReference <a name="ReleaseSetSensitiveOutputReference" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import release

release.ReleaseSetSensitiveOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-helm.release.ReleaseSetSensitiveOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ReleaseSetSensitive]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-helm.release.ReleaseSetSensitive">ReleaseSetSensitive</a>]

---


### ReleaseSetWoList <a name="ReleaseSetWoList" id="@cdktf/provider-helm.release.ReleaseSetWoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseSetWoList.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import release

release.ReleaseSetWoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-helm.release.ReleaseSetWoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetWoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-helm.release.ReleaseSetWoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-helm.release.ReleaseSetWoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-helm.release.ReleaseSetWoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-helm.release.ReleaseSetWoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.release.ReleaseSetWoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseSetWoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-helm.release.ReleaseSetWoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-helm.release.ReleaseSetWoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ReleaseSetWoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-helm.release.ReleaseSetWoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSetWo">ReleaseSetWo</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-helm.release.ReleaseSetWoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.ReleaseSetWoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-helm.release.ReleaseSetWoList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ReleaseSetWo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-helm.release.ReleaseSetWo">ReleaseSetWo</a>]]

---


### ReleaseSetWoOutputReference <a name="ReleaseSetWoOutputReference" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_helm import release

release.ReleaseSetWoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-helm.release.ReleaseSetWoOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-helm.release.ReleaseSetWo">ReleaseSetWo</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-helm.release.ReleaseSetWoOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ReleaseSetWo]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-helm.release.ReleaseSetWo">ReleaseSetWo</a>]

---



