import React,{Component} from 'react';
import firebase from '../../services/firebase';
export default class Mapa extends Component{
    constructor(){
        super();
        this.state={
            listaAnalytics:[]
            
        }
    }
    Listar(){
        firebase.firestore().collection("analytics")
        .onSnapshot((analytics)=>
        {
            let analyticsArray = [];
            analytics.forEach((analytic)=>
            {
                analyticsArray.push({
                    id:analytic.id,
                    latitude:analytic.data().latitude,
                    longitude:analytic.data().longitude,
                    descricao:analytic.data().descricao,
                    idespecialidade:analytic.data().idespecialidade,
                    idade:analytic.data().idade,
                    idpaciente:analytic.data().idpaciente
                })
            })
           
            this.setState({listaAnalytics:analyticsArray},()=>{
                console.log(this.state.listaAnalytics)        })
        })
    }
    
    
    render(){
      
           
        
    
        return(
            <div >
                {/* <script
      src="http://maps.google.com/maps/api/js?sensor=false"
      type="text/javascript"
    ></script>

                <script>
                    {
                        
        function MontarMapa(itens){
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 10,
                center: new google.maps.LatLng(-23.5345442, -46.6493879),
                mapTypeId: google.maps.MapTypeId.ROADMAP
              });
              var infowindow = new google.maps.InfoWindow();
              var marker, i;
              for (i = 0; i < itens.length; i++) {
                console.log(itens[i].this.state.latitude);
                marker = new google.maps.Marker({
                  position: new google.maps.LatLng(
                    itens[i].this.state.latitude,
                    itens[i].this.state.longitude
                  ),
                  map: map
                });
                google.maps.event.addListener(
                  marker,
                  "click",
                  (function(marker, i) {
                    return function() {
                      infowindow.setContent(itens[i].id);
                      infowindow.open(map, marker);
                    };
                  })(marker, i)
                );
              }
            }
                    }
                </script>
                <div id="map"></div> */}
            </div>
        );
    }
}