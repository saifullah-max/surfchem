import { db } from '@/lib/firebase';
import {
    collection,
    DocumentData,
    getDocs,
    query as makeQuery,
    QueryConstraint
} from 'firebase/firestore';

type FireDocData = DocumentData & { id: string };

export async function readCollection(path: string, constraints?: QueryConstraint[]) {
    const colRef = collection(db, path);
    const query = constraints?.length ? makeQuery(colRef, ...constraints) : colRef;
    const snap = await getDocs(query);
    return snap.docs.map(doc => {
        return {
            id: doc.id,
            ...doc.data(),
        } as FireDocData;
    });
}
