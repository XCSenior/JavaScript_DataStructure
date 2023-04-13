const obj = {
    message: "Success !",
    status: 200,
    city: "北京",
    count: 1,
    data: {
        shidu: "71%",
        pm25: 51,
        pm10: 66,
        quality: "良",
        wendu: "28",
        ganmao: "极少数敏感人群应减少户外活动",
        yesterday: {
            date: "09日星期三",
            sunrise: "05:19",
            high: "高温 30.0℃",
            low: "低温 23.0℃",
            sunset: "19:20",
            aqi: 79,
            fx: "北风",
            fl: "<3级",
            type: "雷阵雨",
            notice: "雷雨闪电时，应切断电器电源，以免损坏",
        },
        forecast: [
            {
                date: "10日星期四",
                sunrise: "05:20",
                high: "高温 32.0℃",
                low: "低温 24.0℃",
                sunset: "19:19",
                aqi: 60,
                fx: "南风",
                fl: "<3级",
                type: "多云",
                notice: "绵绵的云朵，形状千变万化",
            },
            {
                date: "11日星期五",
                sunrise: "05:21",
                high: "高温 33.0℃",
                low: "低温 24.0℃",
                sunset: "19:17",
                aqi: 97,
                fx: "东南风",
                fl: "<3级",
                type: "阴",
                notice: "阴天是彩虹的前期之景",
            },
            {
                date: "12日星期六",
                sunrise: "05:22",
                high: "高温 30.0℃",
                low: "低温 23.0℃",
                sunset: "19:16",
                aqi: 65,
                fx: "南风",
                fl: "<3级",
                type: "雷阵雨",
                notice: "雷雨较大时要远离树木，选择建筑物躲雨",
            },
            {
                date: "13日星期日",
                sunrise: "05:23",
                high: "高温 26.0℃",
                low: "低温 22.0℃",
                sunset: "19:15",
                aqi: 52,
                fx: "北风",
                fl: "<3级",
                type: "雷阵雨",
                notice: "空旷场地不要使用有金属尖端的雨伞",
            },
            {
                date: "14日星期一",
                sunrise: "05:24",
                high: "高温 30.0℃",
                low: "低温 24.0℃",
                sunset: "19:13",
                aqi: 43,
                fx: "北风",
                fl: "<3级",
                type: "阴",
                notice: "阴天是彩虹的前期之景",
            },
        ],
    },
};

const data = {
    personOption: [
        { text: 'John', code: '442211199812200234' },
        { text: 'Mike', code: '477211221123200234' },
        { text: 'John', code: '562111998775380234' }
    ],
    addressOption: [
        { text: 'Beijing', code: '010' },
        { text: 'Guangzhou', code: '020' },
    ]
}

const obj2 = {
    message: "success感谢又拍云(upyun.com)提供CDN赞助",
    status: 200,
    date: "20230322",
    time: "2023-03-22 11:54:23",
    cityInfo: {
        city: "广州市",
        citykey: "101280101",
        parent: "广东",
        updateTime: "09:46",
    },
    data: {
        shidu: "74%",
        pm25: 21.0,
        pm10: 35.0,
        quality: "优",
        wendu: "25",
        ganmao: "各类人群可自由活动",
        forecast: [
            {
                date: "22",
                high: "高温 28℃",
                low: "低温 22℃",
                ymd: "2023-03-22",
                week: "星期三",
                sunrise: "06:28",
                sunset: "18:38",
                aqi: 57,
                fx: "南风",
                fl: "3级",
                type: "多云",
                notice: "阴晴之间，谨防紫外线侵扰",
            },
            {
                date: "23",
                high: "高温 30℃",
                low: "低温 22℃",
                ymd: "2023-03-23",
                week: "星期四",
                sunrise: "06:27",
                sunset: "18:39",
                aqi: 52,
                fx: "南风",
                fl: "3级",
                type: "中雨",
                notice: "记得随身携带雨伞哦",
            },
            {
                date: "24",
                high: "高温 25℃",
                low: "低温 15℃",
                ymd: "2023-03-24",
                week: "星期五",
                sunrise: "06:26",
                sunset: "18:39",
                aqi: 50,
                fx: "东南风",
                fl: "3级",
                type: "阴",
                notice: "不要被阴云遮挡住好心情",
            },
            {
                date: "25",
                high: "高温 20℃",
                low: "低温 15℃",
                ymd: "2023-03-25",
                week: "星期六",
                sunrise: "06:25",
                sunset: "18:39",
                aqi: 32,
                fx: "东北风",
                fl: "2级",
                type: "大雨",
                notice: "出门最好穿雨衣，勿挡视线",
            },
            {
                date: "26",
                high: "高温 19℃",
                low: "低温 16℃",
                ymd: "2023-03-26",
                week: "星期日",
                sunrise: "06:24",
                sunset: "18:40",
                aqi: 26,
                fx: "北风",
                fl: "3级",
                type: "阴",
                notice: "不要被阴云遮挡住好心情",
            },
            {
                date: "27",
                high: "高温 19℃",
                low: "低温 16℃",
                ymd: "2023-03-27",
                week: "星期一",
                sunrise: "06:23",
                sunset: "18:40",
                aqi: 27,
                fx: "北风",
                fl: "3级",
                type: "阴",
                notice: "不要被阴云遮挡住好心情",
            },
            {
                date: "28",
                high: "高温 20℃",
                low: "低温 16℃",
                ymd: "2023-03-28",
                week: "星期二",
                sunrise: "06:22",
                sunset: "18:40",
                aqi: 23,
                fx: "北风",
                fl: "3级",
                type: "阴",
                notice: "不要被阴云遮挡住好心情",
            },
            {
                date: "29",
                high: "高温 19℃",
                low: "低温 15℃",
                ymd: "2023-03-29",
                week: "星期三",
                sunrise: "06:21",
                sunset: "18:41",
                aqi: 26,
                fx: "北风",
                fl: "2级",
                type: "阴",
                notice: "不要被阴云遮挡住好心情",
            },
            {
                date: "30",
                high: "高温 23℃",
                low: "低温 17℃",
                ymd: "2023-03-30",
                week: "星期四",
                sunrise: "06:21",
                sunset: "18:41",
                aqi: 36,
                fx: "东风",
                fl: "2级",
                type: "阴",
                notice: "不要被阴云遮挡住好心情",
            },
            {
                date: "31",
                high: "高温 22℃",
                low: "低温 16℃",
                ymd: "2023-03-31",
                week: "星期五",
                sunrise: "06:20",
                sunset: "18:42",
                aqi: 40,
                fx: "南风",
                fl: "2级",
                type: "阴",
                notice: "不要被阴云遮挡住好心情",
            },
            {
                date: "01",
                high: "高温 23℃",
                low: "低温 17℃",
                ymd: "2023-04-01",
                week: "星期六",
                sunrise: "06:19",
                sunset: "18:42",
                aqi: 44,
                fx: "东南风",
                fl: "2级",
                type: "阴",
                notice: "不要被阴云遮挡住好心情",
            },
            {
                date: "02",
                high: "高温 25℃",
                low: "低温 19℃",
                ymd: "2023-04-02",
                week: "星期日",
                sunrise: "06:18",
                sunset: "18:42",
                aqi: 52,
                fx: "北风",
                fl: "2级",
                type: "多云",
                notice: "阴晴之间，谨防紫外线侵扰",
            },
            {
                date: "03",
                high: "高温 25℃",
                low: "低温 18℃",
                ymd: "2023-04-03",
                week: "星期一",
                sunrise: "06:17",
                sunset: "18:43",
                aqi: 41,
                fx: "南风",
                fl: "3级",
                type: "多云",
                notice: "阴晴之间，谨防紫外线侵扰",
            },
            {
                date: "04",
                high: "高温 23℃",
                low: "低温 18℃",
                ymd: "2023-04-04",
                week: "星期二",
                sunrise: "06:16",
                sunset: "18:43",
                aqi: 45,
                fx: "南风",
                fl: "3级",
                type: "阴",
                notice: "不要被阴云遮挡住好心情",
            },
            {
                date: "05",
                high: "高温 27℃",
                low: "低温 19℃",
                ymd: "2023-04-05",
                week: "星期三",
                sunrise: "06:15",
                sunset: "18:43",
                aqi: 46,
                fx: "南风",
                fl: "3级",
                type: "阴",
                notice: "不要被阴云遮挡住好心情",
            },
        ],
        yesterday: {
            date: "21",
            high: "高温 26℃",
            low: "低温 21℃",
            ymd: "2023-03-21",
            week: "星期二",
            sunrise: "06:29",
            sunset: "18:38",
            aqi: 44,
            fx: "南风",
            fl: "3级",
            type: "阴",
            notice: "不要被阴云遮挡住好心情",
        },
    },
};

const arr = [
    {
        deviceId: "a8f0d6547b6c4e2e8d827b9fc2dabf4c",
        deviceCode: "44190500001110000006",
        deviceType: "iot",
        deviceSubtype: "其他",
        deviceName: "威士燃气表AAA",
        deivceModel: "AAA型号",
        deviceVendor: "威士",
        relatedDevice: null,
        deviceLocation: "1",
        deviceProject: null,
        deviceStatus: "1000",
        statusCd: "1000",
        devicePrincipalName: "test0317devicePrincipalName",
        devicePrincipalPhone: "test0317devicePrincipalPhone",
        remark: "test0317remark",
        createdBy: null,
        createdTime: null,
        updatedBy: null,
        updatedTime: null,
        tenantId: null,
        id: null,
        indicatorList: null,
    },
    {
        deviceId: "4",
        deviceCode: null,
        deviceType: "iot",
        deviceSubtype: "其他",
        deviceName: "环境一体机-X2Y2",
        deivceModel: null,
        deviceVendor: null,
        relatedDevice: null,
        deviceLocation: null,
        deviceProject: null,
        deviceStatus: null,
        statusCd: null,
        devicePrincipalName: null,
        devicePrincipalPhone: null,
        remark: null,
        createdBy: null,
        createdTime: null,
        updatedBy: null,
        updatedTime: null,
        tenantId: null,
        id: null,
        indicatorList: [
            {
                deviceItemId: null,
                itemCode: "air_pressure",
                deviceId: "4",
                itemId: "5",
                deviceType: "environment",
                itemValue: "1",
                dataSource: null,
                itemUnit: "",
                dateTime: "2023-03-15 09:00:00",
                createTime: "2023-03-15 09:00:00",
                createStaff: "1",
                timeCycle: "",
                itemName: "大气压",
            },
            {
                deviceItemId: null,
                itemCode: "humidity",
                deviceId: "4",
                itemId: "4",
                deviceType: "environment",
                itemValue: "29.5",
                dataSource: null,
                itemUnit: "",
                dateTime: "2023-03-15 09:00:00",
                createTime: "2023-03-15 09:00:00",
                createStaff: "1",
                timeCycle: "",
                itemName: "湿度",
            },
            {
                deviceItemId: null,
                itemCode: "pm10",
                deviceId: "4",
                itemId: "2",
                deviceType: "environment",
                itemValue: "65",
                dataSource: null,
                itemUnit: "",
                dateTime: "2023-03-15 09:00:00",
                createTime: "2023-03-15 09:00:00",
                createStaff: "1",
                timeCycle: "",
                itemName: "粉尘PM10",
            },
            {
                deviceItemId: null,
                itemCode: "pm2_5",
                deviceId: "4",
                itemId: "1",
                deviceType: "environment",
                itemValue: "29",
                dataSource: null,
                itemUnit: "",
                dateTime: "2023-03-15 09:00:00",
                createTime: "2023-03-15 09:00:00",
                createStaff: "1",
                timeCycle: "",
                itemName: "粉尘PM2.5",
            },
            {
                deviceItemId: null,
                itemCode: "temperature",
                deviceId: "4",
                itemId: "3",
                deviceType: "environment",
                itemValue: "27",
                dataSource: null,
                itemUnit: "",
                dateTime: "2023-03-15 09:00:00",
                createTime: "2023-03-15 09:00:00",
                createStaff: "1",
                timeCycle: "",
                itemName: "温度",
            },
        ],
        air_pressure: "1",
        humidity: "29.5",
        pm10: "65",
        pm2_5: "29",
        temperature: "27",
    },
    {
        deviceId: "7c7bfbbeefbd42a0a2c8f4158d608356",
        deviceCode: "",
        deviceType: "iot",
        deviceSubtype: null,
        deviceName: "环境一体机-X1Y1",
        deivceModel: null,
        deviceVendor: null,
        relatedDevice: null,
        deviceLocation: null,
        deviceProject: null,
        deviceStatus: "1",
        statusCd: null,
        devicePrincipalName: null,
        devicePrincipalPhone: null,
        remark: null,
        createdBy: null,
        createdTime: "2023-03-16 15:17:35",
        updatedBy: null,
        updatedTime: "2023-03-23 09:04:13",
        tenantId: "11000",
        id: null,
        indicatorList: [
            {
                deviceItemId: "abc88426-e393-4c96-b90c-54ab0f7606b1",
                itemCode: "air_pressure",
                deviceId: "7c7bfbbeefbd42a0a2c8f4158d608356",
                itemId: null,
                deviceType: "iot",
                itemValue: "1",
                dataSource: "1",
                itemUnit: "",
                dateTime: "2023-03-20 14:00:00",
                createTime: "2023-03-20 17:35:59",
                createStaff: null,
                timeCycle: null,
                itemName: "大气压",
            },
            {
                deviceItemId: "93eb2c84-9673-4fec-abd4-56c5882225d0",
                itemCode: "humidity",
                deviceId: "7c7bfbbeefbd42a0a2c8f4158d608356",
                itemId: null,
                deviceType: "iot",
                itemValue: "3",
                dataSource: "1",
                itemUnit: "",
                dateTime: "2023-03-20 14:00:00",
                createTime: "2023-03-20 17:35:59",
                createStaff: null,
                timeCycle: null,
                itemName: "湿度",
            },
            {
                deviceItemId: "925f2266-a8cd-40f5-a8f0-cbcece9a858b",
                itemCode: "pm10",
                deviceId: "7c7bfbbeefbd42a0a2c8f4158d608356",
                itemId: null,
                deviceType: "iot",
                itemValue: "2",
                dataSource: "1",
                itemUnit: "",
                dateTime: "2023-03-20 14:00:00",
                createTime: "2023-03-20 17:35:59",
                createStaff: null,
                timeCycle: null,
                itemName: "粉尘PM10",
            },
            {
                deviceItemId: "d43cafc9-ce9e-4fac-b76b-93700c7d24d3",
                itemCode: "pm2_5",
                deviceId: "7c7bfbbeefbd42a0a2c8f4158d608356",
                itemId: null,
                deviceType: "iot",
                itemValue: "6",
                dataSource: "1",
                itemUnit: "",
                dateTime: "2023-03-20 14:00:00",
                createTime: "2023-03-20 17:35:59",
                createStaff: null,
                timeCycle: null,
                itemName: "粉尘PM2.5",
            },
            {
                deviceItemId: "dd69ef6f-93f5-46fd-9d4d-d179c6e165e1",
                itemCode: "temperature",
                deviceId: "7c7bfbbeefbd42a0a2c8f4158d608356",
                itemId: null,
                deviceType: "iot",
                itemValue: "5",
                dataSource: "1",
                itemUnit: "",
                dateTime: "2023-03-20 14:00:00",
                createTime: "2023-03-20 17:35:59",
                createStaff: null,
                timeCycle: null,
                itemName: "温度",
            },
            {
                deviceItemId: "a826f67e-e790-4fad-92a3-43bea0db8fbc",
                itemCode: "wind_direction",
                deviceId: "7c7bfbbeefbd42a0a2c8f4158d608356",
                itemId: null,
                deviceType: "iot",
                itemValue: "4",
                dataSource: "1",
                itemUnit: "",
                dateTime: "2023-03-20 14:00:00",
                createTime: "2023-03-20 17:35:59",
                createStaff: null,
                timeCycle: null,
                itemName: "风向",
            },
            {
                deviceItemId: "079df727-c1d9-4aab-8ccb-9532bd8ebe3c",
                itemCode: "wind_speed",
                deviceId: "7c7bfbbeefbd42a0a2c8f4158d608356",
                itemId: null,
                deviceType: "iot",
                itemValue: "2",
                dataSource: "1",
                itemUnit: "",
                dateTime: "2023-03-20 14:00:00",
                createTime: "2023-03-20 17:35:59",
                createStaff: null,
                timeCycle: null,
                itemName: "风速",
            },
        ],
        air_pressure: "1",
        humidity: "3",
        pm10: "2",
        pm2_5: "6",
        temperature: "5",
        wind_direction: "4",
        wind_speed: "2",
    },
];
