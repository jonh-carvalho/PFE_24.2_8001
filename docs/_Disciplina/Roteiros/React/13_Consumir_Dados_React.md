# React - Mapas e Locais(Overpass, Nominatim e OpenStreetMap)

Para adicionar um mapa com marcadores dos locais encontrados, podemos usar a biblioteca **Leaflet.js**, uma biblioteca de JavaScript para mapas interativos. Aqui está o código HTML e JavaScript atualizado que inclui um mapa e adiciona marcadores para cada local encontrado:

```html
Esse problema ocorre porque o Leaflet não carrega os ícones padrão corretamente em projetos com frameworks modernos, como React e Vite. Para resolver isso, precisamos importar os ícones manualmente e configurar o Leaflet para usá-los.

Aqui está uma solução que inclui a configuração correta dos ícones para que eles carreguem no projeto.

### 1. Instalar os ícones do Leaflet manualmente

Primeiro, precisamos importar manualmente os arquivos dos ícones de marcador.

1. Adicione as importações para os arquivos de ícone na parte superior do arquivo `MapView.jsx`:

   ```javascript
   import L from 'leaflet';
   import 'leaflet/dist/leaflet.css';
   import markerIcon from 'leaflet/dist/images/marker-icon.png';
   import markerShadow from 'leaflet/dist/images/marker-shadow.png';
```

2. Configure o ícone padrão do Leaflet para utilizar esses arquivos importados. Insira o seguinte código logo após as importações:

   ```javascript
   // Corrigir ícones padrão do Leaflet
   delete L.Icon.Default.prototype._getIconUrl;
   L.Icon.Default.mergeOptions({
       iconUrl: markerIcon,
       shadowUrl: markerShadow,
   });
   ```

### Código Atualizado do `MapView.jsx`

Agora, seu `MapView.jsx` deve se parecer com o seguinte:

```jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Corrigir ícones padrão do Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const MapView = ({ userLocation, places }) => {
    return (
        <MapContainer center={[userLocation.lat, userLocation.lon]} zoom={13} style={{ height: "400px", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='© OpenStreetMap contributors' />

            {/* Marcador para a posição do usuário */}
            <Marker position={[userLocation.lat, userLocation.lon]}>
                <Popup>Você está aqui</Popup>
            </Marker>

            {/* Marcadores para os locais encontrados */}
            {places.map(place => (
                <Marker key={place.id} position={[place.lat, place.lon]}>
                    <Popup>
                        <strong>{place.tags.name || 'Nome não disponível'}</strong><br />
                        {place.tags['addr:street'] || 'Endereço não disponível'}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapView;
```

### Explicação

Esse código corrige o problema de carregamento do ícone ao:

1. Importar manualmente o arquivo do ícone (`marker-icon.png`) e sua sombra (`marker-shadow.png`).
2. Configurar o Leaflet para usar esses arquivos diretamente com `L.Icon.Default.mergeOptions`.

Isso garante que os ícones de marcador do Leaflet sejam carregados corretamente em projetos Vite e React.

```

```

### Explicação das Adições

1. **Leaflet CSS e JS**:

   - Importamos a biblioteca Leaflet com a URL para o CSS e JS, o que permite criar o mapa interativo.
2. **Mapa Inicial**:

   - Inicializamos o mapa com `L.map()` e configuramos para focar na localização inicial (São Paulo, SP). Usamos o `L.tileLayer` para carregar o mapa do OpenStreetMap.
3. **Marcadores de Resultados**:

   - Na função `displayResults`, além de exibir os locais encontrados em uma lista, adicionamos um marcador no mapa para cada local.
   - Usamos `L.marker()` para adicionar um marcador nas coordenadas de cada local. Com `bindPopup()`, cada marcador exibe o nome e o endereço ao ser clicado.
4. **Centralizar o Mapa**:

   - Após adicionar os marcadores, centralizamos o mapa na localização do último local encontrado.

Esse exemplo básico é funcional e pode ser aprimorado adicionando geolocalização automática e ajustando o zoom do mapa para cobrir todos os pontos ao mesmo tempo.
