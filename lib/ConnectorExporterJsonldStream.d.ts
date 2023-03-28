import { Semanticable } from "@virtual-assembly/semantizer";
import IConnectorExporter from "./IConnectorExporter";
import { ContextDefinition } from "jsonld";
import IConnectorExporterOptions from "./IConnectorExporterOptions";
export default class ConnectorExporterJsonldStream implements IConnectorExporter {
    private context?;
    private outputContext?;
    constructor(context?: ContextDefinition, outputContext?: any);
    export(semanticObjets: Array<Semanticable>, options?: IConnectorExporterOptions): Promise<string>;
}
//# sourceMappingURL=ConnectorExporterJsonldStream.d.ts.map