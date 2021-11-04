const { CdktfProviderProject } = require('@cdktf/provider-project');
const project = new CdktfProviderProject({
  terraformProvider: "helm@~> 2.3",
  cdktfVersion: '^0.7',
  constructsVersion: "^10.0.0",
  minNodeVersion: "12.19.0",
  jsiiVersion: "1.37.0",
});

project.synth();
