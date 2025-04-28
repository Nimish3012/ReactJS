import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./components/Constants";  //named import   
import Header from "./components/Header";  //defaul import
import Contact from "./components/Contact";
import About from "./components/About";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Shimmer from "./components/Shimmer";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";


//if we have two named exports we can import :  import {header, title} from "./components/Header.js" 
//if I want to import every export from a file i can : import * as obj  from ./comp/head;  then use obj.header and obj.title

const apiResponse = {
  "data": {
      "site": {
          "id": "VGVuYW50LTc3ODM4MA==",
          "videos": {
              "totalCount": 2194,
              "pageInfo": {
                  "endCursor": "MTAw",
                  "startCursor": "MQ",
                  "hasNextPage": false,
                  "hasPreviousPage": false,
                  "__typename": "PageInfo"
              },
              "edges": [
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyNTQ=",
                          "fileName": "16.map_lambda_reduce_filter_rec_function.mp4",
                          "humanReadableFileSize": "165 MB",
                          "durationInSeconds": 854,
                          "createdAt": "2024-09-03T17:27:12Z",
                          "updatedAt": "2024-09-03T17:29:36Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/97fc1f5f0c7c19d2089bb0454fff1d6e0e089515.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkds2o1cpc72t8667g",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkds2o1cpc72t8667g",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyNTM=",
                          "fileName": "15.docstring_local_global_variable.mp4",
                          "humanReadableFileSize": "82.2 MB",
                          "durationInSeconds": 430,
                          "createdAt": "2024-09-03T17:27:11Z",
                          "updatedAt": "2024-09-03T17:29:25Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/f8fd5c2c8707c4e4b090f77a2578e3c9b1aea328.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdrqo1cpc72t86670",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdrqo1cpc72t86670",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAyMDQ=",
                        "fileName": "3.Linear_Regression_Video.mp4",
                        "humanReadableFileSize": "77.8 MB",
                        "durationInSeconds": 358,
                        "createdAt": "2024-09-03T17:26:33Z",
                        "updatedAt": "2024-09-03T17:28:37Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/5b6b04670279818950d6259a8f1df6da910b21ca.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkdi9ehjfs72rhcs70",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdi9ehjfs72rhcs70",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAyMDM=",
                        "fileName": "2.Ramdom_Initilization_Trap.mp4",
                        "humanReadableFileSize": "18.1 MB",
                        "durationInSeconds": 160,
                        "createdAt": "2024-09-03T17:26:32Z",
                        "updatedAt": "2024-09-03T17:27:34Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/7664cc00fe5695d01ff6a2406e3ea6118397d1c8.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkdi2o1cpc72t865v0",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdi2o1cpc72t865v0",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAyMDI=",
                        "fileName": "2.Machine_Learning_Types.mp4",
                        "humanReadableFileSize": "115 MB",
                        "durationInSeconds": 711,
                        "createdAt": "2024-09-03T17:26:32Z",
                        "updatedAt": "2024-09-03T17:28:38Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/ecd16506ca938a01232794002701a8e0f9a7a260.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkdi1lc6nc72r32efg",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdi1lc6nc72r32efg",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAyMDE=",
                        "fileName": "1.Introduction_KMeans.mp4",
                        "humanReadableFileSize": "55 MB",
                        "durationInSeconds": 448,
                        "createdAt": "2024-09-03T17:26:30Z",
                        "updatedAt": "2024-09-03T17:28:34Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/b1d9b80483b8ebed1baedbd2c744479247ec1112.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkdhio1cpc72t865ug",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdhio1cpc72t865ug",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAyMDA=",
                        "fileName": "1.Intro_MachineLearning.mp4",
                        "humanReadableFileSize": "27.2 MB",
                        "durationInSeconds": 216,
                        "createdAt": "2024-09-03T17:26:30Z",
                        "updatedAt": "2024-09-03T17:27:33Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/562f98a7976a2a98f72941e20636d234f0fe4ca8.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkdhio1cpc72t865u0",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdhio1cpc72t865u0",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxOTc=",
                        "fileName": "2.Seaborn.mp4",
                        "humanReadableFileSize": "156 MB",
                        "durationInSeconds": 787,
                        "createdAt": "2024-09-03T17:26:09Z",
                        "updatedAt": "2024-09-03T17:29:17Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/5cd903f7eed48f4c640b4a41a3826490f504b035.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkdc9lc6nc72r32ef0",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdc9lc6nc72r32ef0",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxOTY=",
                        "fileName": "1.Matplotlib (2).mp4",
                        "humanReadableFileSize": "251 MB",
                        "durationInSeconds": 1182,
                        "createdAt": "2024-09-03T17:26:08Z",
                        "updatedAt": "2024-09-03T17:30:21Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/fe7d2aa269040b4636aa39c697977fb15597d2c4.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkdc1ehjfs72rhcs5g",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdc1ehjfs72rhcs5g",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxOTU=",
                        "fileName": "4.Implementation_K_Stratified_KCV_Python.mp4",
                        "humanReadableFileSize": "136 MB",
                        "durationInSeconds": 413,
                        "createdAt": "2024-09-03T17:25:58Z",
                        "updatedAt": "2024-09-03T17:28:04Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/b396957866c87ff9affe43305e28838558562df6.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkd9io1cpc72t865tg",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd9io1cpc72t865tg",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxOTQ=",
                        "fileName": "3.Introduction_Stratified_K_Fold_CV.mp4",
                        "humanReadableFileSize": "14.8 MB",
                        "durationInSeconds": 141,
                        "createdAt": "2024-09-03T17:25:58Z",
                        "updatedAt": "2024-09-03T17:27:00Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/80b5a582b4c1156a936e79c109d92bcb05d49154.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkd9io1cpc72t865t0",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd9io1cpc72t865t0",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxOTM=",
                        "fileName": "2.Introduction K Fold CV.mp4",
                        "humanReadableFileSize": "34 MB",
                        "durationInSeconds": 179,
                        "createdAt": "2024-09-03T17:25:57Z",
                        "updatedAt": "2024-09-03T17:27:01Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/3e3edacebfd9a8cf6c98be49bed77a831a9de5c0.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkd99ehjfs72rhcs50",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd99ehjfs72rhcs50",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxOTI=",
                        "fileName": "1.Introduction_Cross_Validation.mp4",
                        "humanReadableFileSize": "29.1 MB",
                        "durationInSeconds": 224,
                        "createdAt": "2024-09-03T17:25:57Z",
                        "updatedAt": "2024-09-03T17:26:58Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/c8c6c6b937b1fc0370df09f02781933d03c842a6.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkd99ehjfs72rhcs4g",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd99ehjfs72rhcs4g",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxODk=",
                        "fileName": "5.Implemenatation RandomForest.mp4",
                        "humanReadableFileSize": "119 MB",
                        "durationInSeconds": 454,
                        "createdAt": "2024-09-03T17:25:35Z",
                        "updatedAt": "2024-09-03T17:27:41Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/fb26e5f8cd55005c2a06c8caafd157129a4f25ba.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkd3pehjfs72rhcs3g",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd3pehjfs72rhcs3g",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxODg=",
                        "fileName": "4.Random Forest.mp4",
                        "humanReadableFileSize": "35.4 MB",
                        "durationInSeconds": 243,
                        "createdAt": "2024-09-03T17:25:34Z",
                        "updatedAt": "2024-09-03T17:26:36Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/047522eb8b9807c18f2be1cd47cd4d7246e024a9.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkd3mt2gpc72ovmrm0",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd3mt2gpc72ovmrm0",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxODc=",
                        "fileName": "3.Hyperparametr_tuning_python.mp4",
                        "humanReadableFileSize": "113 MB",
                        "durationInSeconds": 417,
                        "createdAt": "2024-09-03T17:25:34Z",
                        "updatedAt": "2024-09-03T17:27:41Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/f7016d3f93c8c7eb0ceb9c1c051f824023eb6fca.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkd3mt2gpc72ovmrlg",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd3mt2gpc72ovmrlg",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxODY=",
                        "fileName": "3.BoostrapAggregation Bagging.mp4",
                        "humanReadableFileSize": "35.1 MB",
                        "durationInSeconds": 211,
                        "createdAt": "2024-09-03T17:25:33Z",
                        "updatedAt": "2024-09-03T17:26:36Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/d99aac69a9771aae6d7a45e2caf5f87e5a50ae7d.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkd3et2gpc72ovmrl0",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd3et2gpc72ovmrl0",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxODU=",
                        "fileName": "2.Lasso_Ridge_Regularization.mp4",
                        "humanReadableFileSize": "88.4 MB",
                        "durationInSeconds": 489,
                        "createdAt": "2024-09-03T17:25:33Z",
                        "updatedAt": "2024-09-03T17:27:37Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/79a5f69c775b269c827370d2ad8cf10b60ad3d05.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkd3ao1cpc72t865sg",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd3ao1cpc72t865sg",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxODQ=",
                        "fileName": "2.Bais_Variance_Trade_off.mp4",
                        "humanReadableFileSize": "28.8 MB",
                        "durationInSeconds": 222,
                        "createdAt": "2024-09-03T17:25:32Z",
                        "updatedAt": "2024-09-03T17:26:34Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/80589aceb5461fddef57a3c074be95f1a7a7d0a7.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkd32o1cpc72t865s0",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd32o1cpc72t865s0",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxODM=",
                        "fileName": "1.Optimization.mp4",
                        "humanReadableFileSize": "62.7 MB",
                        "durationInSeconds": 343,
                        "createdAt": "2024-09-03T17:25:32Z",
                        "updatedAt": "2024-09-03T17:27:36Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/a698569f4a0b11f1260df2e10b3a10ec798972ce.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkd31ehjfs72rhcs30",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd31ehjfs72rhcs30",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxODI=",
                        "fileName": "1.Introduction RandomForest.mp4",
                        "humanReadableFileSize": "13 MB",
                        "durationInSeconds": 79,
                        "createdAt": "2024-09-03T17:25:31Z",
                        "updatedAt": "2024-09-03T17:26:33Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/67212dc5b4a0973145002838cfcb44f0d9ba59e6.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkd2pehjfs72rhcs2g",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd2pehjfs72rhcs2g",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxODE=",
                        "fileName": "8.Multivariate_Analysis_EDA.mp4",
                        "humanReadableFileSize": "20.2 MB",
                        "durationInSeconds": 96,
                        "createdAt": "2024-09-03T17:25:22Z",
                        "updatedAt": "2024-09-03T17:26:27Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/ab72557b4a01888eb633c6cb3e28259286af584b.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkd0hehjfs72rhcs20",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd0hehjfs72rhcs20",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxODA=",
                        "fileName": "7.Bivariate_Analysis_EDA.mp4",
                        "humanReadableFileSize": "67 MB",
                        "durationInSeconds": 281,
                        "createdAt": "2024-09-03T17:25:21Z",
                        "updatedAt": "2024-09-03T17:27:28Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/b6d65bb876411e32674dc70ecbda6c372a1f33a3.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkd09lc6nc72r32eeg",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd09lc6nc72r32eeg",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxNzk=",
                        "fileName": "2.Decision Tree Credit Risk.mp4",
                        "humanReadableFileSize": "143 MB",
                        "durationInSeconds": 585,
                        "createdAt": "2024-09-03T17:25:20Z",
                        "updatedAt": "2024-09-03T17:27:34Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/3e5e53d4e4f10975af9772f005d3ec4fd934d418.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkd02o1cpc72t865rg",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd02o1cpc72t865rg",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxNzg=",
                        "fileName": "6.Univariate_Analysis_EDA.mp4",
                        "humanReadableFileSize": "121 MB",
                        "durationInSeconds": 390,
                        "createdAt": "2024-09-03T17:25:20Z",
                        "updatedAt": "2024-09-03T17:27:26Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/3dc9034a9cbc0b6417d54362da14ff4a67f185ac.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkd01ehjfs72rhcs1g",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd01ehjfs72rhcs1g",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxNzc=",
                        "fileName": "5.Data_Cleaning_II.mp4",
                        "humanReadableFileSize": "158 MB",
                        "durationInSeconds": 525,
                        "createdAt": "2024-09-03T17:25:19Z",
                        "updatedAt": "2024-09-03T17:28:27Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/b55b13956268c44b4ea519e5126823862e700c95.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkcvut2gpc72ovmrkg",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkcvut2gpc72ovmrkg",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxNzY=",
                        "fileName": "1.Introduction_Decision_Trees.mp4",
                        "humanReadableFileSize": "95.2 MB",
                        "durationInSeconds": 650,
                        "createdAt": "2024-09-03T17:25:19Z",
                        "updatedAt": "2024-09-03T17:28:25Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/fd1075da872b495c319a24e2b6095c4212cd7f8f.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkcvplc6nc72r32ee0",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkcvplc6nc72r32ee0",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxNzU=",
                        "fileName": "4.Data_Cleaning_I.mp4",
                        "humanReadableFileSize": "211 MB",
                        "durationInSeconds": 831,
                        "createdAt": "2024-09-03T17:25:18Z",
                        "updatedAt": "2024-09-03T17:28:28Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/3e2bfb209c6a988c9e3227f839d2921b8a861030.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkcvmt2gpc72ovmrk0",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkcvmt2gpc72ovmrk0",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxNzQ=",
                        "fileName": "3.Data_Gathering_EDA.mp4",
                        "humanReadableFileSize": "33.2 MB",
                        "durationInSeconds": 159,
                        "createdAt": "2024-09-03T17:25:18Z",
                        "updatedAt": "2024-09-03T17:26:20Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/713c381f298d51574bd124654a4dbca6c9853cb8.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkcvhlc6nc72r32edg",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkcvhlc6nc72r32edg",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxNzM=",
                        "fileName": "2.Graphical_NonGraphical_EDA.mp4",
                        "humanReadableFileSize": "10.4 MB",
                        "durationInSeconds": 139,
                        "createdAt": "2024-09-03T17:25:17Z",
                        "updatedAt": "2024-09-03T17:26:19Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/8777410573144021e6c840949ab5bd5967aaeb25.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkcvao1cpc72t865r0",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkcvao1cpc72t865r0",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxNzI=",
                        "fileName": "1.EDA_Introduction.mp4",
                        "humanReadableFileSize": "30 MB",
                        "durationInSeconds": 257,
                        "createdAt": "2024-09-03T17:25:16Z",
                        "updatedAt": "2024-09-03T17:26:19Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/7e71af89adbc9975378883840c46e2e9882e1aa4.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkcv1lc6nc72r32ed0",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkcv1lc6nc72r32ed0",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxNzA=",
                        "fileName": "5.GroupByDataFrame.mp4",
                        "humanReadableFileSize": "127 MB",
                        "durationInSeconds": 564,
                        "createdAt": "2024-09-03T17:24:51Z",
                        "updatedAt": "2024-09-03T17:27:01Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/0a15a14b17954556de1e06fd33ddb8e42060f13f.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkcoqo1cpc72t865qg",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkcoqo1cpc72t865qg",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxNjk=",
                        "fileName": "4.Combining_DataFrame.mp4",
                        "humanReadableFileSize": "241 MB",
                        "durationInSeconds": 1140,
                        "createdAt": "2024-09-03T17:24:51Z",
                        "updatedAt": "2024-09-03T17:29:02Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/b8c1f948c7c167f73988585408fd7854947ef31c.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkcoplc6nc72r32ecg",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkcoplc6nc72r32ecg",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxNjg=",
                        "fileName": "3.Describing_DataFrame.mp4",
                        "humanReadableFileSize": "116 MB",
                        "durationInSeconds": 599,
                        "createdAt": "2024-09-03T17:24:50Z",
                        "updatedAt": "2024-09-03T17:26:56Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/f0bc5afa01b174c3e28edc5ae06960cf6bf6b77f.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkcomt2gpc72ovmrj0",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkcomt2gpc72ovmrj0",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxNjc=",
                        "fileName": "2.Creating_DataFrame.mp4",
                        "humanReadableFileSize": "192 MB",
                        "durationInSeconds": 972,
                        "createdAt": "2024-09-03T17:24:49Z",
                        "updatedAt": "2024-09-03T17:27:59Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/392cc98d62be02c4fbf9160f0c74c6ca09d11aae.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkcoet2gpc72ovmrig",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkcoet2gpc72ovmrig",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxNjY=",
                        "fileName": "1.Introduction_to-Pandas.mp4",
                        "humanReadableFileSize": "118 MB",
                        "durationInSeconds": 733,
                        "createdAt": "2024-09-03T17:24:48Z",
                        "updatedAt": "2024-09-03T17:27:54Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/c7996540c4a6b80208769255b2ac835f8eac6da0.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkco1ehjfs72rhcs10",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkco1ehjfs72rhcs10",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxNjQ=",
                        "fileName": "7.Feature_Encoding_Python.mp4",
                        "humanReadableFileSize": "101 MB",
                        "durationInSeconds": 432,
                        "createdAt": "2024-09-03T17:24:41Z",
                        "updatedAt": "2024-09-03T17:25:45Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/8d02bf38d4251c76ba24dc104e04d9e654b57357.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkcm9lc6nc72r32ec0",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkcm9lc6nc72r32ec0",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxNjM=",
                        "fileName": "6.One_Hot_Encoding_using_pandas.mp4",
                        "humanReadableFileSize": "36.2 MB",
                        "durationInSeconds": 232,
                        "createdAt": "2024-09-03T17:24:39Z",
                        "updatedAt": "2024-09-03T17:25:42Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/0d4be85994b23946959b3c6ab832700c7c39e79c.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkclqo1cpc72t865q0",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkclqo1cpc72t865q0",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxNjI=",
                        "fileName": "5.One_Hot_Encoding_using_sklearn.mp4",
                        "humanReadableFileSize": "8.56 MB",
                        "durationInSeconds": 84,
                        "createdAt": "2024-09-03T17:24:38Z",
                        "updatedAt": "2024-09-03T17:25:40Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/0f5fdc50aa307561fa8a280c040f635de27db45c.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkclhehjfs72rhcs0g",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkclhehjfs72rhcs0g",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxNjE=",
                        "fileName": "4.One_Hot_Encoding.mp4",
                        "humanReadableFileSize": "45.7 MB",
                        "durationInSeconds": 255,
                        "createdAt": "2024-09-03T17:24:37Z",
                        "updatedAt": "2024-09-03T17:25:39Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/63291586b06e7c8ce1b5cfea5e0b9840d138fd66.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkcl9lc6nc72r32ebg",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkcl9lc6nc72r32ebg",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxNjA=",
                        "fileName": "3.Label_Encoding.mp4",
                        "humanReadableFileSize": "26.8 MB",
                        "durationInSeconds": 219,
                        "createdAt": "2024-09-03T17:24:35Z",
                        "updatedAt": "2024-09-03T17:25:38Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/ad76d1ab359227124f8023878bc530edff105af1.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkckut2gpc72ovmrhg",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkckut2gpc72ovmrhg",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxNTk=",
                        "fileName": "2.Feature_Encoding.mp4",
                        "humanReadableFileSize": "17.4 MB",
                        "durationInSeconds": 116,
                        "createdAt": "2024-09-03T17:24:34Z",
                        "updatedAt": "2024-09-03T17:25:35Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/74fd5400854dcae0f2044c34b3b934df47c99155.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkckio1cpc72t865pg",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkckio1cpc72t865pg",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxNTg=",
                        "fileName": "1.Multiple_Lin_Reg_Introduction.mp4",
                        "humanReadableFileSize": "8.13 MB",
                        "durationInSeconds": 86,
                        "createdAt": "2024-09-03T17:24:33Z",
                        "updatedAt": "2024-09-03T17:25:34Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/40c397a28ff9f2f7545e51fe4470434a43a9e018.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkck9lc6nc72r32eb0",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkck9lc6nc72r32eb0",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxNTA=",
                        "fileName": "6.Trignometric_Linalgreba_functions.mp4",
                        "humanReadableFileSize": "125 MB",
                        "durationInSeconds": 653,
                        "createdAt": "2024-09-03T17:22:41Z",
                        "updatedAt": "2024-09-03T17:25:50Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/fcb7998774e064f7ba5f855b1fe0ea53028618ef.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkboao1cpc72t865ng",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkboao1cpc72t865ng",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxNDk=",
                        "fileName": "5.Manipulation_Arrays.mp4",
                        "humanReadableFileSize": "136 MB",
                        "durationInSeconds": 657,
                        "createdAt": "2024-09-03T17:22:40Z",
                        "updatedAt": "2024-09-03T17:25:46Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/79d8b578cec6c08bd5336a494bfd1f786ee78257.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkbo1lc6nc72r32ea0",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkbo1lc6nc72r32ea0",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxNDg=",
                        "fileName": "4.Multidimensional_Array.mp4",
                        "humanReadableFileSize": "102 MB",
                        "durationInSeconds": 509,
                        "createdAt": "2024-09-03T17:22:38Z",
                        "updatedAt": "2024-09-03T17:25:44Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/85781a9607274299c82d4fa2362cfef171857d73.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkbnhlc6nc72r32e9g",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkbnhlc6nc72r32e9g",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxNDc=",
                        "fileName": "3.Operations_On_1D_Array.mp4",
                        "humanReadableFileSize": "152 MB",
                        "durationInSeconds": 742,
                        "createdAt": "2024-09-03T17:22:37Z",
                        "updatedAt": "2024-09-03T17:25:47Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/5d41f1ad41daba1041a9efdd4c1e29e4d859c93e.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkbn9lc6nc72r32e90",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkbn9lc6nc72r32e90",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxNDY=",
                        "fileName": "2.Creating_Numpy_Array.mp4",
                        "humanReadableFileSize": "137 MB",
                        "durationInSeconds": 703,
                        "createdAt": "2024-09-03T17:22:37Z",
                        "updatedAt": "2024-09-03T17:25:44Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/c733a724c32acbc1c6e6491f621604553367e9ba.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkbnao1cpc72t865n0",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkbnao1cpc72t865n0",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NjAxNDU=",
                        "fileName": "1.Introduction_Numpy.mp4",
                        "humanReadableFileSize": "96.4 MB",
                        "durationInSeconds": 517,
                        "createdAt": "2024-09-03T17:22:35Z",
                        "updatedAt": "2024-09-03T17:25:40Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/07ef142d2fab6191ca42b6be3362c801a317e6fe.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbkbmplc6nc72r32e8g",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkbmplc6nc72r32e8g",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NTc4MTc=",
                        "fileName": "Cuvette - DSA LIVE CLASS – 2024_09_02 21_29 IST – Recording.mp4",
                        "humanReadableFileSize": "502 MB",
                        "durationInSeconds": 3506,
                        "createdAt": "2024-09-03T06:52:42Z",
                        "updatedAt": "2024-09-03T07:15:53Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/bc15287bb9ad84af0e92635fc244110a924bdf1d.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crbb4ehdvh8s72ukcv6g",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbb4ehdvh8s72ukcv6g",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NTE2MzI=",
                        "fileName": "PGP MAY24 Batch - LIVE CLASS – 2024_09_01 20_53 IST – Recording.mp4",
                        "humanReadableFileSize": "619 MB",
                        "durationInSeconds": 7199,
                        "createdAt": "2024-09-01T19:31:42Z",
                        "updatedAt": "2024-09-01T20:12:58Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/8d7874f7258429c4749a51ab51924a4bd1682f7c.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "crac27k4dftc72tr8na0",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crac27k4dftc72tr8na0",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NDg4OTg=",
                        "fileName": "PGP AUG24 Batch - LIVE CLASS – 2024_08_31 20_42 IST – Recording.mp4",
                        "humanReadableFileSize": "526 MB",
                        "durationInSeconds": 5004,
                        "createdAt": "2024-08-31T18:40:44Z",
                        "updatedAt": "2024-08-31T19:08:58Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/c4938d5da3bd01c3c95538b7b3b0087f05a99f75.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "cr9m7b7v3ofc72qo5e3g",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/cr9m7b7v3ofc72qo5e3g",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                {
                    "node": {
                        "id": "VmlkZW8tMTE2NDgxOTQ=",
                        "fileName": "Copy of 11.nlp_restaurent_review.mp4",
                        "humanReadableFileSize": "86.1 MB",
                        "durationInSeconds": 301,
                        "createdAt": "2024-08-31T14:27:38Z",
                        "updatedAt": "2024-08-31T14:30:07Z",
                        "encodedState": "finished",
                        "thumbnail": "https://embed-ssl.wistia.com/deliveries/f08b1c047a2e21ca95803df21033518b885fd5a6.jpg",
                        "storageLocation": "videoproxy",
                        "identifier": "cr9igmnv3ofc72qo5bb0",
                        "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/cr9igmnv3ofc72qo5bb0",
                        "__typename": "Video"
                    },
                    "__typename": "VideoEdge"
                },
                ,
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyNTE=",
                          "fileName": "13.comprehensions.mp4",
                          "humanReadableFileSize": "48.9 MB",
                          "durationInSeconds": 251,
                          "createdAt": "2024-09-03T17:27:10Z",
                          "updatedAt": "2024-09-03T17:28:25Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/f1bfa28e4f44bca61aeff3c776beb2df8b59d399.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdrmt2gpc72ovmrs0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdrmt2gpc72ovmrs0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyNTA=",
                          "fileName": "12.while_for_loops.mp4",
                          "humanReadableFileSize": "203 MB",
                          "durationInSeconds": 914,
                          "createdAt": "2024-09-03T17:27:09Z",
                          "updatedAt": "2024-09-03T17:29:31Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/9b066510db1259d6ee68550b98eba85c76e153a8.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdret2gpc72ovmrrg",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdret2gpc72ovmrrg",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyNDk=",
                          "fileName": "11.if_statement.mp4",
                          "humanReadableFileSize": "143 MB",
                          "durationInSeconds": 646,
                          "createdAt": "2024-09-03T17:27:09Z",
                          "updatedAt": "2024-09-03T17:29:22Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/1b67a2c6f073748a5b09910913f2ec07b4b54f9f.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdrao1cpc72t8666g",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdrao1cpc72t8666g",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyNDg=",
                          "fileName": "10.Input_format_function.mp4",
                          "humanReadableFileSize": "91.6 MB",
                          "durationInSeconds": 388,
                          "createdAt": "2024-09-03T17:27:08Z",
                          "updatedAt": "2024-09-03T17:28:50Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/c0ec58a7323feb4df0f05e5d6bbc3a1483ae7f81.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdr2o1cpc72t86660",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdr2o1cpc72t86660",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyNDc=",
                          "fileName": "9.Airthmetic_relational_logical_operators.mp4",
                          "humanReadableFileSize": "133 MB",
                          "durationInSeconds": 708,
                          "createdAt": "2024-09-03T17:27:07Z",
                          "updatedAt": "2024-09-03T17:29:23Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/7e8d8e80d88fa94c7b72ca6c8fd0c8bea5ea0e79.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdqqo1cpc72t8665g",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdqqo1cpc72t8665g",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyNDY=",
                          "fileName": "8.Dictionary.mp4",
                          "humanReadableFileSize": "50.9 MB",
                          "durationInSeconds": 255,
                          "createdAt": "2024-09-03T17:27:07Z",
                          "updatedAt": "2024-09-03T17:28:20Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/1b1374882feccd8a059ede1865fb859b27324511.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdqqo1cpc72t86650",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdqqo1cpc72t86650",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyNDU=",
                          "fileName": "12.ROC_AUC.mp4",
                          "humanReadableFileSize": "96.1 MB",
                          "durationInSeconds": 411,
                          "createdAt": "2024-09-03T17:27:07Z",
                          "updatedAt": "2024-09-03T17:29:15Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/05d14905ba7fb7a38ba2739bd2231da95f719002.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdqpehjfs72rhcsd0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdqpehjfs72rhcsd0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyNDQ=",
                          "fileName": "7.sets.mp4",
                          "humanReadableFileSize": "68.5 MB",
                          "durationInSeconds": 383,
                          "createdAt": "2024-09-03T17:27:06Z",
                          "updatedAt": "2024-09-03T17:28:46Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/f78ff86b851ac0c4185f5691b6601901b73256e7.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdqio1cpc72t8664g",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdqio1cpc72t8664g",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyNDM=",
                          "fileName": "11.Metrics_Beyond_Accuracy.mp4",
                          "humanReadableFileSize": "79 MB",
                          "durationInSeconds": 405,
                          "createdAt": "2024-09-03T17:27:06Z",
                          "updatedAt": "2024-09-03T17:29:18Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/0656b3dc2fb2c09f677df7fe8d0cf65424bf3124.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdqhehjfs72rhcscg",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdqhehjfs72rhcscg",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyNDI=",
                          "fileName": "6.Lists.mp4",
                          "humanReadableFileSize": "119 MB",
                          "durationInSeconds": 669,
                          "createdAt": "2024-09-03T17:27:06Z",
                          "updatedAt": "2024-09-03T17:29:18Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/1fa2f8c2811ff717a152f67a9a79747fc0f11d73.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdqio1cpc72t86640",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdqio1cpc72t86640",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyNDE=",
                          "fileName": "10.Manual Elimination Features.mp4",
                          "humanReadableFileSize": "69.3 MB",
                          "durationInSeconds": 266,
                          "createdAt": "2024-09-03T17:27:06Z",
                          "updatedAt": "2024-09-03T17:28:13Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/e6cbccfba3ae74f9e99e17c889fe6be41b98f414.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdqio1cpc72t8663g",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdqio1cpc72t8663g",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyNDA=",
                          "fileName": "5.Tuples.mp4",
                          "humanReadableFileSize": "91.6 MB",
                          "durationInSeconds": 534,
                          "createdAt": "2024-09-03T17:27:05Z",
                          "updatedAt": "2024-09-03T17:28:42Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/6b36101004e4aeac40e86b00019f963e0d39c7c4.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdq9lc6nc72r32ek0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdq9lc6nc72r32ek0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMzk=",
                          "fileName": "9.Confusion Matrix Accuracy.mp4",
                          "humanReadableFileSize": "37.6 MB",
                          "durationInSeconds": 226,
                          "createdAt": "2024-09-03T17:27:05Z",
                          "updatedAt": "2024-09-03T17:28:16Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/96dc5c41ec07d3e8791c25bf1da03eeab48f76c4.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdqet2gpc72ovmrr0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdqet2gpc72ovmrr0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMzg=",
                          "fileName": "4.Data_Structure_strings.mp4",
                          "humanReadableFileSize": "59.6 MB",
                          "durationInSeconds": 316,
                          "createdAt": "2024-09-03T17:27:05Z",
                          "updatedAt": "2024-09-03T17:28:13Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/41b131000d1cfafbf0514c3ae1bc493a2152e3fa.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdq9lc6nc72r32ejg",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdq9lc6nc72r32ejg",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMzc=",
                          "fileName": "8.Model_Building_Using_StatsModel.mp4",
                          "humanReadableFileSize": "111 MB",
                          "durationInSeconds": 413,
                          "createdAt": "2024-09-03T17:27:04Z",
                          "updatedAt": "2024-09-03T17:29:12Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/f99abc1c3679a8b501671e20632bbdfa3d592345.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdq1lc6nc72r32ej0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdq1lc6nc72r32ej0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMzY=",
                          "fileName": "3.Basic_python_programming.mp4",
                          "humanReadableFileSize": "145 MB",
                          "durationInSeconds": 710,
                          "createdAt": "2024-09-03T17:27:04Z",
                          "updatedAt": "2024-09-03T17:29:36Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/1780b82055fda34586f0e2b6b5d601e3a6251cb2.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdq6t2gpc72ovmrqg",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdq6t2gpc72ovmrqg",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMzQ=",
                          "fileName": "7.DataPreparation.mp4",
                          "humanReadableFileSize": "80.2 MB",
                          "durationInSeconds": 441,
                          "createdAt": "2024-09-03T17:27:04Z",
                          "updatedAt": "2024-09-03T17:29:10Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/e4b4a9dc32afd8dc52cd6e147c39a1a3e3dabf51.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdq6t2gpc72ovmrq0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdq6t2gpc72ovmrq0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMzM=",
                          "fileName": "6.Data_Cleaning_log_reg_2.mp4",
                          "humanReadableFileSize": "47.1 MB",
                          "durationInSeconds": 170,
                          "createdAt": "2024-09-03T17:27:03Z",
                          "updatedAt": "2024-09-03T17:28:08Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/25c99c0e74a54b7ec4ebb6fb530e1a02a3ce40c0.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdpplc6nc72r32eig",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdpplc6nc72r32eig",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMzI=",
                          "fileName": "2.Welcome_JupyterNotebook.mp4",
                          "humanReadableFileSize": "87.1 MB",
                          "durationInSeconds": 374,
                          "createdAt": "2024-09-03T17:27:03Z",
                          "updatedAt": "2024-09-03T17:28:29Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/b7eeaea30e62895783cecc4683831b0ada1402b3.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdput2gpc72ovmrpg",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdput2gpc72ovmrpg",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMzE=",
                          "fileName": "5.DataCleaning_Log_reg_1.mp4",
                          "humanReadableFileSize": "131 MB",
                          "durationInSeconds": 405,
                          "createdAt": "2024-09-03T17:27:03Z",
                          "updatedAt": "2024-09-03T17:29:09Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/317952b631236e2c34ca05a72710f1333e4b6bc7.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdpplc6nc72r32ei0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdpplc6nc72r32ei0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMzA=",
                          "fileName": "1.Installing_Anaconda_and_Jupyter.mp4",
                          "humanReadableFileSize": "73.3 MB",
                          "durationInSeconds": 399,
                          "createdAt": "2024-09-03T17:27:02Z",
                          "updatedAt": "2024-09-03T17:29:07Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/c96de9620cdcc35aafc5151366af75026e82a23f.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdphehjfs72rhcsbg",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdphehjfs72rhcsbg",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMjk=",
                          "fileName": "4.Introduction_Multivariate_Analysis_Log_Reg.mp4",
                          "humanReadableFileSize": "73.2 MB",
                          "durationInSeconds": 282,
                          "createdAt": "2024-09-03T17:27:01Z",
                          "updatedAt": "2024-09-03T17:29:06Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/46d2e602b73ab7253400e616685a22a266ef0388.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdpao1cpc72t86630",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdpao1cpc72t86630",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMjg=",
                          "fileName": "3.log_odds.mp4",
                          "humanReadableFileSize": "38 MB",
                          "durationInSeconds": 328,
                          "createdAt": "2024-09-03T17:27:01Z",
                          "updatedAt": "2024-09-03T17:29:25Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/0d6e1f72826cf6bd094bb42a4a86f6fb219ce945.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdp9lc6nc72r32ehg",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdp9lc6nc72r32ehg",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMjc=",
                          "fileName": "2.sigmoid_function_logistics_reg.mp4",
                          "humanReadableFileSize": "36.6 MB",
                          "durationInSeconds": 373,
                          "createdAt": "2024-09-03T17:27:00Z",
                          "updatedAt": "2024-09-03T17:29:03Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/8af68b55ca2ac6546cfb8024a4fd5821fbc329b7.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdp2o1cpc72t8662g",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdp2o1cpc72t8662g",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMjY=",
                          "fileName": "1.Intro Logistics Reg.mp4",
                          "humanReadableFileSize": "26.7 MB",
                          "durationInSeconds": 166,
                          "createdAt": "2024-09-03T17:26:59Z",
                          "updatedAt": "2024-09-03T17:28:03Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/b982e363f356c725d799e561d227cb8a5ce9831a.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdopehjfs72rhcsb0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdopehjfs72rhcsb0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMjU=",
                          "fileName": "11.nlp_restaurent_review.mp4",
                          "humanReadableFileSize": "86.1 MB",
                          "durationInSeconds": 301,
                          "createdAt": "2024-09-03T17:26:59Z",
                          "updatedAt": "2024-09-03T17:29:03Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/1c9416d84c516a18d582c486e6aa416dc8a2a86f.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdoqo1cpc72t86620",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdoqo1cpc72t86620",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMjM=",
                          "fileName": "10.bag_of_words_model.mp4",
                          "humanReadableFileSize": "76.4 MB",
                          "durationInSeconds": 438,
                          "createdAt": "2024-09-03T17:26:58Z",
                          "updatedAt": "2024-09-03T17:29:01Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/688b7948b23034d0dafda7e3045e5e59376c7c45.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdohehjfs72rhcsa0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdohehjfs72rhcsa0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMjI=",
                          "fileName": "9.Dep_parsing_pos_tagging.mp4",
                          "humanReadableFileSize": "44.4 MB",
                          "durationInSeconds": 207,
                          "createdAt": "2024-09-03T17:26:58Z",
                          "updatedAt": "2024-09-03T17:28:00Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/98109aac7be57879d74add3a47fd0be396f8b658.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdomt2gpc72ovmrp0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdomt2gpc72ovmrp0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMjE=",
                          "fileName": "8.stop_words.mp4",
                          "humanReadableFileSize": "28.6 MB",
                          "durationInSeconds": 170,
                          "createdAt": "2024-09-03T17:26:57Z",
                          "updatedAt": "2024-09-03T17:27:59Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/2f0ef3b57e6878c0e43cb0087d0affdb543e3d12.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdoao1cpc72t8661g",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdoao1cpc72t8661g",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMjA=",
                          "fileName": "7.text_lammetization.mp4",
                          "humanReadableFileSize": "49.7 MB",
                          "durationInSeconds": 287,
                          "createdAt": "2024-09-03T17:26:56Z",
                          "updatedAt": "2024-09-03T17:28:59Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/e27e79d2c305e31dd34703c0333064e14d162d88.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdo1ehjfs72rhcs9g",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdo1ehjfs72rhcs9g",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMTk=",
                          "fileName": "6.Text_stemming.mp4",
                          "humanReadableFileSize": "20.6 MB",
                          "durationInSeconds": 138,
                          "createdAt": "2024-09-03T17:26:56Z",
                          "updatedAt": "2024-09-03T17:27:58Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/ef177028ed41578ad386adc35207438f4f383e95.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdo6t2gpc72ovmrog",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdo6t2gpc72ovmrog",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMTg=",
                          "fileName": "5.text_word_tokenization.mp4",
                          "humanReadableFileSize": "42.6 MB",
                          "durationInSeconds": 251,
                          "createdAt": "2024-09-03T17:26:54Z",
                          "updatedAt": "2024-09-03T17:27:57Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/a96c17473ccd27a1877df5a214a4dd9ccf32272f.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdnhehjfs72rhcs90",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdnhehjfs72rhcs90",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMTc=",
                          "fileName": "4.Text_Segmentation.mp4",
                          "humanReadableFileSize": "34.4 MB",
                          "durationInSeconds": 176,
                          "createdAt": "2024-09-03T17:26:53Z",
                          "updatedAt": "2024-09-03T17:27:56Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/d826b5916f6e0cfd3d0a7ad507cba876b0e273a9.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdnet2gpc72ovmro0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdnet2gpc72ovmro0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMTY=",
                          "fileName": "3.Introduction_nltk_bag_of_words_model.mp4",
                          "humanReadableFileSize": "29.4 MB",
                          "durationInSeconds": 231,
                          "createdAt": "2024-09-03T17:26:52Z",
                          "updatedAt": "2024-09-03T17:27:54Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/0bf4451dc25db8dc94f134894f145c89726533d3.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdn6t2gpc72ovmrng",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdn6t2gpc72ovmrng",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMTU=",
                          "fileName": "2.Text_Mining_Vs_Text_Analytics.mp4",
                          "humanReadableFileSize": "21.8 MB",
                          "durationInSeconds": 147,
                          "createdAt": "2024-09-03T17:26:51Z",
                          "updatedAt": "2024-09-03T17:27:53Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/81de6681e5b0882f7cd3eff61c6ec306e59a8ae4.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdmplc6nc72r32eh0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdmplc6nc72r32eh0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMTQ=",
                          "fileName": "1.NLP_Introduction.mp4",
                          "humanReadableFileSize": "25 MB",
                          "durationInSeconds": 206,
                          "createdAt": "2024-09-03T17:26:50Z",
                          "updatedAt": "2024-09-03T17:27:53Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/15773f0271e5e22c2e122f72a75c0be73fcba849.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdmio1cpc72t86610",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdmio1cpc72t86610",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMTM=",
                          "fileName": "10.Assumptions-Linear_Regression.mp4",
                          "humanReadableFileSize": "27.9 MB",
                          "durationInSeconds": 230,
                          "createdAt": "2024-09-03T17:26:39Z",
                          "updatedAt": "2024-09-03T17:27:41Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/42cbb1c94cd41367bf861a3bb153e7bc8c9071a2.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdjplc6nc72r32egg",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdjplc6nc72r32egg",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMTI=",
                          "fileName": "9.Linear_Reg_Python.mp4",
                          "humanReadableFileSize": "113 MB",
                          "durationInSeconds": 488,
                          "createdAt": "2024-09-03T17:26:39Z",
                          "updatedAt": "2024-09-03T17:28:44Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/adc4c76c2dd9fa1079c870d36d639b31126def7f.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdjpehjfs72rhcs8g",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdjpehjfs72rhcs8g",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMTE=",
                          "fileName": "8.Linear_Regression_Excel_Video.mp4",
                          "humanReadableFileSize": "145 MB",
                          "durationInSeconds": 499,
                          "createdAt": "2024-09-03T17:26:38Z",
                          "updatedAt": "2024-09-03T17:29:48Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/37e891ba0600ac90fb828d395a98982ee09be342.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdjmt2gpc72ovmrn0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdjmt2gpc72ovmrn0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMTA=",
                          "fileName": "7.Difference_MAE_MSE_RMSE_Linear_Reg.mp4",
                          "humanReadableFileSize": "97.3 MB",
                          "durationInSeconds": 455,
                          "createdAt": "2024-09-03T17:26:37Z",
                          "updatedAt": "2024-09-03T17:28:46Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/aa79cc46f761c6650fc8efba7d2abe9d3855526d.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdjao1cpc72t8660g",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdjao1cpc72t8660g",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMDk=",
                          "fileName": "6.MSE_RMSE_Linear_Reg.mp4",
                          "humanReadableFileSize": "43 MB",
                          "durationInSeconds": 193,
                          "createdAt": "2024-09-03T17:26:36Z",
                          "updatedAt": "2024-09-03T17:27:38Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/36520ac1edc413f2a2e9e6f8b7be5e2122264a26.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdj1lc6nc72r32eg0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdj1lc6nc72r32eg0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMDg=",
                          "fileName": "5.MAE_Linear_Reg.mp4",
                          "humanReadableFileSize": "31 MB",
                          "durationInSeconds": 179,
                          "createdAt": "2024-09-03T17:26:34Z",
                          "updatedAt": "2024-09-03T17:27:39Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/8d3fa79b08f9a501320e4948e8e2e56bc1a2ccac.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdiio1cpc72t86600",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdiio1cpc72t86600",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMDc=",
                          "fileName": "4.Implementation_Kmeans_Python.mp4",
                          "humanReadableFileSize": "147 MB",
                          "durationInSeconds": 566,
                          "createdAt": "2024-09-03T17:26:34Z",
                          "updatedAt": "2024-09-03T17:29:41Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/3f26c915b793a97203092ad758c6d1407a449beb.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdihehjfs72rhcs80",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdihehjfs72rhcs80",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMDY=",
                          "fileName": "4.Math_Behind_Linear_Reg.mp4",
                          "humanReadableFileSize": "46.2 MB",
                          "durationInSeconds": 326,
                          "createdAt": "2024-09-03T17:26:34Z",
                          "updatedAt": "2024-09-03T17:28:39Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/e806f8be5197afdc26aad02a39e9069ee0eea40c.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdihehjfs72rhcs7g",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdihehjfs72rhcs7g",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMDU=",
                          "fileName": "3.Choosing_Right_Num_Clusters.mp4",
                          "humanReadableFileSize": "35.3 MB",
                          "durationInSeconds": 304,
                          "createdAt": "2024-09-03T17:26:34Z",
                          "updatedAt": "2024-09-03T17:28:36Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/be71c142f4ccd4156a90c3828b10518b47e3a02b.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdiio1cpc72t865vg",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdiio1cpc72t865vg",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMDQ=",
                          "fileName": "3.Linear_Regression_Video.mp4",
                          "humanReadableFileSize": "77.8 MB",
                          "durationInSeconds": 358,
                          "createdAt": "2024-09-03T17:26:33Z",
                          "updatedAt": "2024-09-03T17:28:37Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/5b6b04670279818950d6259a8f1df6da910b21ca.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdi9ehjfs72rhcs70",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdi9ehjfs72rhcs70",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMDM=",
                          "fileName": "2.Ramdom_Initilization_Trap.mp4",
                          "humanReadableFileSize": "18.1 MB",
                          "durationInSeconds": 160,
                          "createdAt": "2024-09-03T17:26:32Z",
                          "updatedAt": "2024-09-03T17:27:34Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/7664cc00fe5695d01ff6a2406e3ea6118397d1c8.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdi2o1cpc72t865v0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdi2o1cpc72t865v0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMDI=",
                          "fileName": "2.Machine_Learning_Types.mp4",
                          "humanReadableFileSize": "115 MB",
                          "durationInSeconds": 711,
                          "createdAt": "2024-09-03T17:26:32Z",
                          "updatedAt": "2024-09-03T17:28:38Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/ecd16506ca938a01232794002701a8e0f9a7a260.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdi1lc6nc72r32efg",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdi1lc6nc72r32efg",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMDE=",
                          "fileName": "1.Introduction_KMeans.mp4",
                          "humanReadableFileSize": "55 MB",
                          "durationInSeconds": 448,
                          "createdAt": "2024-09-03T17:26:30Z",
                          "updatedAt": "2024-09-03T17:28:34Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/b1d9b80483b8ebed1baedbd2c744479247ec1112.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdhio1cpc72t865ug",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdhio1cpc72t865ug",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAyMDA=",
                          "fileName": "1.Intro_MachineLearning.mp4",
                          "humanReadableFileSize": "27.2 MB",
                          "durationInSeconds": 216,
                          "createdAt": "2024-09-03T17:26:30Z",
                          "updatedAt": "2024-09-03T17:27:33Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/562f98a7976a2a98f72941e20636d234f0fe4ca8.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdhio1cpc72t865u0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdhio1cpc72t865u0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxOTc=",
                          "fileName": "2.Seaborn.mp4",
                          "humanReadableFileSize": "156 MB",
                          "durationInSeconds": 787,
                          "createdAt": "2024-09-03T17:26:09Z",
                          "updatedAt": "2024-09-03T17:29:17Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/5cd903f7eed48f4c640b4a41a3826490f504b035.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdc9lc6nc72r32ef0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdc9lc6nc72r32ef0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxOTY=",
                          "fileName": "1.Matplotlib (2).mp4",
                          "humanReadableFileSize": "251 MB",
                          "durationInSeconds": 1182,
                          "createdAt": "2024-09-03T17:26:08Z",
                          "updatedAt": "2024-09-03T17:30:21Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/fe7d2aa269040b4636aa39c697977fb15597d2c4.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkdc1ehjfs72rhcs5g",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkdc1ehjfs72rhcs5g",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxOTU=",
                          "fileName": "4.Implementation_K_Stratified_KCV_Python.mp4",
                          "humanReadableFileSize": "136 MB",
                          "durationInSeconds": 413,
                          "createdAt": "2024-09-03T17:25:58Z",
                          "updatedAt": "2024-09-03T17:28:04Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/b396957866c87ff9affe43305e28838558562df6.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkd9io1cpc72t865tg",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd9io1cpc72t865tg",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxOTQ=",
                          "fileName": "3.Introduction_Stratified_K_Fold_CV.mp4",
                          "humanReadableFileSize": "14.8 MB",
                          "durationInSeconds": 141,
                          "createdAt": "2024-09-03T17:25:58Z",
                          "updatedAt": "2024-09-03T17:27:00Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/80b5a582b4c1156a936e79c109d92bcb05d49154.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkd9io1cpc72t865t0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd9io1cpc72t865t0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxOTM=",
                          "fileName": "2.Introduction K Fold CV.mp4",
                          "humanReadableFileSize": "34 MB",
                          "durationInSeconds": 179,
                          "createdAt": "2024-09-03T17:25:57Z",
                          "updatedAt": "2024-09-03T17:27:01Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/3e3edacebfd9a8cf6c98be49bed77a831a9de5c0.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkd99ehjfs72rhcs50",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd99ehjfs72rhcs50",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxOTI=",
                          "fileName": "1.Introduction_Cross_Validation.mp4",
                          "humanReadableFileSize": "29.1 MB",
                          "durationInSeconds": 224,
                          "createdAt": "2024-09-03T17:25:57Z",
                          "updatedAt": "2024-09-03T17:26:58Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/c8c6c6b937b1fc0370df09f02781933d03c842a6.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkd99ehjfs72rhcs4g",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd99ehjfs72rhcs4g",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxODk=",
                          "fileName": "5.Implemenatation RandomForest.mp4",
                          "humanReadableFileSize": "119 MB",
                          "durationInSeconds": 454,
                          "createdAt": "2024-09-03T17:25:35Z",
                          "updatedAt": "2024-09-03T17:27:41Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/fb26e5f8cd55005c2a06c8caafd157129a4f25ba.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkd3pehjfs72rhcs3g",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd3pehjfs72rhcs3g",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxODg=",
                          "fileName": "4.Random Forest.mp4",
                          "humanReadableFileSize": "35.4 MB",
                          "durationInSeconds": 243,
                          "createdAt": "2024-09-03T17:25:34Z",
                          "updatedAt": "2024-09-03T17:26:36Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/047522eb8b9807c18f2be1cd47cd4d7246e024a9.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkd3mt2gpc72ovmrm0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd3mt2gpc72ovmrm0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxODc=",
                          "fileName": "3.Hyperparametr_tuning_python.mp4",
                          "humanReadableFileSize": "113 MB",
                          "durationInSeconds": 417,
                          "createdAt": "2024-09-03T17:25:34Z",
                          "updatedAt": "2024-09-03T17:27:41Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/f7016d3f93c8c7eb0ceb9c1c051f824023eb6fca.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkd3mt2gpc72ovmrlg",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd3mt2gpc72ovmrlg",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxODY=",
                          "fileName": "3.BoostrapAggregation Bagging.mp4",
                          "humanReadableFileSize": "35.1 MB",
                          "durationInSeconds": 211,
                          "createdAt": "2024-09-03T17:25:33Z",
                          "updatedAt": "2024-09-03T17:26:36Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/d99aac69a9771aae6d7a45e2caf5f87e5a50ae7d.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkd3et2gpc72ovmrl0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd3et2gpc72ovmrl0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxODU=",
                          "fileName": "2.Lasso_Ridge_Regularization.mp4",
                          "humanReadableFileSize": "88.4 MB",
                          "durationInSeconds": 489,
                          "createdAt": "2024-09-03T17:25:33Z",
                          "updatedAt": "2024-09-03T17:27:37Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/79a5f69c775b269c827370d2ad8cf10b60ad3d05.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkd3ao1cpc72t865sg",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd3ao1cpc72t865sg",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxODQ=",
                          "fileName": "2.Bais_Variance_Trade_off.mp4",
                          "humanReadableFileSize": "28.8 MB",
                          "durationInSeconds": 222,
                          "createdAt": "2024-09-03T17:25:32Z",
                          "updatedAt": "2024-09-03T17:26:34Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/80589aceb5461fddef57a3c074be95f1a7a7d0a7.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkd32o1cpc72t865s0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd32o1cpc72t865s0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxODM=",
                          "fileName": "1.Optimization.mp4",
                          "humanReadableFileSize": "62.7 MB",
                          "durationInSeconds": 343,
                          "createdAt": "2024-09-03T17:25:32Z",
                          "updatedAt": "2024-09-03T17:27:36Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/a698569f4a0b11f1260df2e10b3a10ec798972ce.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkd31ehjfs72rhcs30",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd31ehjfs72rhcs30",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxODI=",
                          "fileName": "1.Introduction RandomForest.mp4",
                          "humanReadableFileSize": "13 MB",
                          "durationInSeconds": 79,
                          "createdAt": "2024-09-03T17:25:31Z",
                          "updatedAt": "2024-09-03T17:26:33Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/67212dc5b4a0973145002838cfcb44f0d9ba59e6.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkd2pehjfs72rhcs2g",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd2pehjfs72rhcs2g",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxODE=",
                          "fileName": "8.Multivariate_Analysis_EDA.mp4",
                          "humanReadableFileSize": "20.2 MB",
                          "durationInSeconds": 96,
                          "createdAt": "2024-09-03T17:25:22Z",
                          "updatedAt": "2024-09-03T17:26:27Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/ab72557b4a01888eb633c6cb3e28259286af584b.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkd0hehjfs72rhcs20",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd0hehjfs72rhcs20",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxODA=",
                          "fileName": "7.Bivariate_Analysis_EDA.mp4",
                          "humanReadableFileSize": "67 MB",
                          "durationInSeconds": 281,
                          "createdAt": "2024-09-03T17:25:21Z",
                          "updatedAt": "2024-09-03T17:27:28Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/b6d65bb876411e32674dc70ecbda6c372a1f33a3.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkd09lc6nc72r32eeg",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd09lc6nc72r32eeg",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxNzk=",
                          "fileName": "2.Decision Tree Credit Risk.mp4",
                          "humanReadableFileSize": "143 MB",
                          "durationInSeconds": 585,
                          "createdAt": "2024-09-03T17:25:20Z",
                          "updatedAt": "2024-09-03T17:27:34Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/3e5e53d4e4f10975af9772f005d3ec4fd934d418.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkd02o1cpc72t865rg",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd02o1cpc72t865rg",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxNzg=",
                          "fileName": "6.Univariate_Analysis_EDA.mp4",
                          "humanReadableFileSize": "121 MB",
                          "durationInSeconds": 390,
                          "createdAt": "2024-09-03T17:25:20Z",
                          "updatedAt": "2024-09-03T17:27:26Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/3dc9034a9cbc0b6417d54362da14ff4a67f185ac.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkd01ehjfs72rhcs1g",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkd01ehjfs72rhcs1g",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxNzc=",
                          "fileName": "5.Data_Cleaning_II.mp4",
                          "humanReadableFileSize": "158 MB",
                          "durationInSeconds": 525,
                          "createdAt": "2024-09-03T17:25:19Z",
                          "updatedAt": "2024-09-03T17:28:27Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/b55b13956268c44b4ea519e5126823862e700c95.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkcvut2gpc72ovmrkg",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkcvut2gpc72ovmrkg",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxNzY=",
                          "fileName": "1.Introduction_Decision_Trees.mp4",
                          "humanReadableFileSize": "95.2 MB",
                          "durationInSeconds": 650,
                          "createdAt": "2024-09-03T17:25:19Z",
                          "updatedAt": "2024-09-03T17:28:25Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/fd1075da872b495c319a24e2b6095c4212cd7f8f.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkcvplc6nc72r32ee0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkcvplc6nc72r32ee0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxNzU=",
                          "fileName": "4.Data_Cleaning_I.mp4",
                          "humanReadableFileSize": "211 MB",
                          "durationInSeconds": 831,
                          "createdAt": "2024-09-03T17:25:18Z",
                          "updatedAt": "2024-09-03T17:28:28Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/3e2bfb209c6a988c9e3227f839d2921b8a861030.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkcvmt2gpc72ovmrk0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkcvmt2gpc72ovmrk0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxNzQ=",
                          "fileName": "3.Data_Gathering_EDA.mp4",
                          "humanReadableFileSize": "33.2 MB",
                          "durationInSeconds": 159,
                          "createdAt": "2024-09-03T17:25:18Z",
                          "updatedAt": "2024-09-03T17:26:20Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/713c381f298d51574bd124654a4dbca6c9853cb8.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkcvhlc6nc72r32edg",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkcvhlc6nc72r32edg",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxNzM=",
                          "fileName": "2.Graphical_NonGraphical_EDA.mp4",
                          "humanReadableFileSize": "10.4 MB",
                          "durationInSeconds": 139,
                          "createdAt": "2024-09-03T17:25:17Z",
                          "updatedAt": "2024-09-03T17:26:19Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/8777410573144021e6c840949ab5bd5967aaeb25.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkcvao1cpc72t865r0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkcvao1cpc72t865r0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxNzI=",
                          "fileName": "1.EDA_Introduction.mp4",
                          "humanReadableFileSize": "30 MB",
                          "durationInSeconds": 257,
                          "createdAt": "2024-09-03T17:25:16Z",
                          "updatedAt": "2024-09-03T17:26:19Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/7e71af89adbc9975378883840c46e2e9882e1aa4.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkcv1lc6nc72r32ed0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkcv1lc6nc72r32ed0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxNzA=",
                          "fileName": "5.GroupByDataFrame.mp4",
                          "humanReadableFileSize": "127 MB",
                          "durationInSeconds": 564,
                          "createdAt": "2024-09-03T17:24:51Z",
                          "updatedAt": "2024-09-03T17:27:01Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/0a15a14b17954556de1e06fd33ddb8e42060f13f.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkcoqo1cpc72t865qg",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkcoqo1cpc72t865qg",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxNjk=",
                          "fileName": "4.Combining_DataFrame.mp4",
                          "humanReadableFileSize": "241 MB",
                          "durationInSeconds": 1140,
                          "createdAt": "2024-09-03T17:24:51Z",
                          "updatedAt": "2024-09-03T17:29:02Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/b8c1f948c7c167f73988585408fd7854947ef31c.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkcoplc6nc72r32ecg",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkcoplc6nc72r32ecg",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxNjg=",
                          "fileName": "3.Describing_DataFrame.mp4",
                          "humanReadableFileSize": "116 MB",
                          "durationInSeconds": 599,
                          "createdAt": "2024-09-03T17:24:50Z",
                          "updatedAt": "2024-09-03T17:26:56Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/f0bc5afa01b174c3e28edc5ae06960cf6bf6b77f.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkcomt2gpc72ovmrj0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkcomt2gpc72ovmrj0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxNjc=",
                          "fileName": "2.Creating_DataFrame.mp4",
                          "humanReadableFileSize": "192 MB",
                          "durationInSeconds": 972,
                          "createdAt": "2024-09-03T17:24:49Z",
                          "updatedAt": "2024-09-03T17:27:59Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/392cc98d62be02c4fbf9160f0c74c6ca09d11aae.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkcoet2gpc72ovmrig",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkcoet2gpc72ovmrig",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxNjY=",
                          "fileName": "1.Introduction_to-Pandas.mp4",
                          "humanReadableFileSize": "118 MB",
                          "durationInSeconds": 733,
                          "createdAt": "2024-09-03T17:24:48Z",
                          "updatedAt": "2024-09-03T17:27:54Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/c7996540c4a6b80208769255b2ac835f8eac6da0.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkco1ehjfs72rhcs10",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkco1ehjfs72rhcs10",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxNjQ=",
                          "fileName": "7.Feature_Encoding_Python.mp4",
                          "humanReadableFileSize": "101 MB",
                          "durationInSeconds": 432,
                          "createdAt": "2024-09-03T17:24:41Z",
                          "updatedAt": "2024-09-03T17:25:45Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/8d02bf38d4251c76ba24dc104e04d9e654b57357.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkcm9lc6nc72r32ec0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkcm9lc6nc72r32ec0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxNjM=",
                          "fileName": "6.One_Hot_Encoding_using_pandas.mp4",
                          "humanReadableFileSize": "36.2 MB",
                          "durationInSeconds": 232,
                          "createdAt": "2024-09-03T17:24:39Z",
                          "updatedAt": "2024-09-03T17:25:42Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/0d4be85994b23946959b3c6ab832700c7c39e79c.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkclqo1cpc72t865q0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkclqo1cpc72t865q0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxNjI=",
                          "fileName": "5.One_Hot_Encoding_using_sklearn.mp4",
                          "humanReadableFileSize": "8.56 MB",
                          "durationInSeconds": 84,
                          "createdAt": "2024-09-03T17:24:38Z",
                          "updatedAt": "2024-09-03T17:25:40Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/0f5fdc50aa307561fa8a280c040f635de27db45c.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkclhehjfs72rhcs0g",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkclhehjfs72rhcs0g",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxNjE=",
                          "fileName": "4.One_Hot_Encoding.mp4",
                          "humanReadableFileSize": "45.7 MB",
                          "durationInSeconds": 255,
                          "createdAt": "2024-09-03T17:24:37Z",
                          "updatedAt": "2024-09-03T17:25:39Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/63291586b06e7c8ce1b5cfea5e0b9840d138fd66.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkcl9lc6nc72r32ebg",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkcl9lc6nc72r32ebg",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxNjA=",
                          "fileName": "3.Label_Encoding.mp4",
                          "humanReadableFileSize": "26.8 MB",
                          "durationInSeconds": 219,
                          "createdAt": "2024-09-03T17:24:35Z",
                          "updatedAt": "2024-09-03T17:25:38Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/ad76d1ab359227124f8023878bc530edff105af1.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkckut2gpc72ovmrhg",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkckut2gpc72ovmrhg",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxNTk=",
                          "fileName": "2.Feature_Encoding.mp4",
                          "humanReadableFileSize": "17.4 MB",
                          "durationInSeconds": 116,
                          "createdAt": "2024-09-03T17:24:34Z",
                          "updatedAt": "2024-09-03T17:25:35Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/74fd5400854dcae0f2044c34b3b934df47c99155.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkckio1cpc72t865pg",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkckio1cpc72t865pg",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxNTg=",
                          "fileName": "1.Multiple_Lin_Reg_Introduction.mp4",
                          "humanReadableFileSize": "8.13 MB",
                          "durationInSeconds": 86,
                          "createdAt": "2024-09-03T17:24:33Z",
                          "updatedAt": "2024-09-03T17:25:34Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/40c397a28ff9f2f7545e51fe4470434a43a9e018.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkck9lc6nc72r32eb0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkck9lc6nc72r32eb0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxNTA=",
                          "fileName": "6.Trignometric_Linalgreba_functions.mp4",
                          "humanReadableFileSize": "125 MB",
                          "durationInSeconds": 653,
                          "createdAt": "2024-09-03T17:22:41Z",
                          "updatedAt": "2024-09-03T17:25:50Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/fcb7998774e064f7ba5f855b1fe0ea53028618ef.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkboao1cpc72t865ng",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkboao1cpc72t865ng",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxNDk=",
                          "fileName": "5.Manipulation_Arrays.mp4",
                          "humanReadableFileSize": "136 MB",
                          "durationInSeconds": 657,
                          "createdAt": "2024-09-03T17:22:40Z",
                          "updatedAt": "2024-09-03T17:25:46Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/79d8b578cec6c08bd5336a494bfd1f786ee78257.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkbo1lc6nc72r32ea0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkbo1lc6nc72r32ea0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxNDg=",
                          "fileName": "4.Multidimensional_Array.mp4",
                          "humanReadableFileSize": "102 MB",
                          "durationInSeconds": 509,
                          "createdAt": "2024-09-03T17:22:38Z",
                          "updatedAt": "2024-09-03T17:25:44Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/85781a9607274299c82d4fa2362cfef171857d73.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkbnhlc6nc72r32e9g",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkbnhlc6nc72r32e9g",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxNDc=",
                          "fileName": "3.Operations_On_1D_Array.mp4",
                          "humanReadableFileSize": "152 MB",
                          "durationInSeconds": 742,
                          "createdAt": "2024-09-03T17:22:37Z",
                          "updatedAt": "2024-09-03T17:25:47Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/5d41f1ad41daba1041a9efdd4c1e29e4d859c93e.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkbn9lc6nc72r32e90",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkbn9lc6nc72r32e90",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxNDY=",
                          "fileName": "2.Creating_Numpy_Array.mp4",
                          "humanReadableFileSize": "137 MB",
                          "durationInSeconds": 703,
                          "createdAt": "2024-09-03T17:22:37Z",
                          "updatedAt": "2024-09-03T17:25:44Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/c733a724c32acbc1c6e6491f621604553367e9ba.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkbnao1cpc72t865n0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkbnao1cpc72t865n0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NjAxNDU=",
                          "fileName": "1.Introduction_Numpy.mp4",
                          "humanReadableFileSize": "96.4 MB",
                          "durationInSeconds": 517,
                          "createdAt": "2024-09-03T17:22:35Z",
                          "updatedAt": "2024-09-03T17:25:40Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/07ef142d2fab6191ca42b6be3362c801a317e6fe.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbkbmplc6nc72r32e8g",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbkbmplc6nc72r32e8g",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NTc4MTc=",
                          "fileName": "Cuvette - DSA LIVE CLASS – 2024_09_02 21_29 IST – Recording.mp4",
                          "humanReadableFileSize": "502 MB",
                          "durationInSeconds": 3506,
                          "createdAt": "2024-09-03T06:52:42Z",
                          "updatedAt": "2024-09-03T07:15:53Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/bc15287bb9ad84af0e92635fc244110a924bdf1d.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crbb4ehdvh8s72ukcv6g",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crbb4ehdvh8s72ukcv6g",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NTE2MzI=",
                          "fileName": "PGP MAY24 Batch - LIVE CLASS – 2024_09_01 20_53 IST – Recording.mp4",
                          "humanReadableFileSize": "619 MB",
                          "durationInSeconds": 7199,
                          "createdAt": "2024-09-01T19:31:42Z",
                          "updatedAt": "2024-09-01T20:12:58Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/8d7874f7258429c4749a51ab51924a4bd1682f7c.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "crac27k4dftc72tr8na0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/crac27k4dftc72tr8na0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NDg4OTg=",
                          "fileName": "PGP AUG24 Batch - LIVE CLASS – 2024_08_31 20_42 IST – Recording.mp4",
                          "humanReadableFileSize": "526 MB",
                          "durationInSeconds": 5004,
                          "createdAt": "2024-08-31T18:40:44Z",
                          "updatedAt": "2024-08-31T19:08:58Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/c4938d5da3bd01c3c95538b7b3b0087f05a99f75.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "cr9m7b7v3ofc72qo5e3g",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/cr9m7b7v3ofc72qo5e3g",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NDgxOTQ=",
                          "fileName": "Copy of 11.nlp_restaurent_review.mp4",
                          "humanReadableFileSize": "86.1 MB",
                          "durationInSeconds": 301,
                          "createdAt": "2024-08-31T14:27:38Z",
                          "updatedAt": "2024-08-31T14:30:07Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/f08b1c047a2e21ca95803df21033518b885fd5a6.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "cr9igmnv3ofc72qo5bb0",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/cr9igmnv3ofc72qo5bb0",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  },
                  {
                      "node": {
                          "id": "VmlkZW8tMTE2NDgxOTM=",
                          "fileName": "Copy of 10.bag_of_words_model.mp4",
                          "humanReadableFileSize": "76.4 MB",
                          "durationInSeconds": 438,
                          "createdAt": "2024-08-31T14:27:38Z",
                          "updatedAt": "2024-08-31T14:29:40Z",
                          "encodedState": "finished",
                          "thumbnail": "https://embed-ssl.wistia.com/deliveries/b4ad50b7939ca0f3c6db657317b332bab8f9806a.jpg",
                          "storageLocation": "videoproxy",
                          "identifier": "cr9igmj7e5rs72v62m00",
                          "playUrl": "https://platform.thinkific.com/videoproxy/v1/play/cr9igmj7e5rs72v62m00",
                          "__typename": "Video"
                      },
                      "__typename": "VideoEdge"
                  }
              ],
              "__typename": "VideoConnection"
          },
          "__typename": "Tenant"
      }
  }
};

const videoData = apiResponse.data.site.videos.edges.map(edge => ({
    fileName: edge.node.fileName,
    durationInSeconds: edge.node.durationInSeconds
}));

console.info(videoData);

const AppLayout = () => {
  return (
      <div className="app">
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>,
    children: [
      {
        path:"/",
        element:<Body/>,
      },
      {
        path : "/about",
        element :<About/>
      },
      {
        path : "/contact",
        element : <Contact/>
      },
    ],
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);