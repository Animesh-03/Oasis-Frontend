
import { useGetCurrentUserQuery } from "@/graphql/generated/generated";
import  withApollo  from '@/apollo/client';

function test(){
    const a = useGetCurrentUserQuery();
    return (
        <>
        The user is : {!a.loading && (a.data?.getCurrentUser.username)}</>
    )
}
export default withApollo({ssr:true})(test);
