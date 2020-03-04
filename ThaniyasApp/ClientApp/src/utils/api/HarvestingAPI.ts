﻿ 
import { Http } from "../Http";
import { AxiosPromise } from "axios";

export class HarvestingAPI {
  public static addHarvesting(input: any) {
    var obj = JSON.stringify(input);
    var tObj = JSON.parse(obj);
    var url = '/api/Harvesting/add-Harvestings'; 
    if (input.id && input.id !== 0) {
     // url = '/api/Harvesting/add-Harvestings/' + input.id + "?";
      return Http.axios().post(url, obj,
        {
          headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Headers": "*"
          }
        })
        .then(response => {
          return response;
        }).catch((e: any) => {
          console.log("Error in post" + e);
          return e.response;
        }) as AxiosPromise<any>;
    }
    else {
      return Http.axios().post(url, tObj)
        .catch((e) => {
          return e.response;
        }) as AxiosPromise<any>;
    }

    const resultMethod = Http.axios().post(url, obj,
      {
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Headers": "*"
        }
      })
      .then(res => {
        console.log("Response in post" + res);
        return res;
      }).catch((e: any) => {
        console.log("Error in post" + e);
        return e.response;
      });
    return resultMethod;


  }

  public static getHarvestList() {
    return Http.axios().get('/api/Harvesting/harvesting-list')
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

  public static getHarvestByIdList(id: number) {
    return Http.axios().get('/api/Harvesting/get-Harvesting/' + id)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }

  public static deleteHarvest(id: number) {
    return Http.axios().delete('/api/Harvesting/delete-Harvest/' + id)
      .catch((e) => {
        return e.response;
      }) as AxiosPromise<any>;
  }


}