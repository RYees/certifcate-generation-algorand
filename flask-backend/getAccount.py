import json
import base64
from re import L
from algosdk import account, mnemonic
from algosdk.v2client import algod
from algosdk.future import transaction
from algosdk import constants
import pytest


def generate_algorand_keypair():
    private_key, address = account.generate_account()
    print("My address: {}".format(address))
    print("My private key: {}".format(private_key))
    print("My passphrase: {}".format(mnemonic.from_private_key(private_key)))

# generate_algorand_keypair()

# My address: RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY
# My private key: aq3Es2MGqjXBFGh+HI6klA6CQB294jkr/qYJz/ALB6mIQWEpUYQk/p6zlKWZMtnJVRIbDLoT54yRsasxSyI4Ew==
# My passphrase: pull bargain supreme great favorite estate plastic gym more debris false true advice expand trophy tired grunt weather square vacuum thunder seed else absent dismiss

my_address = "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY"
private_key = "aq3Es2MGqjXBFGh+HI6klA6CQB294jkr/qYJz/ALB6mIQWEpUYQk/p6zlKWZMtnJVRIbDLoT54yRsasxSyI4Ew=="



def first_transaction_example(private_key, my_address):
    algod_address = "http://localhost:4001"
    algod_token = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    algod_client = algod.AlgodClient(algod_token, algod_address)
    account_info = algod_client.account_info(my_address)
    print("Account balance: {} microAlgos".format(account_info.get('amount')) + "\n")

    # build transaction


    params = algod_client.suggested_params()
    # comment out the next two (2) lines to use suggested fees
    params.flat_fee = True
    params.fee = constants.MIN_TXN_FEE 
    receiver = "HZ57J3K46JIJXILONBBZOHX6BKPXEM2VVXNRFSUED6DKFD5ZD24PMJ3MVA"
    note = "Hello World".encode()
    amount = 1000000
    unsigned_txn = transaction.PaymentTxn(my_address, params, receiver, amount, None, note)
        # sign transaction
    signed_txn = unsigned_txn.sign(private_key)



    #submit transaction
    txid = algod_client.send_transaction(signed_txn)
    print("Successfully sent transaction with txID: {}".format(txid))

    # wait for confirmation 
    try:
        confirmed_txn = transaction.wait_for_confirmation(algod_client, txid, 4)  
    except Exception as err:
        print(err)
        return

    print("Transaction information: {}".format(
        json.dumps(confirmed_txn, indent=4)))
    print("Decoded note: {}".format(base64.b64decode(
        confirmed_txn["txn"]["txn"]["note"]).decode()))
    print("Starting Account balance: {} microAlgos".format(account_info.get('amount')) )
    print("Amount transfered: {} microAlgos".format(amount) )    
    print("Fee: {} microAlgos".format(params.fee) ) 


    account_info = algod_client.account_info(my_address)
    print("Final Account balance: {} microAlgos".format(account_info.get('amount')) + "\n")

first_transaction_example(private_key, my_address)

# pytest implementation

def test_method():
    assert first_transaction_example("HZ57J3K46JIJXILO777ZOHX6BKPXEM2VVXNRFSUED6DKFD5ZD24PMJ3MVA90=", "HZ57J3K46JIJXILONBBZOHX6BKPXEM2VVXNR55UED6DKFD5ZD24PMJ3MVT")