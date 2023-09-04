import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MsServiceService {

  constructor(private http:HttpClient) { }

  public computerVisionService(imageURL:any) {
    const API = 'https://image-reco.cognitiveservices.azure.com/vision/v2.0/analyze?visualFeatures=Categories,Description,Tags,Color,Brands,Faces,ImageType';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': '25fff90ba0314d94abc45e1a5b697d33'
    });
    return this.http.post(API, { url : imageURL}, { headers: headers });
  }
  public translateText (text:any) {
    const API = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=en&to=hi';
    ;
      
    const headers = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': '948b61d056674b28b27c23c67cbdb533',
      'Ocp-Apim-Subscription-Region': 'eastasia',
      'Content-Type': 'application/json',
});
    return this.http.post(API, [{ 'Text' : text }], { headers: headers });
  }
  public getBingSearchSuggestion(searchTerm:any){
    const API = 'https://api.bing.microsoft.com/v7.0/suggestions?q='+searchTerm;
    const head = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': '0c4088817e0641f6ae6407d11e715d06',
      
    });
    return this.http.get(API, { headers: head });
  }
}   