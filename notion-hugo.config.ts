import { UserConfig } from "./src/config"

const userConfig: UserConfig = {
    base_url: "https://shuguangnet.github.io",
    mount: {
        manual: false,
        page_url: 'https://volcano-second-271.notion.site/Notion-Hugo-1688ec4a64a7808fbb2ff2f3dc7b034f',
        pages: [
            // {
            //     page_id: '<page_id>',
            //     target_folder: 'path/relative/to/content/folder'
            // }
            {
                page_id: '1688ec4a64a7808fbb2ff2f3dc7b034f',
                target_folder: '.'
            }
        ],
        databases: [
            // {
            //     database_id: '<database_id>',
            //     target_folder: 'path/relative/to/content/folder'
            // }
            {
                database_id: 'b7b1816c05ec464391c8c111fa242985',
                target_folder: '.'
            }
        ],
    }
}

export default userConfig;
