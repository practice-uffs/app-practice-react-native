import {StyleSheet, View, Text, Image, ScrollView} from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Zocial } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Schedules() {
    return (
        <ScrollView>
            <View style={styles.mainView}>
                <Text style={styles.mainTitle}>
                    Biblioteca: 
                </Text>
                <View style={styles.viewPadding}>
                    <Text style={styles.subtitle}>
                        A Biblioteca do Campus Chapecó ocupa uma área total de 694,31 m², dividida em dois ambientes:
                    </Text>
                    <Text style={styles.titleView}>Salão principal:</Text>
                    <View style={styles.textImageView}>
                        <Text style={styles.placesSummaryText}>
                            Compreende uma área de 503,85 m² e é composto pelo acervo geral, de referência, periódicos, computadores de mesa para estudos e para consulta ao acervo, balcão de informações e empréstimos, sala de processamento técnico e de serviço de referência.
                        </Text>
                        <View>
                            <Image source={require("./images/library_books.jpg")} style = {styles.imageStyle}></Image>
                        </View>
                    </View>
                </View>
                <View style={styles.viewPadding}>
                    <Text style={styles.titleView}>Sala de estudos:</Text>
                    <View style={styles.textImageView}>
                        <Text style={styles.placesSummaryText}>
                            Compreende uma área de 190,56 m² e é composto por mesas e cadeiras para estudos e “pegue e leve” da biblioteca.
                        </Text>
                        <View>
                            <Image source={require("./images/library_study.jpg")} style = {styles.imageStyle}></Image>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.titleView}>Sobre a Biblioteca: </Text>
                    <View style={styles.viewPadding}>
                        <Text style={styles.subtitle}>
                            O acervo é periodicamente atualizado com materiais que atendam às áreas de atuação do Campus, bem como às áreas históricas e de literaturas. Também conta com diversos suportes informacionais, como livros, periódicos, CDs, DVDs e folhetos. Além do acesso físico a materiais, é possível acessar conteúdos digitais, através do Portal de Periódicos da CAPES, Repositório Digital da UFFS, Portal de Periódicos da UFFS e bases de dados adquiridas pela instituição.
                        </Text>  
                    </View>
                </View>
                <View>
                    <Text style={styles.titleView}>Acesso: </Text>
                    <View style={styles.viewPadding}>
                        <Text style={styles.subtitle}>
                            O setor é aberto a toda comunidade, inclusive externa, com a oferta de serviços como: acesso a computadores, consulta local e visita guiada. Porém os empréstimos domiciliares são realizados apenas para usuários com vínculo ativo com a UFFS, e mediante cadastro prévio.                        
                        </Text>  
                    </View>
                </View>
                <View>
                    <Text style={styles.titleView}>Horários(segunda a sexta feira): </Text>
                    <View style={{paddingHorizontal: 10, flexDirection: 'row'}}>
                        <View style={styles.contactViewIcon}>
                            <FontAwesome name='calendar' color={'black'} size={24} />
                        </View>
                        <View style={styles.schedulesGroupView}>
                            <View style={styles.contactViewText}> 
                                <Text style={styles.mainText}>7h30 às 11h30</Text>
                            </View>
                            <View style={styles.contactViewText}> 
                                <Text style={styles.mainText}>12h30 às 17h30</Text>
                            </View>
                            <View style={styles.contactViewText}> 
                                <Text style={styles.mainText}>18h30 às 22h30</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.titleView}>Contato: </Text>
                    <View style={styles.viewPadding}>
                        <View style={styles.mainContactGroupView}>
                            <View style={styles.contactViewText}>
                                <View style={styles.contactViewIcon}>
                                    <Entypo name="phone" size={24} color="black" /> 
                                </View>
                                <View style={styles.contactText}>
                                    <View style={styles.phoneView}> 
                                        <Text style={styles.mainText}>(49) 2049 6482</Text>
                                    </View>
                                    <View style={styles.phoneView}> 
                                        <Text style={styles.mainText}>(49) 2049 6483</Text>
                                    </View>
                                    <View style={styles.phoneView}> 
                                        <Text style={styles.mainText}>(49) 2049 6484</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.contactView}>
                                <View style={styles.contactViewIcon}>
                                    <Zocial name="email" size={24} color="black" />
                                </View>
                                <View style={styles.contactText}>
                                    <Text style={styles.mainText}>biblio.ch@uffs.edu.br</Text>
                                </View>
                            </View>
                            <View style={styles.contactView}>
                                <View style={styles.contactViewIcon}>
                                    <MaterialIcons name="place" size={24} color="black" />
                                </View>
                                <View style={styles.contactText}>
                                    <Text style={styles.mainText}>Sala 105 - Bloco da Biblioteca</Text>
                                </View>
                            </View>
                        </View>  
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainView: {
        padding: 20
    },
    mainTitle: {
        fontSize: 18, 
        textAlign: 'center', 
        paddingBottom: 10
    },
    contactViewIcon: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    mainText: {
        fontWeight: '300',
    },
    textImageView: {
        flexDirection: 'row', 
        gap: 10
    },
    subtitle: {
        fontSize: 12, 
        textAlign: 'justify', 
        fontWeight: '300'
    },
    contactView: {
        flexDirection: 'row', 
        gap: 5, 
        justifyContent: 'center'
    },
    contactText: {
        flex: 1
    },
    phoneView: {
        flexDirection: 'row',
    },
    imageStyle: {
        width: 150, 
        height: 150, 
        flex: 1, 
        borderRadius: 5
    },
    titleView: {
        textAlign: 'center', 
        paddingVertical: 10
    },
    contactViewText: {
        flexDirection: 'row', 
        gap: 5
    },
    placesSummaryText: {
        flex: 1, 
        fontSize: 12, 
        textAlignVertical: 'center', 
        textAlign: 'justify', 
        fontWeight: '300'
    },
    mainContactGroupView: {
        flex: 1, 
        alignItems: 'left',
        gap: 10,
    },
    schedulesGroupView: {
        flex: 1, 
        alignItems: 'left',
    },
    viewPadding: {
        paddingHorizontal: 10
    }
})