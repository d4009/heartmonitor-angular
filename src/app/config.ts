import {AppConfig} from "./app-config.interface";

export const SERVER_CONFIG: AppConfig = {
    jaxwsApiEndpoint: 'http://192.168.1.122:8080',
    influxdbApiEndpoint: 'http://192.168.1.122:8086',
    influxdbToken: 'Basic YWRtaW46MQ==',
    influxdbName: 'heartbeat'
}