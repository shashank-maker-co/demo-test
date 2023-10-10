import { expect, Locator, Page, request } from "@playwright/test";
import { apiDetails } from "../test-data/apiDetails";
import { Helper } from "./helper";

export class CommonFunction {
    readonly helper: Helper;

    async resetBaseConfigAPI({ request }) {
        let targetURL;
        if (
            process.env.ENVIRONMENT_NAME === "preview" ||
            process.env.ENVIRONMENT_NAME === "production"
        ) {
            targetURL = await apiDetails.editor_api.url;
        } else {
            targetURL = apiDetails.apimakerco.url;
        }
        console.log("AAAA" + `${targetURL}${apiDetails.resetApiEndpoint.replace(
            "<param>",
            "8q20ktlbn6"
        )
            }`);

        const newIssue = await request.post(
            `${targetURL}${apiDetails.resetApiEndpoint.replace(
                "<param>",
                "8q20ktlbn6"
            )}`,
            {
                headers: {
                    authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiJieklMamRJWmIiLCJ3cml0ZUFjY2VzcyI6dHJ1ZSwiaWF0IjoxNjgxNDMyNjg5LCJleHAiOjE3MTI5OTI2ODl9.vFsMHQLlLU6Js9OQjuZ-oAi-QDHtI81rWt8yhdJ-VmE",
                },
                data: {},
            }
        );
        console.log(newIssue)
    }



    async getPostIDWithIndex(selector: string, attribute: string, index: string) {
        return await this.helper.getAttributeValue(selector[index], attribute);
    }
    async getCurrentDateTime() {
        var today = new Date();
        var utcYear = today.getUTCFullYear();
        var utcMonth = today.getUTCMonth() + 1;
        var utcDate = today.getUTCDate();
        var utcHours = today.getUTCHours();
        var utcMinutes = today.getUTCMinutes();
        var utcSeconds = today.getUTCSeconds();
        var paddedMonth = utcMonth.toString().padStart(2, '0');
        var paddedDate = utcDate.toString().padStart(2, '0');
        var paddedMinutes = utcMinutes.toString().padStart(2, '0');
        var paddedSeconds = utcSeconds.toString().padStart(2, '0');
        var date = utcYear + "-" + paddedMonth + "-" + paddedDate;
        var time = utcHours + ":" + paddedMinutes + ":" + paddedSeconds;
        return date + "_GMT" + time;
    }

    async duplicateAConfigThoughAPI({ request }, configIdToCopy: any) {
        let currentDateTime = await this.getCurrentDateTime();
        let targetURL
        if (
            process.env.ENVIRONMENT_NAME === "preview" ||
            process.env.ENVIRONMENT_NAME === "production"
        ) {
            targetURL = await apiDetails.editor_api.url;
        } else {
            targetURL = await apiDetails.editor_api.url;
        }
        let createConfigResponse = await request.post(
            `${targetURL}${apiDetails.duplicateConfigEndpoint.replace(
                "<param1>",
                await configIdToCopy
            ).replace(
                "<param2>",
                currentDateTime
            )}`,
            {
                headers: {
                    accept: "application/json",
                    authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiJieklMamRJWmIiLCJ3cml0ZUFjY2VzcyI6dHJ1ZSwiaWF0IjoxNjgxNDMyNjg5LCJleHAiOjE3MTI5OTI2ODl9.vFsMHQLlLU6Js9OQjuZ-oAi-QDHtI81rWt8yhdJ-VmE",
                },
                data: {},
            }
        );
        let createConfigResponseBody = await createConfigResponse.json();
        let createConfigID = await createConfigResponseBody.id;
        return createConfigID
    }

    async deleteConfigThoughAPI(configID: any, { request }) {
        let targetURL
        if (
            process.env.ENVIRONMENT_NAME === "preview" ||
            process.env.ENVIRONMENT_NAME === "production"
        ) {
            targetURL = await apiDetails.editor_api.url;
        } else {
            targetURL = await apiDetails.editor_api.url;
        }
        await request.delete(`${targetURL}${apiDetails.deleteConfigEndpoint.replace(
            "<param>",
            await configID
        )}`, {
            headers: {
                accept: "application/json",
                authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiJieklMamRJWmIiLCJ3cml0ZUFjY2VzcyI6dHJ1ZSwiaWF0IjoxNjgxNDMyNjg5LCJleHAiOjE3MTI5OTI2ODl9.vFsMHQLlLU6Js9OQjuZ-oAi-QDHtI81rWt8yhdJ-VmE",
            },
            data: {}
        });
    }

    async publishConfigThoughAPI(configID: any, { request }) {
        let targetURL
        if (
            process.env.ENVIRONMENT_NAME === "preview" ||
            process.env.ENVIRONMENT_NAME === "production"
        ) {
            targetURL = await apiDetails.editor_api.url;
        } else {
            targetURL = await apiDetails.editor_api.url;
        }
        await request.get(`${targetURL}${apiDetails.publishConfigEndpoint.replace(
            "<param>",
            await configID
        )}`, {
            headers: {
                accept: "application/json",
                authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiJieklMamRJWmIiLCJ3cml0ZUFjY2VzcyI6dHJ1ZSwiaWF0IjoxNjgxNDMyNjg5LCJleHAiOjE3MTI5OTI2ODl9.vFsMHQLlLU6Js9OQjuZ-oAi-QDHtI81rWt8yhdJ-VmE",
            },
            data: {}
        });
    }

    //create importLatestAndOlderPostsAndReelsUsingAPI function
    // async importLatestAndOlderPostsAndReelsUsingAPI(executionConfig, { request }) {
    //     let targetURL;
    //     if (
    //         process.env.ENVIRONMENT_NAME === "preview" ||
    //         process.env.ENVIRONMENT_NAME === "production"
    //     ) {
    //         targetURL = await await apiDetails.editor_api.url;
    //     } else {
    //         targetURL = await apiDetails.editor_api.url;
    //     }
    //     // let existingResponse = await request.get(
    //     //     `${targetURL}${apiDetails.getConfigDetails.replace(
    //     //         "<param>",
    //     //         await executionConfig
    //     //     )}`,
    //     //     {
    //     //         headers: {
    //     //             accept: "application/json",
    //     //             authorization:
    //     //                 "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiJieklMamRJWmIiLCJ3cml0ZUFjY2VzcyI6dHJ1ZSwiaWF0IjoxNjgxNDMyNjg5LCJleHAiOjE3MTI5OTI2ODl9.vFsMHQLlLU6Js9OQjuZ-oAi-QDHtI81rWt8yhdJ-VmE",
    //     //         },
    //     //         data: {},
    //     //     }
    //     // );
    //     // let existingResponseBody = await existingResponse.json();
    //     // // console.log(existingResponseBody)
    //     // let originalRevision = await existingResponseBody.revision;
    //     // let originalCategoryCounts = await existingResponseBody.aggregates.categoryCounts;
    //     // let originalRemoteRevision = await existingResponseBody.remoteRevision;
    //     // let newRivision = originalRevision + 1;
    //     // let newRemoteRevision = originalRemoteRevision;
    //     let newApi = importInstagram;
    //     // newApi.revision = 3;
    //     // newApi.remoteRevision = 2;
    //     // newApi.id = executionConfig;
    //     // newApi.aggregates.categoryCounts = originalCategoryCounts;
    //     // newApi.transitiveAccount.bioConfigId = executionConfig;
    //     await request.put(`${targetURL}${apiDetails.importInstagramConfigEndpoint.replace(
    //         "<param>",
    //         executionConfig
    //     )}`, {
    //         headers: {
    //             accept: "application/json",
    //             authorization:
    //                 "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiJieklMamRJWmIiLCJ3cml0ZUFjY2VzcyI6dHJ1ZSwiaWF0IjoxNjgxNDMyNjg5LCJleHAiOjE3MTI5OTI2ODl9.vFsMHQLlLU6Js9OQjuZ-oAi-QDHtI81rWt8yhdJ-VmE",
    //         },
    //         data: newApi,
    //     });
    // }

}
