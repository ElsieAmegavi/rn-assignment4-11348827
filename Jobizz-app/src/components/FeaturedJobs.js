import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';


const FeaturedJobs = () => {

    const jobs = [
        { id: '1', title: 'Software Engineer', company: 'Facebook', salary: "$180,00", location: "Accra, Ghana", image: require('../../assets/facebook.png') },
        { id: '2', title: 'Google Dev OPs', company: 'Google', salary: "$190,00", location: "Osu, Ghana", image: require('../../assets/google.png') },
        { id: '3', title: 'Apple Developer', company: 'Apple', salary: "$180,00", location: "Westlands, Ghana", image: require('../../assets/apple.png') },
        { id: '4', title: 'Senior Developer', company: 'Facebook', salary: "$200,00", location: "Kisseman, Ghana", image: require('../../assets/facebook.png') },
        { id: '5', title: 'Sales Manager', company: 'Google', salary: "$160,00", location: "Airport Hills, Ghana", image: require('../../assets/google.png') },
        { id: '6', title: 'Junior Executive', company: 'Beats', salary: "$190,00", location: "Tema, Ghana", image: require('../../assets/beats.png') },
        { id: '7', title: 'Product Manager', company: 'Apple', salary: "$180,00", location: "Accra, Ghana", image: require('../../assets/apple.png') },
        { id: '8', title: 'Marketing Director', company: 'Google', salary: "$180,00", location: "Osu, Ghana", image: require('../../assets/google.png') },

    ];

    const renderJobItem = ({ item }) => (
        <View style={styles.categoryContainer}>
            <View style={styles.jobHeader}>
                <Image
                    style={styles.image}
                    source={item.image}
                />

                <View style={styles.jobTitleSection}>
                    <Text style={styles.categoryName}>{item.title}</Text>
                    <Text style={styles.companyName}>{item.company}</Text>
                </View>
            </View>

            <View style={styles.jobFooter}>
                <Text style={styles.salary}>{item.salary}</Text>
                <Text style={styles.location}>{item.location}</Text>
            </View>

        </View>
    );

    return (
        <View style={styles.container}>

            <View style={styles.featuredJobSection}>
                <View style={styles.featuredJobTitle}>
                    <Text style={styles.title}>Featured Jobs</Text>
                    <Text style={styles.seeAll}>See all</Text>
                </View>
            </View>

            <View style={styles.card}>
                <FlatList
                    horizontal
                    data={jobs}
                    keyExtractor={(item) => item.id}
                    renderItem={renderJobItem}
                />
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 10,
    },
    featuredJobSection: {
        flexDirection: 'row',
    },
    featuredJobTitle: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingRight: 200,
    },
    seeAll: {
        fontSize: 15,
        color: 'grey',
    },
    card: {
        paddingTop: 10,
        height: 200
    },
    categoryContainer: {
        width: 250,
        height: 192,
        marginRight: 10,
        backgroundColor: '#FBF9F7',
        borderRadius: 10,
        paddingLeft: 10,
    },
    jobHeader: {
        flexDirection: 'row',
    },
    jobTitleSection: {
        paddingTop: 30
    },
    categoryName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    companyName: {
        fontSize: 14,
        marginBottom: 5,
    },
    image: {
        width: 70,
        height: 100,
    },
    jobFooter: {
        flexDirection: 'row',
        paddingTop: 40,
        justifyContent: 'space-evenly'
    },
    salary: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingRight: 60
    },
    location: {
        fontSize: 16,
    },
});

export default FeaturedJobs;
