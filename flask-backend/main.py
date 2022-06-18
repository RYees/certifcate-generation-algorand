from re import M
from algosdk import account, mnemonic
from algosdk.v2client import algod
from algosdk.future.transaction import AssetConfigTxn, wait_for_confirmation

def generate_algorand_keypair():
    private_key, address = account.generate_account()
    print("My address: {}".format(address))
    print("My private key: {}".format(private_key))
    print("My passphrase: {}".format(mnemonic.from_private_key(private_key)))

# generate_algorand_keypair()

# My address: 5TM2H2P6QIFQGBJ56T3R3YTSLWAUPZ3MHMEMAA45ONPBMMQCEDTARYOG5Q
# My private key: aay2X/w3BnzgfPetiE1KqLjLnychT29Da/gyqdP01Wns2aPp/oILAwU99Pcd4nJdgUfnbDsIwAOdc14WMgIg5g==
# My passphrase: minor survey cool lemon arrest business train wash between curtain cement melody number tree ankle execute hospital public label nasty point large exchange about balcony

algod_address = "http://localhost:4001"
algod_token = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
algod_client = algod.AlgodClient(algod_token, algod_address)

mnemonic_phrase = 'minor survey cool lemon arrest business train wash between curtain cement melody number tree ankle execute hospital public label nasty point large exchange about balcony'

# creater = account.generate_account()
creater = {
    'pk' : '5TM2H2P6QIFQGBJ56T3R3YTSLWAUPZ3MHMEMAA45ONPBMMQCEDTARYOG5Q',
    'sk': mnemonic.to_private_key(mnemonic_phrase)
}

# CREATE ASSET
# Get network params for transactions before every transaction.
params = algod_client.suggested_params()
# comment these two lines if you want to use suggested params
# params.fee = 1000
# params.flat_fee = True
# Account 1 creates an asset called latinum and
# sets Account 2 as the manager, reserve, freeze, and clawback address.
# Asset Creation transaction
txn = AssetConfigTxn(
    sender=creater['pk'],
    sp=params,
    total=10,
    default_frozen=False,
    unit_name="10academy",
    asset_name="10_acade",
    manager=creater['pk'],
    reserve=creater['pk'],
    freeze=creater['pk'],
    clawback=creater['pk'],
    url="https://10academy.org", 
    decimals=0)
# Sign with secret key of creator
stxn = txn.sign(creater['sk'])
# Send the transaction to the network and retrieve the txid.
# try:
txid = algod_client.send_transaction(stxn)
print("Signed transaction with txID: {}".format(txid))
# Wait for the transaction to be confirmed
confirmed_txn = wait_for_confirmation(algod_client, txid, 4)  
print("TXID: ", txid)
print("Result confirmed in round: {}".format(confirmed_tx['confirmed-round']))   
# except Exception as err:
#     print(err)
# # Retrieve the asset ID of the newly created asset by first
# # ensuring that the creation transaction was confirmed,
# # then grabbing the asset id from the transaction.
# print("Transaction information: {}".format(
#     json.dumps(confirmed_txn, indent=4)))
# # print("Decoded note: {}".format(base64.b64decode(
# #     confirmed_txn["txn"]["txn"]["note"]).decode()))
# try:
#     # Pull account info for the creator
#     # account_info = algod_client.account_info(accounts[1]['pk'])
#     # get asset_id from tx
#     # Get the new asset's information from the creator account
#     ptx = algod_client.pending_transaction_info(txid)
#     asset_id = ptx["asset-index"]
#     print_created_asset(algod_client, accounts[1]['pk'], asset_id)
#     print_asset_holding(algod_client, accounts[1]['pk'], asset_id)
# except Exception as e:
#     print(e)

if __name__ == "__main__":
    # print(algod_client.status())
    # print(cosimo)
    pass
