import { app } from "../../../scripts/app.js";

app.registerExtension({
	name: "GPT_SOVITS.alertMSG",
	async beforeRegisterNodeDef(nodeType, nodeData, app) {
		if (nodeData?.name == "GPT_SOVITS_FT") {
			nodeType.prototype.onExecuted = function (data) {
				// alert("Success!you can find weights in:\n" + data.finetune[0] + "\n" + data.finetune[1] + "\n Now you can tts or inference");
				let msg = "Success! you can find weights in:\n" + data.finetune[0] + "\n" + data.finetune[1] + "\n Now you can click refresh to use tts and inference"
				alert(msg)
			}
		}
	},
});